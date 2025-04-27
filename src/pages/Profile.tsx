import { Camera, PawPrint, PencilLine, ShoppingBag, User } from "lucide-react";
import Layout from "../components/Layout";
import UserInfo from "../components/profile/UserInfo";
import { useEffect, useState } from "react";
import PetsInfo from "../components/profile/PetsInfo";
import Purchases, { Purchase } from "../components/profile/Purchases.tsx";
import { useParams } from "react-router-dom";
import { CustomerProps } from "../props/CustomerProps.ts";
import { getCustomer } from "../services/CustomersService.tsx";

export function Profile() {
  const { uuid } = useParams();
  const [page, setPage] = useState<number>(0);
  const [user, setUser] = useState<CustomerProps>();
  const [isEditing, setIsEditing] = useState<boolean>(false);

  useEffect(() => {
    if (!uuid) return;

    const getCustomerData = async () => {
      try {
        const customerData = await getCustomer(uuid);
        setUser(customerData);
      } catch (error) {
        console.error("Erro ao carregar o perfil:", error);
      }
    };

    getCustomerData();
  }, [uuid]);

  const mockPurchases: Purchase[] = [
    {
      id: "p1",
      orderNumber: "BR123456789",
      date: "2024-07-20T10:30:00Z",
      status: "Entregue",
      totalAmount: 150.75,
    },
    {
      id: "p2",
      orderNumber: "BR987654321",
      date: "2024-07-22T15:00:00Z",
      status: "A caminho",
      totalAmount: 89.9,
    },
    {
      id: "p3",
      orderNumber: "BR112233445",
      date: "2024-07-23T09:15:00Z",
      status: "Processando",
      totalAmount: 215.0,
    },
    {
      id: "p4",
      orderNumber: "BR556677889",
      date: "2024-07-15T11:00:00Z",
      status: "Cancelado",
      totalAmount: 55.2,
    },
  ];

  return (
    <Layout>
      <div className="flex items-center justify-center min-h-screen p-4">
        <div className="flex flex-col gap-4 w-full max-w-6xl">
          <h1 className="text-2xl md:text-3xl font-bold text-center md:text-left">
            Meu Perfil
          </h1>
          <div className="flex flex-col lg:flex-row gap-6">
            <div className="flex flex-col items-center border-2 p-6 rounded-lg gap-4 w-full lg:w-1/3 h-fit">
              <div className="relative cursor-pointer">
                <img
                  src="profile-placeholder.jpg"
                  alt="Profile"
                  className="rounded-full w-24 h-24 md:w-32 md:h-32 border-4 border-primaryHover"
                />
                <div className="absolute bg-primary p-1 rounded-full text-white bottom-2 right-1">
                  <Camera size={20} />
                </div>
              </div>
              <div className="text-center">
                <h1 className="text-lg md:text-xl font-bold">
                  {user?.fullName}
                </h1>
                <p className="text-sm md:text-lg text-gray-600">
                  {user?.email}
                </p>
              </div>
              <button
                className="border border-primary text-primary rounded-md w-full py-2 flex items-center justify-center gap-2 hover:bg-primary hover:text-white transition"
                onClick={() => setIsEditing(!isEditing)}
              >
                <PencilLine className="w-5 h-5 mr-2" />
                <span>Editar perfil</span>
              </button>
            </div>
            <div className="w-full lg:w-2/3">
              <div className="bg-[#f1f5f9] py-2 rounded-lg flex items-center justify-center gap-4 flex-wrap">
                {["Informações", "Pedidos", "Meus Pets"].map((text, index) => (
                  <button
                    key={index}
                    onClick={() => setPage(index)}
                    type="button"
                    className={`flex items-center gap-2 px-4 py-1 rounded-md transition ${
                      page === index ? "bg-gray-300" : "hover:bg-gray-200"
                    }`}
                  >
                    {text === "Informações" && (
                      <PencilLine className="w-5 h-5" />
                    )}
                    {text === "Pedidos" && <ShoppingBag className="w-5 h-5" />}
                    {text === "Meus Pets" && <PawPrint className="w-5 h-5" />}
                    <span className="text-sm font-medium">{text}</span>
                  </button>
                ))}
              </div>
              <div className="border border-gray-300 rounded-lg p-4 mt-4 flex flex-col gap-4">
                {page === 0 && (
                  <>
                    <h1 className="flex gap-2 text-xl md:text-2xl font-bold items-center text-primary">
                      <User size={24} />
                      Dados pessoais
                    </h1>
                    <UserInfo
                      user={user}
                      isEditing={isEditing}
                      setIsEditing={setIsEditing}
                    />
                  </>
                )}
                {page === 1 && <Purchases purchases={mockPurchases} />}

                {page === 2 && <PetsInfo />}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
