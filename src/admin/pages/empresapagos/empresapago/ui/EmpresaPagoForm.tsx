
import { useForm } from 'react-hook-form';

import { AdminTitle } from "@/admin/components/AdminTitle";
import { Button } from "@/components/ui/button";
import { X, SaveAll } from "lucide-react";
import { Link, } from "react-router";
import { cn } from "@/lib/utils";
import type { EmpresaPagos } from "@/interfaces/EmpresaPagos.interface";

interface Props {
    title: string;
    subTitle: string,
    empresaPago: EmpresaPagos,

    // Methods
};

// Api EmpresaPago = [
//     'id',
//     'empresa',
//     'comision',
//     'disponible',
//     'predeterminado'
// ];

export const EmpresaPagoForm = ({title, subTitle, empresaPago }: Props) => {

    console.log({empresaPago});

  const {
    register,
    handleSubmit,
    formState: {errors},
    getValues,
    setValue,
    watch,
   } = useForm({
    defaultValues: empresaPago
  });

  const isEmpresaPagoDisponible = watch('disponible');
  const isEmpresaPagoPredeterminado = watch('predeterminado');

  const toggleDisponible = () => {
    console.log({isEmpresaPagoPredeterminado});
    setValue('disponible', !getValues('disponible'));
  }

  const togglePredeterminado = () => {
    console.log({isEmpresaPagoPredeterminado});
    setValue('predeterminado', !getValues('predeterminado'));
  }

  const onSubmit = (empresaPagoLike: EmpresaPagos) => {
    console.log('onSubmit', empresaPagoLike);
  }


  return (
    <form onSubmit={ handleSubmit(onSubmit) }>
      <div className="flex justify-between items-center">
        <AdminTitle title={title} subtitle={subTitle} />
        <div className="flex justify-end mb-10 gap-4">
          <Button variant="outline">
            <Link to="/admin/mediospagos" className="flex items-center gap-2">
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
                Información de medio de pago
              </h2>

              <div className="space-y-6">


                {/* Campo Empresa */}
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    Nombre de la empresa de pago
                  </label>
                  <input
                    type="text"
                    {...register('empresa',{
                      required: true,
                      minLength: 3
                    })}
                    className={cn(
                      'w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200',
                      {
                        'bg-red-100': errors.empresa,
                      }
                    )}
                    placeholder="Nombre de la empresa de pago"
                  />
                  {
                    errors.empresa && (
                      <p className="text-red-500 text-sm">
                        El Nombre de la empresa es requerido
                      </p>
                    )
                  }
                </div>
                
                {/* Campo Comisión */}
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    Comisión del medio de pago
                  </label>
                  <input
                    type="text"
                    {...register('comision',{
                      required: true,
                    })}
                    className={cn(
                      'w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200',
                      {
                        'bg-red-100': errors.comision,
                      }
                    )}
                    placeholder="Comisión"
                  />
                  {
                    errors.comision && (
                      <p className="text-red-500 text-sm">
                        La comisión es requerida
                      </p>
                    )
                  }
                </div>


                {/* Grupo de Campos */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    

                    {/* Campo Disponible */}
                    <div>
                        <label className="block text-sm font-medium text-slate-700 mb-2">
                            Disponibilidad de uso
                        </label>
                        <button
                            type="button"
                            onClick={() => toggleDisponible()}
                            disabled={ empresaPago.disponible }
                            className={`px-4 py-1 w-full rounded-full text-sm font-medium transition-all duration-200 cursor-pointer ${
                                isEmpresaPagoDisponible
                                ? 'bg-green-100 text-green-800'
                                : 'bg-red-200 text-red-700'
                            }`}
                        >
                            {
                                isEmpresaPagoDisponible
                                ? 'Disponible'
                                : 'No disponible'
                            }
                        </button>
                    </div>

                    {/* Campo Predeterminado */}
                    <div>
                        <label className="block text-sm font-medium text-slate-700 mb-2">
                            Empresa predeterminada de uso
                        </label>
                        <button
                            type="button"
                            onClick={() => togglePredeterminado()}
                            disabled={ empresaPago.predeterminado }
                            className={`px-4 py-1 w-full rounded-full text-sm font-medium transition-all duration-200 cursor-pointer ${
                                isEmpresaPagoPredeterminado
                                ? 'bg-green-100 text-green-800'
                                : 'bg-red-200 text-red-700'
                            }`}
                        >
                            {
                                isEmpresaPagoPredeterminado
                                ? 'Predeterminada'
                                : 'No predeterminada'
                            }
                        </button>
                    </div>


                </div>
                
              </div>
            </div>
          </div>          

        </div>
      </div>      

    </form>
  );
}
