"use client";

import React from "react";
import { signIn } from "next-auth/react";

const page = () => {
  return (
    <div>
      <div>Credential Signin</div>
      <div>
        <p>
          email: <input type="email" placeholder="email" />
        </p>
        <p>
          password:{" "}
          <input type="password" placeholder="passowrd" name="" id="" />
        </p>
        <button
          onClick={() =>
            signIn("credentials", {
              email: "alim@gmail.com",
              password: "password",
            })
          }
        >
          Signin with Email
        </button>
      </div>

      <button onClick={() => signIn("google")}>sign in with google</button>
      <button onClick={() => signIn("github")}>sign in with github</button>
    </div>
  );
};

export default page;
