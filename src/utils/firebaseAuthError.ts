export enum FirebaseErrorMessage {
  WEAK_PASSWORD = "password must be contain 5 characters",
  UNKNOWN_ERROR = "unknown error - please reload page",
  WRONG_PASSWORD = "wrong password",
  EMAIL_EXISTS = "email already exist",
  INVALID_EMAIL = "enter the correct email",
  USER_NOT_FOUND = "user not found, perhaps you need to sign up",
}

export const getFirebaseErrorMessage = (code: string): FirebaseErrorMessage => {
  switch (code) {
    case "auth/weak-password":
      return FirebaseErrorMessage.WEAK_PASSWORD;

    case "auth/wrong-password":
      return FirebaseErrorMessage.WRONG_PASSWORD;

    case "auth/email-already-in-use":
      return FirebaseErrorMessage.EMAIL_EXISTS;

    case "auth/invalid-email":
      return FirebaseErrorMessage.INVALID_EMAIL;

    case "auth/user-not-found":
      return FirebaseErrorMessage.USER_NOT_FOUND;

    default:
      return FirebaseErrorMessage.UNKNOWN_ERROR;
  }
};
