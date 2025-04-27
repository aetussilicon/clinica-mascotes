interface AddressUpdateProps {
  state: string;
  city: string;
  district: string;
  number: string;
  portalCode: string;
  complement: string;
}

export interface CustomerUpdateProps {
  fullName: string;
  email: string;
  phone: string;
  address: AddressUpdateProps;
  cpf: string;
  rg: string;
  birthDate: Date | null;
}
