// https://github.com/Klerith/bolt-product-editor

import { Navigate, useParams } from 'react-router';
import { CustomFullScreenLoading } from '@/components/custom/CustomFullScreenLoading';
import { EmpresaPagoForm } from './ui/EmpresaPagoForm';
import { useEmpresaPago } from '@/admin/hooks/useEmpresaPago';


export const AdminEmpresaPagoPage = () => {

  const { id } = useParams();

  const { isLoading, isError, data: empresaPago } = useEmpresaPago(id || '');

  const title = id === 'new' ? 'Nuevo proveedor' : 'Editar proveedor';
  const subTitle =
    id === 'new'
      ? 'Aquí puedes crear un nuevo proveedor.'
      : 'Aquí puedes editar el proveedor.';

  if ( isError ) return <Navigate to="/admin/empresapagos" />;
  if ( isLoading ) return <CustomFullScreenLoading />;
  if ( !empresaPago ) return <Navigate to="/admin/empresapagos" />; 

  return <EmpresaPagoForm
    title={title} 
    subTitle={subTitle} 
    empresaPago={empresaPago} />
};