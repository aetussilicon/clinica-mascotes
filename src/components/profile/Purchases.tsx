import React from "react";
import {Calendar, CircleDollarSign, Hash, Info, ShoppingBag} from "lucide-react";

export interface Purchase {
    id: string;
    orderNumber: string;
    date: string;
    status: 'Status' | 'Processando' | 'A caminho' | 'Entregue' | 'Cancelado';
    totalAmount: number;
}

const getStatusBadgeStyle = (status: Purchase['status']): string => {
    switch (status) {
        case 'Entregue':
            return 'bg-green-100 text-green-800';
        case 'A caminho':
            return 'bg-blue-100 text-blue-800';
        case 'Processando':
            return 'bg-yellow-100 text-yellow-800';
        case 'Cancelado':
            return 'bg-red-100 text-red-800';
        default:
            return 'bg-gray-100 text-gray-800';
    }
};

const Purchases: React.FC<{purchases: Purchase[]}> = ({purchases}) => {
    const formatCurrency = (amount: number) => {
        return `R$ ${amount.toFixed(2).replace('.', ',')}`;
    }

    const formatDate = (dateString: string) => {
        try {
            return new Date(dateString).toLocaleDateString('pt-BR');
        } catch (e) {
            return dateString;
        }
    }

    return (
        <div className='flex flex-col gap-4'>
            <h1 className='flex gap-2 text-xl md:text-2xl font-bold items-center text-primary'>
                <ShoppingBag size={24} />
                Meus Pedidos
            </h1>

            {purchases.length === 0 ? (
                <p className='text-gray-600 text-center py-4'>Você ainda não fez nenhum pedido.</p>
            ) : (
                <div className='space-y-4'>
                    {purchases.map((purchase) => (
                        <div key={purchase.id} className='border border-gray-200 rounded-lg p-4 flex flex-col md:flex-row md:items-center md:justify-between gap-3 hover:shadow-sm transition-shadow'>
                            <div className='flex-1 space-y-1'>
                                <div className='flex items-center gap-2 text-sm text-gray-700'>
                                    <Hash size={16} className='text-gray-500' />
                                    <span>Pedido nº: <span className='font-medium'>{purchase.orderNumber}</span></span>
                                </div>
                                <div className='flex items-center gap-2 text-sm text-gray-700'>
                                    <Calendar size={16} className='text-gray-500' />
                                    <span>Data: {formatDate(purchase.date)}</span>
                                </div>
                            </div>
                            <div className='flex-1 flex flex-col md:items-end gap-1'>
                                <div className='flex items-center gap-2 text-sm text-gray-700'>
                                    <CircleDollarSign size={16} className='text-gray-500' />
                                    <span>Total: <span className='font-semibold'>{formatCurrency(purchase.totalAmount)}</span></span>
                                </div>
                                <div className='flex items-center gap-2 text-sm'>
                                    <Info size={16} className='text-gray-500' />
                                    <span>Status:</span>
                                    <span
                                        className={`px-2 py-0.5 rounded-full text-xs font-medium ${getStatusBadgeStyle(purchase.status)}`}
                                    >
                                        {purchase.status}
                                    </span>
                                </div>
                            </div>
                            {/* Optional: Add a button/link to view order details */}
                            <div className='mt-2 md:mt-0 md:ml-4'>
                                <button
                                    type="button"
                                    className="text-sm text-primary hover:underline"
                                    // onClick={() => handleViewDetails(purchase.id)} // Implement this later
                                >
                                    Ver detalhes
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    )

}

export default Purchases;

