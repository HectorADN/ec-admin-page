
// https://github.com/Klerith/bolt-product-editor

// import { AdminTitle } from '@/admin/components/AdminTitle';
import { Navigate, useParams } from 'react-router';

// import { useState } from 'react';
// import { X, Plus, Upload, Tag, SaveAll } from 'lucide-react';
// import { Button } from '@/components/ui/button';
// import { Link } from 'react-router';

import { CustomFullScreenLoading } from '@/components/custom/CustomFullScreenLoading';
import { useOrder } from '@/admin/hooks/useOrder';
import { OrderForm } from './ui/OrderForm';


export const AdminOrderPage = () => {

  const { id } = useParams();

  const { isLoading, isError, data: order } = useOrder(id || '');

  const title = id === 'new' ? 'Nuevo pedido' : 'Editar pedido';
  const subTitle =
    id === 'new'
      ? 'Aquí puedes crear un nuevo pedido.'
      : 'Aquí puedes editar el pedido.';

  if ( isError ) return <Navigate to="/admin/orders" />;
  if ( isLoading ) return <CustomFullScreenLoading />;
  if ( !order ) return <Navigate to="/admin/orders" />; 

  return <OrderForm
    title={title} 
    subTitle={subTitle} 
    order={order} />
};
