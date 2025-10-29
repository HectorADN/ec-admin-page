import type { Category } from "./Category.interface";

export interface CategoriesResponse {
    message: string;
    status:  number;
    error:   boolean;
    data:    Category[];
}


