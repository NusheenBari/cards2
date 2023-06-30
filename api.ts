import { ITenant, IUser } from "./types/usersdata"

const baseURL = 'http://198.100.155.12:8080/cardsdigify';

export const getAllTenants = async():Promise<ITenant[]> => {
        const res = await fetch(`${baseURL}/api/tenants/`)
        const allTenants = await res.json()
        return allTenants
    
}


export const getTenant = async(tenantId:string) =>{
        const res = await fetch(`${baseURL}/api/tenants/${tenantId}`)
        const aTenant = await res.json()
        return aTenant
}


export const getTenantUsers = async(tenantId: any) => {
        const res = await fetch(`${baseURL}/api/users?tenantId.Equals=${tenantId}`)
        return res.json()
}

export const getAllUsers = async():Promise<IUser[]> => {
        const res = await fetch(`${baseURL}/api/users`)
        const allUsers = await res.json()
        return allUsers
    }

    
export const getUser = async(userId:string) =>{
        const res = await fetch(`${baseURL}/api/users/${userId}`)
        const aUser = await res.json()
        return aUser
}


export const getCard = async(userId: any) => {
        const res = await fetch(`${baseURL}/api/user-digital-cards?userId.Equals=${userId}`)

        return res.json()
}