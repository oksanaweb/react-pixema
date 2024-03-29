import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { auth } from "../../../firebase";
import { FirebaseError } from "firebase/app";
import {
  User,
  createUserWithEmailAndPassword,
  getAuth,
  sendEmailVerification,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signOut,
  updateEmail,
  updatePassword,
  updateProfile,
} from "firebase/auth";
import { FirebaseErrorMessage, getFirebaseErrorMessage } from "utils/firebaseAuthError";

interface UserState {
  email: string | null;
  creationTime: string | null;
  isLoading: boolean;
  errorMessage: string | null;
  isAuth: boolean;
  isPendingAuth: boolean;
  isResetPassword: boolean;
  name: string | null;
  uid: null | string;
  isUserVerified: boolean;
}

const initialState: UserState = {
  email: null,
  creationTime: null,
  isLoading: false,
  errorMessage: null,
  isAuth: false,
  isPendingAuth: false,
  isResetPassword: false,
  name: null,
  uid: "",
  isUserVerified: false,
};

export const fetchSignUpUser = createAsyncThunk<
  Pick<UserState, "email" | "creationTime" | "name" | "isUserVerified">,
  { email: string; password: string; userName: string },
  { rejectValue: FirebaseErrorMessage }
>("user/fetchSignUpUser", async ({ email, password, userName }, { dispatch, rejectWithValue }) => {
  try {
    const { user } = await createUserWithEmailAndPassword(auth, email, password);
    const name = userName as string;
    await updateProfile(auth.currentUser as User, { displayName: name });
    await sendEmailVerification(user);
    dispatch(setVerificationUser(user.emailVerified));
    return {
      email: user.email,
      creationTime: user.metadata.creationTime ?? null,
      name: user.displayName,
      uid: user.uid,
      isUserVerified: user.emailVerified,
    };
  } catch (error) {
    const firebaseError = error as FirebaseError;
    return rejectWithValue(getFirebaseErrorMessage(firebaseError.code));
  }
});

interface SignInFormValues {
  email: string;
  password: string;
}

export const fetchSignInUser = createAsyncThunk<
  Pick<UserState, "email" | "name" | "isUserVerified">,
  SignInFormValues,
  { rejectValue: string }
>("user/fetchSignInUser", async ({ email, password }, { dispatch, rejectWithValue }) => {
  try {
    const { user } = await signInWithEmailAndPassword(auth, email, password);
    dispatch(setVerificationUser(user.emailVerified));
    return {
      email: user.email,
      password: password,
      uid: user.uid,
      name: user.displayName,
      isUserVerified: user.emailVerified,
    };
  } catch (error) {
    const firebaseError = error as FirebaseError;
    return rejectWithValue(getFirebaseErrorMessage(firebaseError.code));
  }
});

export const fetchResetPassword = createAsyncThunk<undefined, { email: string }, { rejectValue: FirebaseErrorMessage }>(
  "user/fetchResetPassword",
  async ({ email }, { rejectWithValue }) => {
    try {
      const auth = getAuth();
      sendPasswordResetEmail(auth, email);
    } catch (error) {
      const firebaseError = error as FirebaseError;
      return rejectWithValue(getFirebaseErrorMessage(firebaseError.code));
    }
  },
);

export const fetchUpdateEmail = createAsyncThunk<void, { email: string }, { rejectValue: FirebaseErrorMessage }>(
  "user/fetchUpdateEmail",
  async ({ email }, { dispatch, rejectWithValue }) => {
    try {
      const auth = getAuth();
      const user = auth.currentUser;
      if (user !== null) {
        await updateEmail(user, email);
        await sendEmailVerification(user);
        dispatch(setVerificationUser(user.emailVerified));
      }
    } catch (error) {
      const firebaseError = error as FirebaseError;
      return rejectWithValue(getFirebaseErrorMessage(firebaseError.code));
    }
  },
);

export const fetchUpdatePassword = createAsyncThunk<
  void,
  { newPassword: string },
  { rejectValue: FirebaseErrorMessage }
>("user/fetchUpdatePassword", async ({ newPassword }, { rejectWithValue }) => {
  try {
    const auth = getAuth();
    const user = auth.currentUser;
    if (user !== null) {
      await updatePassword(user, newPassword);
    }
  } catch (error) {
    const firebaseError = error as FirebaseError;
    return rejectWithValue(getFirebaseErrorMessage(firebaseError.code));
  }
});

export const fetchSignOut = createAsyncThunk<void, undefined, { rejectValue: FirebaseErrorMessage }>(
  "user/fetchSignOut",
  async (_, { rejectWithValue }) => {
    try {
      const auth = getAuth();
      await signOut(auth);
    } catch (error) {
      const firebaseError = error as FirebaseError;
      return rejectWithValue(getFirebaseErrorMessage(firebaseError.code));
    }
  },
);

