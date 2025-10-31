import { AdminTitle } from "@/admin/components/AdminTitle";
import { CustomFullScreenLoading } from "@/components/custom/CustomFullScreenLoading";
import { Button } from "@/components/ui/button";
import { Table ,TableCaption, TableHeader, TableRow, TableHead, TableBody, TableCell } from "@/components/ui/table";
import { PencilIcon, PlusIcon } from "lucide-react";
import { Link } from "react-router";
import { currencyFormatter } from '../../../lib/currency-formatter';
import { useOrders } from "@/admin/hooks/useOrders";


export const AdminOrdersPage = () => {

  const { data, isLoading } = useOrders();
  const orders = data?.data;

  
  if ( isLoading ) return <CustomFullScreenLoading />;
  if ( !orders ) return <CustomFullScreenLoading />;

  return (
    <>
      <div className="flex justify-between items-center">
        <AdminTitle
          title="Pedidos"
          subtitle="Aqui puedes ver y administrar tus pedidos."  
        />

        <div className="flex justify-end mb-10 gap-4">
          <Link to='/admin/orders/new'>
            <Button>
              <PlusIcon /> Nuevo pedido
            </Button>
          </Link>
        </div>

      </div>


      <Table className="bg-white p-10 shadow-xs border border-gray-200 mb-10">

        <TableCaption>Listado de pedidos</TableCaption>
        
          <TableHeader>
            <TableRow>
              <TableHead>Id</TableHead>
              <TableHead>Proveedor</TableHead>
              <TableHead>Fecha</TableHead>
              <TableHead>Recepcion</TableHead>              
              <TableHead>Estado</TableHead>
              <TableHead className="text-right">Total</TableHead>              
              <TableHead>Acciones</TableHead>
            </TableRow>
          </TableHeader>

          <TableBody>
             {
              orders.map( order => (
                (
                <TableRow key={order.id}>
                        <TableCell>{ order.id }</TableCell>
                        <TableCell>{ order.proveedor.nombre }</TableCell>
                        <TableCell>{ order.fecha.toString() }</TableCell>
                        <TableCell>{ order.fecha_recepcion?.toString() }</TableCell>
                        <TableCell>{ order.estado }</TableCell>
                        <TableCell className="text-right">{currencyFormatter(order.total)}</TableCell>
                        <TableCell className="text-right">
                            <Link to={`/admin/orders/${order.id}`}
                            >
                            <PencilIcon className="w-4 h-4 text-green-600 text-right" />
                            </Link>
                        </TableCell>
                </TableRow>
                )
              ))
             }
          </TableBody>
      </Table>
    </>
  );
};

// export interface Order {
//     id:              number;
//     fecha:           Date;
//     fecha_recepcion: Date | null;
//     fecha_termino:   null;
//     estado:          string;
//     total:           string;
//     proveedores_id:  number;
//     // costos:          any[];
//     // pagos:           any[];
//     proveedor:       Supplier;
// }
