
import { useItemsByProduct } from "@/admin/hooks/useItemsByProduct";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

import { currencyFormatter } from "@/lib/currency-formatter";


interface Props {
    id: string;
}

export const ItemsVentaOfProduct = ({id}: Props) => {

    // console.log('El id es: '+id);
    const { data } = useItemsByProduct(id);

  return (
    <>
      { data?.data.map((item) => (
        <Table key={item.id} className="bg-white p-10 shadow-xs border border-gray-200 mb-10">
          <TableHeader>
            <TableRow>
              <TableHead>Item</TableHead>
              <TableHead>Valor</TableHead>
            </TableRow>
          </TableHeader>

          <TableBody>

            <TableRow>
              <TableCell>id:</TableCell>
              <TableCell>{ item.id }</TableCell>
            </TableRow>

            <TableRow>
              <TableCell>Precio normal:</TableCell>
              <TableCell>{ currencyFormatter(+item.valor_normal) }</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Precio negocio:</TableCell>
              <TableCell>{ currencyFormatter(+item.valor_negocio) }</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Precio mayorista:</TableCell>
              <TableCell>{ currencyFormatter(+item.valor_mayorista) }</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Precio especial:</TableCell>
              <TableCell>{ currencyFormatter(+item.valor_especial) }</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Precio especial:</TableCell>
              <TableCell>{ currencyFormatter(+item.valor_especial) }</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Unidades:</TableCell>
              <TableCell>{ item.unidades }</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Cantidad:</TableCell>
              <TableCell>{ item.cantidad }</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Cantidad:</TableCell>
              <TableCell>{ item.cantidad }</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Editable:</TableCell>
              <TableCell>{ item.editable ? 'Si' : 'No' }</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Cantidad por unidad:</TableCell>
              <TableCell>{ item.cantidad_por_unidad }</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Es divisible:</TableCell>
              <TableCell>{ item.is_divisible ? 'Si' : 'No' }</TableCell>
            </TableRow>

          </TableBody>
      </Table>
      )) }
    </>
  )
}