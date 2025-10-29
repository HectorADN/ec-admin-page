import { AdminTitle } from "@/admin/components/AdminTitle";
import { CustomFullScreenLoading } from "@/components/custom/CustomFullScreenLoading";
import { Button } from "@/components/ui/button";
import { Table ,TableCaption, TableHeader, TableRow, TableHead, TableBody, TableCell } from "@/components/ui/table";
import { PencilIcon, PlusIcon } from "lucide-react";
import { Link } from "react-router";
import { useCategories } from "@/admin/hooks/useCategories";

export const AdminCategoriesPage = () => {

  const { data, isLoading } = useCategories();
  const categories = data?.data || [];
  
  if ( isLoading ) return <CustomFullScreenLoading />;
//   if ( !categories ) return 

  return (
    <>
      <div className="flex justify-between items-center">
        <AdminTitle
          title="Categorías"
          subtitle="Aqui puedes ver y administrar tus categorías."  
        />

        <div className="flex justify-end mb-10 gap-4">
          <Link to='/admin/categories/new'>
            <Button>
              <PlusIcon /> Nueva categoría
            </Button>
          </Link>
        </div>

      </div>

      <Table className="bg-white p-10 shadow-xs border border-gray-200 mb-10">
        <TableCaption>Listado de categorías</TableCaption>
        
          <TableHeader>
            <TableRow>
              <TableHead>Id</TableHead>
              <TableHead>Categoria</TableHead>             
              <TableHead>Acciones</TableHead>
            </TableRow>
          </TableHeader>

          <TableBody>

             {
              categories.map( category => (
                (<TableRow key={category.id}>
                    <TableCell>
                        {category.id}      
                    </TableCell>
                    <TableCell>{category.nombre} </TableCell>
                    <TableCell>
                        {/* <Link to={`/admin/products/${product.id}`} >Ver</Link> */}
                        <Link to={`/admin/categories/${category.id}`}                  
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
