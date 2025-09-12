
export interface Product {
    id:             number;
    nombre:         string;
    unidad:         string;
    tipo:           string;
    stock_minimo:   number;
    disponible:     boolean;
    temporada:      string;
    default_imagen: string;
}