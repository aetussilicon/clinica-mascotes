import { useState } from "react";
import LoginForm from "./LoginForm";
import SocialButton from "./SocialButton";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import SignupForm from "./SignupForm";
import { Toaster } from "react-hot-toast";
import { SignupCustomer } from "../../services/AuthService";
import { useSignupForm } from "../../context/useSignupForm";

const AuthScreen = () => {
  const [isLoginFlow, setIsLoginFlow] = useState(true);

  const { signupForm } = useSignupForm();

  const handleSignupSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await SignupCustomer(signupForm);
  };

  const handleLoginSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert("Unsopported");
  };

  return (
    <>
      <div className="w-fit h-fit bg-white rounded-lg shadow-md flex flex-col gap-2 p-4 self-center">
        <div className="flex flex-col gap-2 items-center">
          <h1 className="text-xl font-bold text-primaryHover mb-5">
            {isLoginFlow ? "Bem-Vindo de volta!" : "Bem-Vindo"}
          </h1>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              if (isLoginFlow) {
                handleLoginSubmit(e);
              } else {
                handleSignupSubmit(e); // Passa o evento corretamente
              }
            }}
          >
            <div className="flex flex-col gap-2">
              {isLoginFlow ? <LoginForm /> : <SignupForm />}
              <button
                type="button"
                className="self-center text-sm text-primary"
                onClick={() => setIsLoginFlow(!isLoginFlow)}
              >
                {isLoginFlow
                  ? "Não tem uma conta? Cadastre-se"
                  : "Já tem uma conta? Entrar"}
              </button>
              <button
                type="submit"
                className="bg-primary hover:bg-primaryHover transition duration-200 text-white rounded-lg p-2 w-[350px] mt-5 font-bold"
              >
                {isLoginFlow ? "Entrar" : "Cadastrar"}
              </button>
            </div>
          </form>
          <div className="flex items-center w-full my-4">
            <div className="h-[1px] flex-1 bg-gray-300" />
            <span className="px-3 text-gray-500 text-sm">ou</span>
            <div className="h-[1px] flex-1 bg-gray-300" />
          </div>
          <div className="flex flex-col gap-2">
            <SocialButton provider="google" />
            <SocialButton provider="outlook" />
            <SocialButton provider="facebook" />
            <Link
              to="/"
              className="self-center relative items-center text-sm text-primary hover:text-primaryHover mt-2"
            >
              <ArrowLeft size={20} className="absolute -left-6" /> Voltar para
              tela inicial
            </Link>
          </div>
        </div>
      </div>
      <Toaster position="top-right" />
    </>
  );
};

export default AuthScreen;