export const fetchUpdateUserName = createAsyncThunk<Pick<UserState, "name">, { name: string }, { rejectValue: string }>(
  "user/fetchUpdateUserName",
  async ({ name }, { rejectWithValue }) => {
    try {
      await updateProfile(auth.currentUser as User, { displayName: name });

      return {
        name: auth.currentUser?.displayName as string,
      };
    } catch (error) {
      const firebaseError = error as FirebaseError;
      return rejectWithValue(getFirebaseErrorMessage(firebaseError.code));
    }
  },
);

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setAuth: (state, { payload }) => {
      state.isAuth = true;
      state.name = payload.displayName;
      state.email = payload.email;
      state.uid = payload.uid;
    },

    unsetAuth: (state) => {
      state.isAuth = false;
      state.name = initialState.name;
      state.email = initialState.email;
      state.uid = initialState.uid;
    },

    setVerificationUser: (state, { payload }) => {
      state.isUserVerified = payload;
    },
  },
  extraReducers(builder) {
    builder.addCase(fetchSignUpUser.pending, (state) => {
      state.isLoading = true;
      state.errorMessage = null;
    });
    builder.addCase(fetchSignUpUser.fulfilled, (state, { payload }) => {
      state.email = payload.email;
      state.creationTime = payload.creationTime;
      state.name = payload.name;
      state.isLoading = false;
      state.isAuth = true;
    });
    builder.addCase(fetchSignUpUser.rejected, (state, { payload }) => {
      if (payload) {
        state.isLoading = false;
        state.errorMessage = payload;
      }
    });

    builder.addCase(fetchSignInUser.pending, (state) => {
      state.errorMessage = null;
      state.isAuth = false;
      state.isPendingAuth = true;
    });
    builder.addCase(fetchSignInUser.fulfilled, (state, { payload }) => {
      state.isAuth = true;
      state.errorMessage = null;
      state.email = payload.email;
      state.isPendingAuth = false;
    });
    builder.addCase(fetchSignInUser.rejected, (state, { payload }) => {
      if (payload) {
        state.errorMessage = payload;
        state.isAuth = false;
        state.isPendingAuth = false;
      }
    });
    builder.addCase(fetchResetPassword.pending, (state) => {
      state.isPendingAuth = true;
      state.isAuth = false;
      state.errorMessage = null;
      state.isResetPassword = false;
    });
    builder.addCase(fetchResetPassword.fulfilled, (state) => {
      state.isPendingAuth = false;
      state.errorMessage = null;
      state.isAuth = false;
      state.isResetPassword = true;
    });
    builder.addCase(fetchResetPassword.rejected, (state, { payload }) => {
      if (payload) {
        state.isPendingAuth = false;
        state.isAuth = false;
        state.isResetPassword = false;
      }
    });
    builder.addCase(fetchUpdateEmail.pending, (state) => {
      state.isPendingAuth = true;
      state.errorMessage = null;
    });
    builder.addCase(fetchUpdateEmail.fulfilled, (state) => {
      state.isPendingAuth = false;
      state.errorMessage = null;
    });
    builder.addCase(fetchUpdateEmail.rejected, (state, { payload }) => {
      if (payload) {
        state.isPendingAuth = false;
        state.errorMessage = payload;
      }
    });
    builder.addCase(fetchUpdatePassword.pending, (state) => {
      state.isPendingAuth = true;
      state.errorMessage = null;
    });
    builder.addCase(fetchUpdatePassword.fulfilled, (state) => {
      state.isPendingAuth = false;
      state.errorMessage = null;
    });
    builder.addCase(fetchUpdatePassword.rejected, (state, { payload }) => {
      if (payload) {
        state.isPendingAuth = false;
        state.errorMessage = payload;
      }
    });
    builder.addCase(fetchSignOut.pending, (state) => {
      state.isPendingAuth = true;
      state.isAuth = false;
      state.errorMessage = null;
    });
    builder.addCase(fetchSignOut.fulfilled, (state) => {
      state.isPendingAuth = false;
      state.errorMessage = null;
      state.isAuth = false;
    });
    builder.addCase(fetchSignOut.rejected, (state, { payload }) => {
      if (payload) {
        state.isPendingAuth = false;
        state.errorMessage = payload;
        state.isAuth = true;
      }
    });
    builder.addCase(fetchUpdateUserName.pending, (state) => {
      state.isLoading = true;
      state.errorMessage = null;
    });
    builder.addCase(fetchUpdateUserName.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      state.name = payload.name;
    });
    builder.addCase(fetchUpdateUserName.rejected, (state, { payload }) => {
      if (payload) {
        state.isLoading = false;
        state.errorMessage = payload;
      }
    });
  },
});

export const { setAuth, unsetAuth, setVerificationUser } = userSlice.actions;
export default userSlice.reducer;
