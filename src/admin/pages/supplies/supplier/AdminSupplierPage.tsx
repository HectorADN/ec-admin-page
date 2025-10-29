// https://github.com/Klerith/bolt-product-editor

// import { AdminTitle } from '@/admin/components/AdminTitle';
import { Navigate, useParams } from 'react-router';

// import { useState } from 'react';
// import { X, Plus, Upload, Tag, SaveAll } from 'lucide-react';
// import { Button } from '@/components/ui/button';
// import { Link } from 'react-router';

import { CustomFullScreenLoading } from '@/components/custom/CustomFullScreenLoading';
import { SupplierForm } from './ui/SupplierForm';
import { useSupplier } from '@/admin/hooks/useSupplier';
// import { ItemsVentaOfProduct } from './ui/ItemsVentaOfProduct';


export const AdminSupplierPage = () => {

  const { id } = useParams();

  const { isLoading, isError, data: supplier } = useSupplier(id || '');

  const title = id === 'new' ? 'Nuevo proveedor' : 'Editar proveedor';
  const subTitle =
    id === 'new'
      ? 'Aquí puedes crear un nuevo proveedor.'
      : 'Aquí puedes editar el proveedor.';

  if ( isError ) return <Navigate to="/admin/suppliers" />;
  if ( isLoading ) return <CustomFullScreenLoading />;
  if ( !supplier ) return <Navigate to="/admin/suppliers" />; 

  return <SupplierForm
    title={title} 
    subTitle={subTitle} 
    supplier={supplier} />
};