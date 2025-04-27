import { MapPinned } from "lucide-react";
import { CustomerProps } from "../../props/CustomerProps";

const UserInfo = ({ user }: { user?: CustomerProps } = {}) => {
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
          readOnly
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
      </div>
    </div>
  );
};

export default UserInfo;
