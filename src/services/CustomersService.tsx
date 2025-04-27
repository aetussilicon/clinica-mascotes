import { CustomerProps } from "../props/CustomerProps";
import toast from "react-hot-toast";
import api from "../Api";

export async function getCustomer(userId: string): Promise<CustomerProps> {
  try {
    const res = await api.get(`/customers?userId=${userId}`);
    const data = res.data;
    return data;
  } catch (err) {
    console.log(err);
    toast.error("Erro ao buscar usuário");
    throw err;
  }
}
