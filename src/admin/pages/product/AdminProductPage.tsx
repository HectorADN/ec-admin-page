// https://github.com/Klerith/bolt-product-editor

import { AdminTitle } from '@/admin/components/AdminTitle';
import { Navigate, useParams } from 'react-router';

import { useState } from 'react';
import { X, Plus, Upload, Tag, SaveAll } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router';
import { useProduct } from '@/admin/hooks/useProduct';
import { CustomFullScreenLoading } from '@/components/custom/CustomFullScreenLoading';
import { ItemsVentaOfProduct } from './ui/ItemsVentaOfProduct';
import { ProductForm } from './ui/ProductForm';


export const AdminProductPage = () => {

  const { id } = useParams();

  const { isLoading, isError, data } = useProduct(id || '');

  console.log({isLoading, data});

  const productTitle = id === 'new' ? 'Nuevo producto' : 'Editar producto';
  const productSubtitle =
    id === 'new'
      ? 'Aquí puedes crear un nuevo producto.'
      : 'Aquí puedes editar el producto.';


  const [newTag, setNewTag] = useState('');
  // const [dragActive, setDragActive] = useState(false);

  // const availableSizes = ['XXS', 'XS', 'S', 'M', 'L', 'XL', 'XXL', 'XXXL'];


  // en caso de error : Redireccionar a '/admin/products'
  if ( isError ) return <Navigate to="/admin/products" />;
  if ( isLoading ) return <CustomFullScreenLoading />;
  if ( !data ) return <CustomFullScreenLoading />;
  // if ( !product ) return <Navigate to="/admin/products" />;
  if ( !data ) return <Navigate to="/admin/products" />;

  const product = data.data[0];
  


  const handleInputChange = (field: keyof Product, value: string | number) => {
    setProduct((prev) => ({ ...prev, [field]: value }));
  };

  const addTag = () => {
    if (newTag.trim() && !product.tags.includes(newTag.trim())) {
      setProduct((prev) => ({
        ...prev,
        tags: [...prev.tags, newTag.trim()],
      }));
      setNewTag('');
    }
  };

  const removeTag = (tagToRemove: string) => {
    setProduct((prev) => ({
      ...prev,
      tags: prev.tags.filter((tag) => tag !== tagToRemove),
    }));
  };

  const addSize = (size: string) => {
    if (!product.sizes.includes(size)) {
      setProduct((prev) => ({
        ...prev,
        sizes: [...prev.sizes, size],
      }));
    }
  };

  const removeSize = (sizeToRemove: string) => {
    setProduct((prev) => ({
      ...prev,
      sizes: prev.sizes.filter((size) => size !== sizeToRemove),
    }));
  };

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === 'dragenter' || e.type === 'dragover') {
      setDragActive(true);
    } else if (e.type === 'dragleave') {
      setDragActive(false);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    const files = e.dataTransfer.files;
    console.log(files);
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    console.log(files);
  };

  console.log('Enviando Producto al Form Como:');
  console.log(product);

  return <ProductForm 
    title={productTitle} 
    subTitle={productSubtitle} 
    product={product} />
};