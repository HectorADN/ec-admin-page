import { AdminTitle } from "@/admin/components/AdminTitle";
import { Button } from "@/components/ui/button";
import { X, SaveAll, Tag, Plus, Upload } from "lucide-react";
import { Form, Link } from "react-router";
import { ItemsVentaOfProduct } from "./ItemsVentaOfProduct";
import type { Product } from "@/interfaces/Product.interface";

interface Props {
    title: string;
    subTitle: string,
    product: Product,
};


    // Producto = [
    //     'id',
    //     'nombre',
    //     'unidad',
    //     'tipo',
    //     'stock_minimo',
    //     'disponible',
    //     'temporada',
    //     'categorias_id',
    // ];

export const ProductForm = ({title, subTitle, product }: Props) => {

  console.log('ProductFormPage->aqui');
  console.log(product);

  return (
    <>
      <div className="flex justify-between items-center">
        <AdminTitle title={title} subtitle={subTitle} />
        <div className="flex justify-end mb-10 gap-4">
          <Button variant="outline">
            <Link to="/admin/products" className="flex items-center gap-2">
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
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    Nombre del producto
                  </label>
                  <input
                    type="text"
                    value={ product.nombre }
                    // onChange={(e) => handleInputChange('title', e.target.value)}
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                    placeholder="Nombre del producto"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                        <label className="block text-sm font-medium text-slate-700 mb-2">
                            Unidad del producto
                        </label>
                        <input
                            type="text"
                            // value={ product.unidad }
                            // onChange={(e) => handleInputChange('title', e.target.value)}
                            className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                            placeholder="Unidad del producto"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-slate-700 mb-2">
                            Tipo del producto (Opcional)
                        </label>
                        <input
                            type="text"
                            // value={ product.tipo }
                            // onChange={(e) => handleInputChange('title', e.target.value)}
                            className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                            placeholder="Tipo del producto"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-slate-700 mb-2">
                            Temporada del producto
                        </label>
                        <input
                            type="text"
                            // value={ product.tipo }
                            // onChange={(e) => handleInputChange('title', e.target.value)}
                            className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                            placeholder="Temporada del producto"
                        />
                    </div>
                </div>


                <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      Stock mínimo (según las unidades)
                    </label>
                    <input
                      type="number"
                    //   value={product.stock_minimo}
                    //   onChange={(e) =>
                    //     handleInputChange('price', parseFloat(e.target.value))
                    //   }
                      className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                      placeholder="Stock mínimo del producto"
                    />
                  </div>
              </div>
            </div>


          </div>

          Sidebar
          <div className="space-y-6">
            {/* Product Images */}
            <div className="bg-white rounded-xl shadow-lg border border-slate-200 p-6">
              <h2 className="text-xl font-semibold text-slate-800 mb-6">
                Imágenes del producto
              </h2>

              {/* Drag & Drop Zone */}
              {/* <div
                className={`relative border-2 border-dashed rounded-lg p-6 text-center transition-all duration-200 ${
                  dragActive
                    ? 'border-blue-400 bg-blue-50'
                    : 'border-slate-300 hover:border-slate-400'
                }`}
                // onDragEnter={handleDrag}
                // onDragLeave={handleDrag}
                // onDragOver={handleDrag}
                // onDrop={handleDrop}
              >
                <input
                  type="file"
                  multiple
                  accept="image/*"
                  className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                  // onChange={handleFileChange}
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
              </div> */}

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

                <div className="flex items-center justify-between p-3 bg-slate-50 rounded-lg">
                  <span className="text-sm font-medium text-slate-700">
                    Imágenes
                  </span>
                  <span className="text-sm text-slate-600">
                    {/* {product.images.length} imágenes */}
                  </span>
                </div>

                <div className="flex items-center justify-between p-3 bg-slate-50 rounded-lg">
                  <span className="text-sm font-medium text-slate-700">
                    Tallas disponibles
                  </span>
                  <span className="text-sm text-slate-600">
                    {/* {product.sizes.length} tallas */}
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className='className="bg-white rounded-xl shadow-lg border border-slate-200 p-6'>
            <h2 className="text-xl font-semibold text-slate-800 mb-6">
              Items del producto
            </h2>
            {/* <ItemsVentaOfProduct 
              id={product.id}
            /> */}
          </div>

        </div>
      </div>      

    </>
  );
}
