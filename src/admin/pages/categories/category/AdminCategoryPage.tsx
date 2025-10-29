// https://github.com/Klerith/bolt-product-editor

import { Navigate, useParams } from 'react-router';

// import { useState } from 'react';
// import { X, Plus, Upload, Tag, SaveAll } from 'lucide-react';
// import { Button } from '@/components/ui/button';
// import { Link } from 'react-router';
import { CustomFullScreenLoading } from '@/components/custom/CustomFullScreenLoading';
import { CategoryForm } from './ui/CategoryForm';
import { useCategory } from '@/admin/hooks/useCategory';


export const AdminCategoryPage = () => {

  const { id } = useParams();

  const { isLoading, isError, data: category } = useCategory(id || '');

  const title = id === 'new' ? 'Nueva categoría' : 'Editar categoría';
  const subTitle =
    id === 'new'
      ? 'Aquí puedes crear una nueva categoría.'
      : 'Aquí puedes editar la categoría.';

  if ( isError ) return <Navigate to="/admin/categories" />;
  if ( isLoading ) return <CustomFullScreenLoading />;
  if ( !category ) return <Navigate to="/admin/categories" />; 

  return <CategoryForm
    title={title} 
    subTitle={subTitle} 
    category={category} />
};