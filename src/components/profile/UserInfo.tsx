import { MapPinned } from "lucide-react";
import { CustomerProps } from "../../props/CustomerProps";
import { CustomerUpdateProps } from "../../props/CustomerUpdateProps";
import { Form, Formik } from "formik";

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
  const initialUpdateValues: CustomerUpdateProps = {
    fullName: "",
    email: "",
    phone: "",
    address: {
      state: "",
      city: "",
      district: "",
      street: "",
      number: "",
      postalCode: "",
      complement: "",
    },
    cpf: "",
    rg: "",
    birthDate: null,
  };

  const TextField = ({
    label,
    name,
    value,
    onChange,
    placeholder,
  }: {
    label: string;
    name: string;
    value: string | number | null;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    placeholder?: string;
  }) => {
    return (
      <div className="flex flex-col gap-1 border max-w-full sm:max-w-[20rem] px-4 py-2 rounded-lg">
        <label
          className="text-sm font-semibold text-gray-600 capitalize"
          htmlFor={name}
        >
          {label}
        </label>
        <input
          type="text"
          id={name}
          value={value ?? ""}
          onChange={onChange}
          readOnly={!isEditing}
          placeholder={placeholder}
          className="bg-transparent text-gray-800 outline-0"
        />
      </div>
    );
  };

  function handleSubmit(values: CustomerUpdateProps) {
    console.log(values);
  }

  return (
    <div className="p-4">
      <Formik
        initialValues={initialUpdateValues}
        onSubmit={handleSubmit}
        enableReinitialize
      >
        {(formik) => (
          <Form>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              <TextField
                label="Nome Completo"
                name="fullName"
                value={formik.values.fullName}
                onChange={formik.handleChange}
                placeholder={user?.fullName}
              />

              <TextField
                label="Contato"
                name="phone"
                value={formik.values.phone}
                onChange={formik.handleChange}
                placeholder={user?.phone}
              />

              <TextField
                label="Data de Nascimento"
                name="birthDate"
                value={
                  formik.values.birthDate
                    ? formik.values.birthDate.toString()
                    : ""
                }
                onChange={formik.handleChange}
                placeholder={user?.birthDate || ""}
              />

              <TextField
                label="Email"
                name="email"
                value={formik.values.email}
                onChange={formik.handleChange}
                placeholder={user?.email}
              />

              <TextField
                label="CPF"
                name="cpf"
                value={formik.values.cpf}
                onChange={formik.handleChange}
                placeholder={user?.cpf}
              />

              <TextField
                label="RG"
                name="rg"
                value={formik.values.rg}
                onChange={formik.handleChange}
                placeholder={user?.rg}
              />
            </div>
            <div>
              <h1 className="flex gap-2 text-2xl font-bold items-center text-primary my-4">
                <MapPinned size={28} />
                Endereço
              </h1>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                <TextField
                  label="Rua"
                  name="address.street"
                  value={formik.values.address.street}
                  onChange={formik.handleChange}
                  placeholder={user?.address?.street}
                />

                <TextField
                  label="Número"
                  name="address.number"
                  value={formik.values.address.number}
                  onChange={formik.handleChange}
                  placeholder={user?.address?.number}
                />

                <TextField
                  label="Bairro"
                  name="address.district"
                  value={formik.values.address.district}
                  onChange={formik.handleChange}
                  placeholder={user?.address?.district}
                />

                <TextField
                  label="Cidade"
                  name="address.city"
                  value={formik.values.address.city}
                  onChange={formik.handleChange}
                  placeholder={user?.address?.city}
                />

                <TextField
                  label="Estado"
                  name="address.state"
                  value={formik.values.address.state}
                  onChange={formik.handleChange}
                  placeholder={user?.address?.state}
                />

                <TextField
                  label="CEP"
                  name="address.postalCode"
                  value={formik.values.address.postalCode}
                  onChange={formik.handleChange}
                  placeholder={user?.address?.postalCode}
                />
              </div>
              {isEditing && (
                <div className="flex justify-end mt-10 gap-5">
                  <button
                    type="button"
                    className="border p-2 rounded-lg text-lg"
                    onClick={() => {
                      setIsEditing(false);
                      formik.resetForm({ values: initialUpdateValues });
                    }}
                  >
                    Cancelar
                  </button>
                  <button className="default-btn">Salvar</button>
                </div>
              )}
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default UserInfo;
