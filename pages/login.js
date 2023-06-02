import React, { useState } from "react";

import LoginForm from "../components/LoginForm";

const Login = () => {
  return (
    <>
      <LoginForm
        preFilled={{ email: "test@test.com", password: "TESTtest123!" }}
      />
    </>
  );
};

export default Login;

export async function getServerSideProps({ req }) {
  // does not allow access to page if not logged in
  let token = req.headers.cookie.replace(
    /(?:(?:^|.*;\s*)token\s*\=\s*([^;]*).*$)|^.*$/,
    "$1"
  );
  if (token) {
    return {
      redirect: {
        destination: "/",
        permanent: true,
      },
    };
  }

  return {
    props: { data: "token" },
  };
}
