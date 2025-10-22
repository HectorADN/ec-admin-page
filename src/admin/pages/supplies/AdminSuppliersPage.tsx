import { AdminTitle } from "@/admin/components/AdminTitle";
import { CustomFullScreenLoading } from "@/components/custom/CustomFullScreenLoading";
import { Button } from "@/components/ui/button";
import { Table ,TableCaption, TableHeader, TableRow, TableHead, TableBody, TableCell } from "@/components/ui/table";
import { PencilIcon, PlusIcon } from "lucide-react";
import { Link } from "react-router";
import { useSuppliers } from "@/admin/hooks/useSuppliers";

export const AdminSuppliersPage = () => {

  const { data, isLoading } = useSuppliers();
  
  if ( isLoading ) return <CustomFullScreenLoading />;

  return (
    <>
      <div className="flex justify-between items-center">
        <AdminTitle
          title="Proveedores"
          subtitle="Aqui puedes ver y administrar tus proveedores."  
        />

        <div className="flex justify-end mb-10 gap-4">
          <Link to='/admin/products/new'>
            <Button>
              <PlusIcon /> Nuevo proveedor
            </Button>
          </Link>
        </div>

      </div>


      <Table className="bg-white p-10 shadow-xs border border-gray-200 mb-10">
        <TableCaption>Listado de proveedores</TableCaption>
        
          <TableHeader>
            <TableRow>
              <TableHead>Proveedor</TableHead>
              <TableHead>Rut</TableHead>
              
              <TableHead>Contacto</TableHead>
              <TableHead>Ciudad</TableHead>
              <TableHead>Fono</TableHead>
              
              <TableHead>Acciones</TableHead>
            </TableRow>
          </TableHeader>

          <TableBody>

             {
              data?.data.map( supplier => (
                (<TableRow key={supplier.id}>
              <TableCell className="font-bold">
                <Link to={`/admin/suppliers/${supplier.id}`}
                  className="hover:text-gray-600 underline"
                >
                    {supplier.id} - {supplier.nombre} 
                </Link>                        
                    <br />
                    <span className="text-gray-400 text-sm">
                        { supplier.direccion }
                    </span>
              </TableCell>
              <TableCell>{ supplier.rut }</TableCell>

              <TableCell>
                { supplier.contacto }
              </TableCell>
              <TableCell>{ supplier.ciudad }</TableCell>              
              <TableCell>{ supplier.fono }</TableCell>
              
              <TableCell>
                {/* <Link to={`/admin/products/${product.id}`} >Ver</Link> */}
                <Link to={`/admin/suppliers/${supplier.id}`}                  
                >
                  <PencilIcon className="w-4 h-4 text-green-600" />
                </Link>
              </TableCell>

            </TableRow>)
              ))              
             } 
            

          </TableBody>

      </Table>
    </>
  );
};