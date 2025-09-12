
export interface User {
    id:           number;
    name:         string;
    alias:        string;
    rut:          string;
    is_active:    boolean;
    email:        string;
    is_admin:     boolean;
    token_type:   string;
    access_token: string;
}