import toast from "react-hot-toast";
import api from "../Api";
import { SignupProps } from "../props/SignupProps";

export async function SignupCustomer(signupForm: SignupProps) {
  try {
    const response = await api.post("/customers/create", signupForm);

    if (response.status === 201) {
      toast.success("Cadastrado com Sucesso!");
    }
  } catch (err) {
    console.log(err);
    toast.error("Erro ao cadastrar usuário!");
    throw err;
  }
}
