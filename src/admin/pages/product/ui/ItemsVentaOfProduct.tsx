
import { useItemsByProduct } from "@/admin/hooks/useItemsByProduct";

interface Props {
    id: string;
}

export const ItemsVentaOfProduct = ({id}: Props) => {

    console.log('El id es: '+id);
    const { data } = useItemsByProduct(id);

    console.log(data);

  return (
    <>
        <h1 className="text-2xl font-montserrat">Items de Venta</h1>
    </>
  )
}