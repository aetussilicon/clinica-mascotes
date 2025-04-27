interface Address {
  state: string;
  city: string;
  district: string;
  street: string;
  number: string;
  postalCode: string;
  complement: string;
}

export interface CustomerProps {
  fullName: string;
  email: string;
  phone: string;
  address: Address;
  cpf: string;
  birthDate: Date;
  rg: string;
}
