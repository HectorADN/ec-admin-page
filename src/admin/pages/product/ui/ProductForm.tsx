import { useState } from "react";

import { useForm } from 'react-hook-form';

import { AdminTitle } from "@/admin/components/AdminTitle";
import { Button } from "@/components/ui/button";
import { X, SaveAll, Upload } from "lucide-react";
import { Link, Navigate } from "react-router";
import { ItemsVentaOfProduct } from "./ItemsVentaOfProduct";
import type { Product } from "@/interfaces/Product.interface";
import { useCategories } from "@/admin/hooks/useCategories";
import { CustomFullScreenLoading } from "@/components/custom/CustomFullScreenLoading";
import { cn } from "@/lib/utils";

interface Props {
    title: string;
    subTitle: string,
    product: Product,
    isPending: boolean,

    // Methods
    onSubmit: (productLike: Partial<Product>) => Promise<void>,
};

// protected $fillable = [
//     'id',
//     'nombre',
//     'nombre_corto',
//     'tipo',
//     'unidad',
//     'stock_minimo',
//     'disponible',
//     'temporada',
//     'default_imagen',
//     'categorias_id',
//  ];

export const ProductForm = ({title, subTitle, product, onSubmit, isPending }: Props) => {

  const { isLoading, isError, data } = useCategories();
  const categories = data?.data;

  // console.log('Producto llegado', {product});

  const [dragActive, setDragActive] = useState(false);
  const { 
    register, 
    handleSubmit, 
    formState: {errors},
    getValues,
    setValue,
    watch,
   } = useForm({
    defaultValues: product
  });

  const isProductDisponible = watch('disponible');


    // const handleInputChange = (field: keyof Product, value: string | number) => {
    //   setProduct((prev) => ({ ...prev, [field]: value }));
    // };

    const toggleDisponible = () => {
      setValue('disponible', !getValues('disponible'));
    }


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


  if ( isError ) return <Navigate to="/admin/products" />;
  if ( isLoading ) return <CustomFullScreenLoading />;


  return (
    <form onSubmit={ handleSubmit(onSubmit) }>
      <div className="flex justify-between items-center">
        <AdminTitle title={title} subtitle={subTitle} />
        <div className="flex justify-end mb-10 gap-4">
          <Button variant="outline" type="button">
            <Link to="/admin/products" className="flex items-center gap-2">
              <X className="w-4 h-4" />
              Cancelar
            </Link>
          </Button>

          <Button type="submit" disabled={isPending}>
            <SaveAll className="w-4 h-4" />
            Guardar cambios
          </Button>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Form */}
          <div className="lg:col-span-2 space-y-6">
            {/* Basic Information */}
            <div className="bg-white rounded-xl shadow-lg border border-slate-200 p-6">
              <h2 className="text-xl font-semibold text-slate-800 mb-6">
                Información del producto
              </h2>

              <div className="space-y-6">

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    Categoría del producto
                  </label>
                  <select
                    {...register('categorias_id')}
                    defaultValue={product.categorias_id}
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                  >
                    {
                      categories!.map((category) => (
                      <option 
                        key={category.id} 
                        value={category.id}
                        // selected={category.id === product.categorias_id}
                        >
                          {category.nombre}
                      </option>)
                    )
                    }

                  </select>
                </div>

                {/* Campo Nombre */}
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    Nombre del producto
                  </label>
                  <input
                    type="text"
                    {...register('nombre',{
                      required: true,
                      minLength: 3
                    })}
                    className={cn(
                      'w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200',
                      {
                        'bg-red-100': errors.nombre,
                      }
                    )}
                    placeholder="Nombre del producto"
                  />
                  {
                    errors.nombre && (
                      <p className="text-red-500 text-sm">
                        El Nombre es requerido
                      </p>
                    )
                  }
                </div>
                
                {/* Campo Nombre corto */}
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    Nombre corto del producto
                  </label>
                  <input
                    type="text"
                    {...register('nombre_corto',{
                      required: true,
                      minLength: 3
                    })}
                    className={cn(
                      'w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200',
                      {
                        'bg-red-100': errors.nombre_corto,
                      }
                    )}
                    placeholder="Nombre corto"
                  />
                  {
                    errors.nombre && (
                      <p className="text-red-500 text-sm">
                        El nombre corto es requerido
                      </p>
                    )
                  }
                </div>


                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                        <label className="block text-sm font-medium text-slate-700 mb-2">
                            Unidad del producto
                        </label>
                        <input
                            type="text"
                            {...register('unidad',{
                              required: true
                            })}
                            className={cn(
                              'w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200',
                              {
                                'bg-red-100': errors.unidad,
                              }
                            )}
                            placeholder="Unidad del producto"
                        />
                        {
                          errors.unidad && (
                            <p className="text-red-500 text-sm">
                              La unidad es requerida
                            </p>
                          )
                        }
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-slate-700 mb-2">
                            Tipo del producto (Opcional)
                        </label>
                        <input
                            type="text"
                            {...register('tipo',{
                              minLength: 3,
                            })}
                              className={cn(
                              'w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200',
                              {
                                'bg-red-100': errors.tipo,
                              }
                            )}                            
                            placeholder="Tipo del producto"
                        />
                        {
                          errors.tipo && (
                            <p className="text-red-500 text-sm">
                              El Tipo es requerido
                            </p>
                          )
                        }
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-slate-700 mb-2">
                            Temporada del producto
                        </label>
                        <input
                            type="text"
                            {...register('temporada',{
                              required: true,
                            })}
                            className={cn(
                              'w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200',
                              {
                                'bg-red-100': errors.temporada,
                              }
                            )}
                            placeholder="Temporada del producto"
                        />
                        {
                          errors.temporada && (
                            <p className="text-red-500 text-sm">
                              La temporada es requerida
                            </p>
                          )
                        }
                    </div>

                    {/* TODO: */}

                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      Stock mínimo (según las unidades)
                    </label>
                    <input
                      type="number"
                      {...register('stock_minimo',{
                        required: true,
                        min: 1,
                      })}

                      className={cn(
                              'w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200',
                              {
                                'bg-red-100': errors.stock_minimo,
                              }
                            )}
                      placeholder="Stock mínimo del producto"
                    />
                      {
                      errors.stock_minimo && (
                        <p className="text-red-500 text-sm">
                          El stock mínimo debe ser mayor a 0
                        </p>
                        )
                      }
                  </div>
                </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                    Disponibilidad del producto
                    </label>
                    <button
                      type="button"
                      onClick={() => toggleDisponible()}
                      disabled={ product.disponible }
                      className={`px-4 py-1 w-full rounded-full text-sm font-medium transition-all duration-200 cursor-pointer ${
                        isProductDisponible
                          ? 'bg-green-100 text-green-800'
                          : 'bg-red-200 text-red-700'
                      }`}
                    >
                      {
                        isProductDisponible
                        ? 'Disponible'
                        : 'No disponible'
                      }
                    </button>
                  </div>
                
              </div>
            </div>
          </div>
          
          <div className="space-y-6">
            {/* Product Images */}
            <div className="bg-white rounded-xl shadow-lg border border-slate-200 p-6">
              <h2 className="text-xl font-semibold text-slate-800 mb-6">
                Imágenes del producto
              </h2>

              {/* Drag & Drop Zone */}
              <div
                className={`relative border-2 border-dashed rounded-lg p-6 text-center transition-all duration-200 ${
                  dragActive
                    ? 'border-blue-400 bg-blue-50'
                    : 'border-slate-300 hover:border-slate-400'
                }`}
                onDragEnter={handleDrag}
                onDragLeave={handleDrag}
                onDragOver={handleDrag}
                onDrop={handleDrop}
              >
                <input
                  type="file"
                  multiple
                  accept="image/*"
                  className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                  onChange={handleFileChange}
                />
                <div className="space-y-4">
                  <Upload className="mx-auto h-12 w-12 text-slate-400" />
                  <div>
                    <p className="text-lg font-medium text-slate-700">
                      Arrastra las imágenes aquí
                    </p>
                    <p className="text-sm text-slate-500">
                      o haz clic para buscar
                    </p>
                  </div>
                  <p className="text-xs text-slate-400">
                    PNG, JPG, WebP hasta 10MB cada una
                  </p>
                </div>
              </div>

              {/* Current Images */}
              <div className="mt-6 space-y-3">
                <h3 className="text-sm font-medium text-slate-700">
                  Imágenes actuales
                </h3>
                <div className="grid grid-cols-2 gap-3">
                  {/* {product.images.map((image, index) => (
                    <div key={index} className="relative group">
                      <div className="aspect-square bg-slate-100 rounded-lg border border-slate-200 flex items-center justify-center">
                        <img
                          src={image}
                          alt="Product"
                          className="w-full h-full object-cover rounded-lg"
                        />
                      </div>
                      <button className="absolute top-2 right-2 p-1 bg-red-500 text-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                        <X className="h-3 w-3" />
                      </button>
                      <p className="mt-1 text-xs text-slate-600 truncate">
                        {image}
                      </p>
                    </div>
                  ))} */}
                </div>
              </div>
            </div>

            {/* Product Status */}
            <div className="bg-white rounded-xl shadow-lg border border-slate-200 p-6">
              <h2 className="text-xl font-semibold text-slate-800 mb-6">
                Estado del producto
              </h2>

              <div className="space-y-4">
                <div className="flex items-center justify-between p-3 bg-slate-50 rounded-lg">
                  <span className="text-sm font-medium text-slate-700">
                    Estado
                  </span>
                  <span className="px-2 py-1 text-xs font-medium bg-green-100 text-green-800 rounded-full">
                    Activo
                  </span>
                </div>

                <div className="flex items-center justify-between p-3 bg-slate-50 rounded-lg">
                  <span className="text-sm font-medium text-slate-700">
                    Inventario
                  </span>
                  {/* <span
                    className={`px-2 py-1 text-xs font-medium rounded-full ${
                      product.stock > 5
                        ? 'bg-green-100 text-green-800'
                        : product.stock > 0
                        ? 'bg-yellow-100 text-yellow-800'
                        : 'bg-red-100 text-red-800'
                    }`}
                  >
                    {product.stock > 5
                      ? 'En stock'
                      : product.stock > 0
                      ? 'Bajo stock'
                      : 'Sin stock'}
                  </span> */}
                </div>

              </div>
            </div>
          </div>

          <div className='className="bg-white rounded-xl shadow-lg border border-slate-200 p-6'>
            <h2 className="text-xl font-semibold text-slate-800 mb-6">
              Items del producto
            </h2>
            <ItemsVentaOfProduct 
              id={product.id}
            />
          </div>

        </div>
      </div>      

    </form>
  );
}
