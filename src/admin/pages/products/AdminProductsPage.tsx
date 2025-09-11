import { AdminTitle } from "@/admin/components/AdminTitle";
import { Button } from "@/components/ui/button";
import { Table ,TableCaption, TableHeader, TableRow, TableHead, TableBody, TableCell } from "@/components/ui/table";
import { PlusIcon } from "lucide-react";
import { Link } from "react-router";


export const AdminProductsPage = () => {
  return (
    <>
      <div className="flex justify-between items-center">
        <AdminTitle
          title="Productos"
          subtitle="Aqui puedes ver y administrar tus productos."  
        />

        <div className="flex justify-end mb-10 gap-4">
          <Link to='/admin/products/new'>
            <Button>
              <PlusIcon /> Nuevo producto
            </Button>
          </Link>
        </div>

      </div>


      <Table className="bg-white p-10 shadow-xs border border-gray-200 mb-10">
        <TableCaption>Listado de productos</TableCaption>
        
          <TableHeader>
            <TableRow>
              <TableHead className="w-[100px]">Producto</TableHead>
              <TableHead>Categoría</TableHead>
              <TableHead>Disponible</TableHead>
              
              <TableHead>Imagen</TableHead>
              <TableHead>Temporada</TableHead>
              <TableHead className="text-right">Precio</TableHead>
              
              <TableHead>Acciones</TableHead>
            </TableRow>
          </TableHeader>

          <TableBody>
            <TableRow>
              <TableCell className="font-medium">101</TableCell>
              <TableCell>Aceituna Nat S. Extra</TableCell>
              <TableCell>Disponible</TableCell>

              <TableCell>
                <img 
                  src="/img/aceitunaconamargo.jpg"                   
                  alt="Aceituna natural con amargo"
                  className="w-20 h-20 object-cover rounded-md"
                 />
              </TableCell>
              <TableCell>Todo el año</TableCell>              
              <TableCell className="text-right">$10.000</TableCell>
              
              <TableCell>
                <Link to={'/admin/products/1002'} >Ver</Link>
              </TableCell>
            </TableRow>
          </TableBody>

      </Table>
    </>
  );
};



// "id": 101,
// "nombre": "Aceituna S. Extra Negra",
// "unidad": "kg",
// "tipo": "Aceitunas",
// "stock_minimo": "120.000",
// "disponible": 1,
// "temporada": "Todo el año",
// "default_imagen": "101-1756429999.jpg"
