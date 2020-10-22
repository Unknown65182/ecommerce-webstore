import React from "react";
import { Button } from "../forms";
import { signInWithGoogle } from "../../firebase/utils";

import "./styles.scss";

const SignIn = () => {
  const handleSubmit = (event) => event.preventDefault();

  return (
    <div className="signin">
      <div className="signin__wrapper">
        <h2>LogIn</h2>
        <form className="signin__form form" onSubmit={handleSubmit}>
          <div className="form__socials">
            <div className="form__row">
              <Button onClick={signInWithGoogle}>Sign in with Google</Button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignIn;
