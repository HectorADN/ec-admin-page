import { AdminTitle } from "@/admin/components/AdminTitle";
import { useUsers } from "@/admin/hooks/useUsers";
import { CustomFullScreenLoading } from "@/components/custom/CustomFullScreenLoading";
import { Button } from "@/components/ui/button";
import { Table, TableCaption, TableHeader, TableRow, TableHead, TableBody, TableCell } from "@/components/ui/table";
import { PlusIcon, PencilIcon } from "lucide-react";
import { Link } from "react-router";


export const AdminUsersPage = () => {

  const { data, isLoading } = useUsers();
  
  if ( isLoading ) return <CustomFullScreenLoading />;

  return (
    <>
      <div className="flex justify-between items-center">
        <AdminTitle
          title="Usuarios"
          subtitle="Administrar tus usuarios."
        />

        <div className="flex justify-end mb-10 gap-4">
          <Link to='/admin/users/new'>
            <Button>
              <PlusIcon /> Nuevo usuario
            </Button>
          </Link>
        </div>

      </div>


      <Table className="bg-white p-10 shadow-xs border border-gray-200 mb-10">
        <TableCaption>Listado de usuarios</TableCaption>
        
          <TableHeader>
            <TableRow>
              <TableHead>Usuario</TableHead>
              <TableHead>Email</TableHead>
              <TableHead>Rut</TableHead>
              <TableHead>Acción</TableHead>
            </TableRow>
          </TableHeader>

          <TableBody>

             {
              data?.data.map( user => (
                (
                <TableRow key={user.id}>
                    <TableCell className="font-bold">
                        <span className="text-gray-500">{user.id}</span>
                        - {user.name} <br />
                        { user.is_active 
                          ? (<span className="text-green-600 font-normal">Activo</span>)
                          : (<span className="text-red-500 font-normal">Inactivo</span>)
                        }
                    </TableCell>
                    <TableCell>
                        {user.email}
                        {
                          user.is_admin
                          ? (<span className="text-green-600 font-normal"><br />admin</span>)
                          : ('')
                        }
                    </TableCell>
                    <TableCell>{user.rut}</TableCell>
                    <TableCell>
                        <Link to={`/admin/users/${user.id}`}  >
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