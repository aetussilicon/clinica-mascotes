import { MapPinned } from "lucide-react";
import { CustomerProps } from "../../props/CustomerProps";
import React, { useState } from "react";
import { CustomerUpdateProps } from "../../props/CustomerUpdateProps";

interface UserInfoProps {
  user: CustomerProps;
  isEditing: boolean;
  setIsEditing: React.Dispatch<React.SetStateAction<boolean>>;
}

const UserInfo: React.FC<UserInfoProps> = ({
  user,
  isEditing,
  setIsEditing,
}) => {
  const [updateForm, setUpdateForm] = useState<CustomerUpdateProps>({
    fullName: "",
    email: "",
    phone: "",
    address: {
      state: "",
      city: "",
      district: "",
      number: "",
      portalCode: "",
      complement: "",
    },
    cpf: "",
    rg: "",
    birthDate: null,
  });

  const TextField = ({ label, value }: { label: string; value: string }) => {
    return (
      <div className="flex flex-col gap-1 border max-w-full sm:max-w-[20rem] px-4 py-2 rounded-lg">
        <label
          className="text-sm font-semibold text-gray-600 capitalize"
          htmlFor="name"
        >
          {label}
        </label>
        <input
          type="text"
          id="name"
          value={value}
          readOnly={!isEditing}
          className="bg-transparent text-gray-800"
        />
      </div>
    );
  };

  return (
    <div className="p-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        <TextField label="Nome Completo" value={user?.fullName} />
        <TextField label="Contato" value={user?.phone} />
        <TextField label="data de nascimento" value={user?.birthDate} />
        <TextField label="email" value={user?.email} />
        <TextField label="CPF" value={user?.cpf} />
        <TextField label="RG" value={user?.rg} />
      </div>
      <div>
        <h1 className="flex gap-2 text-2xl font-bold items-center text-primary my-4">
          <MapPinned size={28} />
          Endereço
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <TextField label="Rua" value={user?.address?.street} />
          <TextField label="Número" value={user?.address?.number} />
          <TextField label="Bairro" value={user?.address?.district} />
          <TextField label="Cidade" value={user?.address?.city} />
          <TextField label="Estado" value={user?.address?.state} />
          <TextField label="CEP" value={user?.address?.postalCode} />
        </div>
        {isEditing && (
          <div className="flex justify-end mt-10 gap-5">
            <button
              className="border p-2 rounded-lg text-lg"
              onClick={() => setIsEditing(false)}
            >
              Cancelar
            </button>
            <button className="default-btn">Salvar</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default UserInfo;
