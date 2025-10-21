
import { ecApi } from "@/api/ecApi"
import type { UsersResponse } from "@/interfaces/UsersResponse";


export const getUsersAction = async(): Promise<UsersResponse> => {

    const { data } = await ecApi.get<UsersResponse>('/admin/users');

    return {
        ...data
    };
}
