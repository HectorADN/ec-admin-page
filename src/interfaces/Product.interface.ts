
export interface Product {
    id:             string;
    nombre:         string;
    nombre_corto:   string;
    tipo:           string;
    unidad:         string;
    stock_minimo:   number;
    disponible:     boolean;
    temporada:      string;
    default_imagen: string;
    categorias_id:  number;
}