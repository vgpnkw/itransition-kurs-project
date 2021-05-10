import {$authHost, $host} from "./index";
import jwt_decode from "jwt-decode";

export const createType = async (type) => {
    const {data} = await $authHost.post('api/type', type)
    return data
}

export const fetchTypes = async () => {
    const {data} = await $host.get('api/type')
    return data
}

export const createBrand = async (country) => {
    const {data} = await $authHost.post('api/country', country)
    return data
}

export const fetchBrands = async () => {
    const {data} = await $host.get('api/country', )
    return data
}

export const createDevice = async (device) => {
    const {data} = await $authHost.post('api/company', device)
    return data
}

export const fetchDevices = async (typeId, brandId, page, limit= 5) => {
    const {data} = await $host.get('api/company', {params: {
            typeId, brandId, page, limit
        }})
    return data
}

export const fetchOneDevice = async (id) => {
    const {data} = await $host.get('api/company/' + id)
    return data
}
