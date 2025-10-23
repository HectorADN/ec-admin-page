
import { AdminTitle } from "@/admin/components/AdminTitle";
import { CustomFullScreenLoading } from "@/components/custom/CustomFullScreenLoading";
import { Button } from "@/components/ui/button";
import { Table ,TableCaption, TableHeader, TableRow, TableHead, TableBody, TableCell } from "@/components/ui/table";
import { PencilIcon, PlusIcon } from "lucide-react";
import { Link } from "react-router";
import { useEmpresaPagos } from "@/admin/hooks/useEmpresaPagos";


export const AdminEmpresaPagosPage = () => {

  const { data, isLoading } = useEmpresaPagos();
  
  if ( isLoading ) return <CustomFullScreenLoading />;

  return (
    <>
      <div className="flex justify-between items-center">
        <AdminTitle
          title="Medios de Pagos"
          subtitle="Aqui puedes ver y administrar tus medios de pagos."  
        />

        <div className="flex justify-end mb-10 gap-4">
          <Link to='/admin/products/new'>
            <Button>
              <PlusIcon /> Nuevo medio
            </Button>
          </Link>
        </div>

      </div>


      <Table className="bg-white p-10 shadow-xs border border-gray-200 mb-10">
        <TableCaption>Listado de productos</TableCaption>
        
          <TableHeader>
            <TableRow>
              <TableHead>Id</TableHead>
              <TableHead>Medio</TableHead>
              <TableHead>Comision</TableHead>              
              <TableHead>Predeterminada</TableHead>
              <TableHead>Disponible</TableHead>
              <TableHead>Acciones</TableHead>
            </TableRow>
          </TableHeader>

          <TableBody>

             {
              data?.data.map( mediopago => (
                (
                <TableRow key={mediopago.id}>
                    <TableCell className="font-bold">{mediopago.id}</TableCell>
                    <TableCell>{mediopago.empresa}</TableCell>                    
                    <TableCell>{mediopago.comision} %</TableCell>                    
                    <TableCell>{mediopago.predeterminado}</TableCell>
                    <TableCell>{mediopago.disponible}</TableCell>
                    <TableCell>
                        {/* <Link to={`/admin/products/${product.id}`} >Ver</Link> */}
                        <Link to={`/admin/mediospagos/${mediopago.id}`}                  
                        >
                        <PencilIcon className="w-4 h-4 text-green-600" />
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

