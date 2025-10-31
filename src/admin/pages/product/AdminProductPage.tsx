// https://github.com/Klerith/bolt-product-editor

import { Navigate, useNavigate, useParams } from 'react-router';

import { useProduct } from '@/admin/hooks/useProduct';
import { CustomFullScreenLoading } from '@/components/custom/CustomFullScreenLoading';
import { ProductForm } from './ui/ProductForm';
import type { Product } from '@/interfaces/Product.interface';
import { toast } from 'sonner';

export const AdminProductPage = () => {

  const { id } = useParams();
  const navigate = useNavigate();

  const { isLoading, isError, data: product, mutation } = useProduct(id || '');

  const title = id === 'new' ? 'Nuevo producto' : 'Editar producto';
  const subTitle =
    id === 'new'
      ? 'Aquí puedes crear un nuevo producto.'
      : 'Aquí puedes editar el producto.';

  const handleSubmit = async (productLike: Partial<Product>) => {
    console.log('adminProductPage:',{productLike});
    await mutation.mutateAsync(productLike,{
      onSuccess: ( data ) => {
        console.log(data);
        toast.success('Producto guardado correctamente',{
          position: 'top-right',
        });
        navigate(`/admin/products/${data.id}`);
      },
      onError: (error) => {
        console.log(error);
        toast.error('Error al guardar el producto',{
          position: 'bottom-right',
        });
      }
    });
  }


  if ( isError ) return <Navigate to="/admin/products" />;
  if ( isLoading ) return <CustomFullScreenLoading />;
  if ( !product ) return <Navigate to="/admin/products" />; 

  return <ProductForm 
    title={title} 
    subTitle={subTitle} 
    product={product}
    onSubmit={handleSubmit}
    isPending={mutation.isPending}
  />

};