
import { useForm } from 'react-hook-form';

import { AdminTitle } from "@/admin/components/AdminTitle";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Link } from 'react-router';
import { SaveAll, X } from 'lucide-react';

import type { Category } from "@/interfaces/Category.interface";

interface Props {
    title: string;
    subTitle: string,
    category: Category,

    // Methods
};

// protected $fillable = [
//     'id',
//     'nombre',
//  ];

export const CategoryForm = ({title, subTitle, category }: Props) => {

  const { 
    register, 
    handleSubmit, 
    formState: {errors},

   } = useForm({
    defaultValues: category
  });


  const onSubmit = (categoryLike: Category) => {
    console.log('onSubmit', categoryLike);
  }


  return (
    <form onSubmit={ handleSubmit(onSubmit) }>
      <div className="flex justify-between items-center">
        <AdminTitle title={title} subtitle={subTitle} />
        <div className="flex justify-end mb-10 gap-4">
          <Button variant="outline">
            <Link to="/admin/categories" className="flex items-center gap-2">
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
                Información del producto
              </h2>

              <div className="space-y-6">

                {/* Campo Nombre */}
                <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                        Nombre de categoría
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
                
              </div>
            </div>
          </div>

        </div>
      </div>      

    </form>
  );
}
