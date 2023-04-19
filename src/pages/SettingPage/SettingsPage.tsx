import { SettingsForm } from "components";
import { auth } from "../../firebase";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Navigate } from "react-router-dom";
import { ROUTE } from "router";

export const SettingsPage = () => {
  //const { isAuth } = useAppSelector(getUserInfo);
  const [user, loading] = useAuthState(auth);
  if (loading) {
    return <p>Loading...</p>;
  }

  return user ? <SettingsForm /> : <Navigate to={ROUTE.Sign_in} />;
};
