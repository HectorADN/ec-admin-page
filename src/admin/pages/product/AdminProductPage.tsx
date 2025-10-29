// https://github.com/Klerith/bolt-product-editor

// import { AdminTitle } from '@/admin/components/AdminTitle';
import { Navigate, useParams } from 'react-router';

// import { useState } from 'react';
// import { X, Plus, Upload, Tag, SaveAll } from 'lucide-react';
// import { Button } from '@/components/ui/button';
// import { Link } from 'react-router';
import { useProduct } from '@/admin/hooks/useProduct';
import { CustomFullScreenLoading } from '@/components/custom/CustomFullScreenLoading';
// import { ItemsVentaOfProduct } from './ui/ItemsVentaOfProduct';
import { ProductForm } from './ui/ProductForm';


export const AdminProductPage = () => {

  const { id } = useParams();

  const { isLoading, isError, data: product } = useProduct(id || '');

  const title = id === 'new' ? 'Nuevo producto' : 'Editar producto';
  const subTitle =
    id === 'new'
      ? 'Aquí puedes crear un nuevo producto.'
      : 'Aquí puedes editar el producto.';

  if ( isError ) return <Navigate to="/admin/products" />;
  if ( isLoading ) return <CustomFullScreenLoading />;
  if ( !product ) return <Navigate to="/admin/products" />; 

  return <ProductForm 
    title={title} 
    subTitle={subTitle} 
    product={product} />
};