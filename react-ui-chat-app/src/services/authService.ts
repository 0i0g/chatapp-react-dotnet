import {AuthUser} from "../@type/authType";


export const AuthService = {
  login: async (username: string, password: string) => Promise.resolve({id: '1', name: 'Panee Pamboo'} as AuthUser),
}
