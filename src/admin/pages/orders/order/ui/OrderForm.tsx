
import { useForm } from 'react-hook-form';

import { AdminTitle } from "@/admin/components/AdminTitle";
import { Button } from "@/components/ui/button";
import { X, SaveAll } from "lucide-react";
import { Link } from "react-router";
import { cn } from "@/lib/utils";
import type { Order } from "@/interfaces/Order.interface";
import { useSuppliers } from "@/admin/hooks/useSuppliers";
import { CustomFullScreenLoading } from '@/components/custom/CustomFullScreenLoading';

interface Props {
    title: string;
    subTitle: string,
    order: Order,

    // Methods
};

// API Pedido / Order = [
//     'id',
//     'fecha',             *
//     'fecha_recepcion',   *
//     'fecha_termino',     *
//     'estado',            *
//     'total',             *
//     'proveedores_id',    
// ];

export const OrderForm = ({title, subTitle, order }: Props) => {

  const { data, isLoading } = useSuppliers();
  const suppliers = data?.data;

  const { 
    register, 
    handleSubmit, 
    formState: {errors},
    // getValues,
    // setValue,
    // watch,
   } = useForm({
    defaultValues: order
  });


  if ( isLoading ) return <CustomFullScreenLoading />;
  if ( !suppliers ) return <CustomFullScreenLoading />;


  const onSubmit = (orderLike: Order) => {
    console.log('onSubmit', orderLike);
  }


  return (
    <form onSubmit={ handleSubmit(onSubmit) }>
      <div className="flex justify-between items-center">
        <AdminTitle title={title} subtitle={subTitle} />
        <div className="flex justify-end mb-10 gap-4">
          <Button variant="outline">
            <Link to="/admin/orders" className="flex items-center gap-2">
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
                Información de pedidos
              </h2>

              <div className="space-y-6">

                {/* Opciones de Proveedores */}
                                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    Seleccione un proveedor
                  </label>
                  <select
                    {...register('proveedores_id')}
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                  >
                    <option value=''>Seleccione</option>
                    {
                      suppliers!.map((supplier) => (
                      <option 
                        key={supplier.id} 
                        value={supplier.id}
                        selected={supplier.id === order.proveedores_id}
                        >
                          {supplier.nombre}
                      </option>)
                    )
                    }

                  </select>
                </div>


                {/* Campo Fecha */}
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    Pedido hecho en
                  </label>
                  <input
                    type="date"
                    {...register('fecha',{
                        valueAsDate: true,
                        required: true,
                    })}
                    className={cn(
                      'w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200',
                      {
                        'bg-red-100': errors.fecha,
                      }
                    )}
                    placeholder="Fecha del pedido"
                  />
                  {
                    errors.fecha && (
                      <p className="text-red-500 text-sm">
                        La fecha es requerida
                      </p>
                    )
                  }
                </div>

                
                {/* Campo Fecha de recepción */}
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    Fecha de recepción
                  </label>
                  <input
                    type="date"
                    {...register('fecha_recepcion',{
                        valueAsDate: true,
                    })}
                    className={cn(
                      'w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200',
                      {
                        'bg-red-100': errors.fecha_recepcion,
                      }
                    )}
                    placeholder="Fecha de recepción"
                  />
                  {
                    errors.fecha && (
                      <p className="text-red-500 text-sm">
                        La fecha debe ser una fecha válida
                      </p>
                    )
                  }
                </div>


                {/* Campo Fecha de término */}
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    Fecha de término de disponibilidad
                  </label>
                  <input
                    type="date"
                    {...register('fecha_termino',{
                        valueAsDate: true,
                    })}
                    className={cn(
                      'w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200',
                      {
                        'bg-red-100': errors.fecha_termino,
                      }
                    )}
                    placeholder="Fecha de recepción"
                  />
                  {
                    errors.fecha_termino && (
                      <p className="text-red-500 text-sm">
                        La fecha debe ser una fecha válida
                      </p>
                    )
                  }
                </div>


                {/* Campo Estado 'Pendiente,Abonado,Pagado' */}
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    Estado del pedido
                  </label>
                  <input
                    type="text"
                    {...register('estado',{
                      required: true,
                    })}
                    className={cn(
                      'w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200',
                      {
                        'bg-red-100': errors.estado,
                      }
                    )}
                    placeholder="Estado del pedido"
                  />
                  {
                    errors.estado && (
                      <p className="text-red-500 text-sm">
                        El estado del pedido
                      </p>
                    )
                  }
                </div>

                {/* Grupo de Campos */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    
                    {/* Monto costo total del pedido */}
                    <div>
                        <label className="block text-sm font-medium text-slate-700 mb-2">
                            Total $
                        </label>
                        <input
                            type="text"
                            {...register('total',{
                              required: true
                            })}
                            className={cn(
                              'w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200',
                              {
                                'bg-red-100': errors.total,
                              }
                            )}
                            placeholder="Total del pedido"
                        />
                        {
                          errors.total && (
                            <p className="text-red-500 text-sm">
                              El monto toal del pedido es requerido
                            </p>
                          )
                        }
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
