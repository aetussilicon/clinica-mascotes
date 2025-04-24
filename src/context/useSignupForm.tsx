import React, { createContext, ReactNode, useContext, useState } from "react";
import { SignupProps } from "../props/SignupProps";

interface SignupFormContextProps {
  signupForm: SignupProps;
  setSignupForm: React.Dispatch<React.SetStateAction<SignupProps>>;
}

const SignupContext = createContext<SignupFormContextProps | undefined>(
  undefined,
);

export const SignupProvider = ({ children }: { children: ReactNode }) => {
  const [signupForm, setSignupForm] = useState<SignupProps>({
    fullName: "",
    email: "",
    password: "",
    confirmationPassword: "",
  });

  console.log(signupForm);

  return (
    <SignupContext.Provider value={{ signupForm, setSignupForm }}>
      {children}
    </SignupContext.Provider>
  );
};

export const useSignupForm = () => {
  const context = useContext(SignupContext);
  if (!context)
    throw new Error("useSignup must be used inside a SignupProvider");
  return context;
};
