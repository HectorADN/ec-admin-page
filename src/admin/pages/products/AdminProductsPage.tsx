import { AdminTitle } from "@/admin/components/AdminTitle";
import { useProducts } from "@/admin/hooks/useProducts";
import { CustomFullScreenLoading } from "@/components/custom/CustomFullScreenLoading";
import { Button } from "@/components/ui/button";
import { Table ,TableCaption, TableHeader, TableRow, TableHead, TableBody, TableCell } from "@/components/ui/table";
import { PencilIcon, PlusIcon } from "lucide-react";
import { Link } from "react-router";
import { currencyFormatter } from '../../../lib/currency-formatter';


export const AdminProductsPage = () => {

  const { data, isLoading } = useProducts();
  const standartPrice = 7500;
  
  if ( isLoading ) return <CustomFullScreenLoading />;

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
              <TableHead>Producto</TableHead>
              <TableHead>Categoria</TableHead>
              
              <TableHead>Imagen</TableHead>
              <TableHead>Temporada</TableHead>
              <TableHead className="text-right">Precio</TableHead>
              
              <TableHead>Acciones</TableHead>
            </TableRow>
          </TableHeader>

          <TableBody>

             {
              data?.data.map( product => (
                (<TableRow key={product.id}>
              <TableCell className="font-bold">
                <Link to={`/admin/products/${product.id}`}
                  className="hover:text-gray-600 underline"
                >
                        {product.id} - {product.nombre} 
                </Link>
                        
                        <br />
                        { product.disponible 
                          ? (<span className="text-green-600 font-normal">Disponible</span>)
                          : (<span className="text-red-500 font-normal">No Disponible</span>)
                        }         
              </TableCell>
              <TableCell>{product.tipo}</TableCell>

              <TableCell>
                <img 
                  src={product.default_imagen}                   
                  alt={product.nombre}
                  className="w-20 h-20 object-cover rounded-md"
                 />
              </TableCell>
              <TableCell>{product.temporada}</TableCell>              
              <TableCell className="text-right">{currencyFormatter(standartPrice)}</TableCell>
              
              <TableCell>
                {/* <Link to={`/admin/products/${product.id}`} >Ver</Link> */}
                <Link to={`/admin/products/${product.id}`}                  
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



// "id": 101,
// "nombre": "Aceituna S. Extra Negra",
// "unidad": "kg",
// "tipo": "Aceitunas",
// "stock_minimo": "120.000",
// "disponible": 1,
// "temporada": "Todo el año",
// "default_imagen": "101-1756429999.jpg"
