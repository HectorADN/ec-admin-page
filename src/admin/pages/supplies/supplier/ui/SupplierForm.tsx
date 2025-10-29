import { useState } from "react";

import { useForm } from 'react-hook-form';

import { AdminTitle } from "@/admin/components/AdminTitle";
import { Button } from "@/components/ui/button";
import { X, SaveAll, Tag, Upload, Plus } from "lucide-react";
import { Form, Link, Navigate } from "react-router";
import { cn } from "@/lib/utils";
import type { Supplier } from "@/interfaces/Supplier.interface";

interface Props {
    title: string;
    subTitle: string,
    supplier: Supplier,

    // Methods
};

// api Supplier = [
//     'nombre',    *
//     'giro',      *
//     'rut',       *
//     'contacto',  *
//     'direccion', *
//     'ciudad',    *
//     'fono',      *
//     'logo',
// ];

export const SupplierForm = ({title, subTitle, supplier }: Props) => {


  const [dragActive, setDragActive] = useState(false);
  const { 
    register, 
    handleSubmit, 
    formState: {errors},
    getValues,
    setValue,
    watch,
   } = useForm({
    defaultValues: supplier
  });

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

  const onSubmit = (productLike: Supplier) => {
    console.log('onSubmit', productLike);
  }


  return (
    <form onSubmit={ handleSubmit(onSubmit) }>
      <div className="flex justify-between items-center">
        <AdminTitle title={title} subtitle={subTitle} />
        <div className="flex justify-end mb-10 gap-4">
          <Button variant="outline">
            <Link to="/admin/suppliers" className="flex items-center gap-2">
              <X className="w-4 h-4" />
              Cancelar
            </Link>
          </Button>

          <Button>
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
                Información del proveedor
              </h2>

              <div className="space-y-6">


                {/* Campo Nombre */}
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    Nombre del proveedor
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
                    placeholder="Nombre del proveedor"
                  />
                  {
                    errors.nombre && (
                      <p className="text-red-500 text-sm">
                        El Nombre es requerido
                      </p>
                    )
                  }
                </div>
                
                {/* Campo Giro Proveedor */}
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    Giro del proveedor
                  </label>
                  <input
                    type="text"
                    {...register('giro',{
                      required: true,
                      minLength: 3
                    })}
                    className={cn(
                      'w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200',
                      {
                        'bg-red-100': errors.giro,
                      }
                    )}
                    placeholder="Giro"
                  />
                  {
                    errors.nombre && (
                      <p className="text-red-500 text-sm">
                        El giro es requerido
                      </p>
                    )
                  }
                </div>

                {/* Campo Contacto Proveedor */}
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    Nombre de contacto del proveedor
                  </label>
                  <input
                    type="text"
                    {...register('contacto',{
                      required: true,
                      minLength: 3
                    })}
                    className={cn(
                      'w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200',
                      {
                        'bg-red-100': errors.contacto,
                      }
                    )}
                    placeholder="Contacto"
                  />
                  {
                    errors.contacto && (
                      <p className="text-red-500 text-sm">
                        El nombre de contacto del proveedor es requerido
                      </p>
                    )
                  }
                </div>

                {/* Campo Dirtección del Proveedor */}
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    Dirección del proveedor
                  </label>
                  <input
                    type="text"
                    {...register('direccion',{
                      required: true,
                      minLength: 3
                    })}
                    className={cn(
                      'w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200',
                      {
                        'bg-red-100': errors.direccion,
                      }
                    )}
                    placeholder="Dirección"
                  />
                  {
                    errors.direccion && (
                      <p className="text-red-500 text-sm">
                        La dirección del proveedor es requerido
                      </p>
                    )
                  }
                </div>

                {/* Grupo de Campos */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    
                    {/* Rut del Proveedor */}
                    <div>
                        <label className="block text-sm font-medium text-slate-700 mb-2">
                            Rut
                        </label>
                        <input
                            type="text"
                            {...register('rut',{
                              required: true
                            })}
                            className={cn(
                              'w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200',
                              {
                                'bg-red-100': errors.rut,
                              }
                            )}
                            placeholder="Unidad del producto"
                        />
                        {
                          errors.rut && (
                            <p className="text-red-500 text-sm">
                              El rut del proveedor es requerido.
                            </p>
                          )
                        }
                    </div>

                    {/* Ciudad del proveedor */}
                    <div>
                        <label className="block text-sm font-medium text-slate-700 mb-2">
                            Ciudad
                        </label>
                        <input
                            type="text"
                            {...register('ciudad',{
                              minLength: 3,
                            })}
                              className={cn(
                              'w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200',
                              {
                                'bg-red-100': errors.ciudad,
                              }
                            )}                            
                            placeholder="Ciudad del proveedor"
                        />
                        {
                          errors.ciudad && (
                            <p className="text-red-500 text-sm">
                              La ciudad es requerida
                            </p>
                          )
                        }
                    </div>

                    {/* Fono Proveedor */}
                    <div>
                        <label className="block text-sm font-medium text-slate-700 mb-2">
                            Fono contacto proveedor
                        </label>
                        <input
                            type="text"
                            {...register('fono',{
                              required: true,
                            })}
                            className={cn(
                              'w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200',
                              {
                                'bg-red-100': errors.fono,
                              }
                            )}
                            placeholder="Temporada del producto"
                        />
                        {
                          errors.fono && (
                            <p className="text-red-500 text-sm">
                              El fono de contacto es requerido
                            </p>
                          )
                        }
                    </div>


                </div>
                
              </div>
            </div>
          </div>
          
          <div className="space-y-6">
            {/* Product Images */}
            <div className="bg-white rounded-xl shadow-lg border border-slate-200 p-6">
              <h2 className="text-xl font-semibold text-slate-800 mb-6">
                Logo del proveedor
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
                  Imágen actual
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

          </div>
        </div>
      </div>      

    </form>
  );
}
