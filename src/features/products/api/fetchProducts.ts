
/* import { GlobalResponse } from '@/shared/types/api/responses' */
import { useAxiosWithToken } from '@/hooks'
import { ProductsResponse } from '../types'

export const fetchProducts = async () => {
    const response: ProductsResponse = await useAxiosWithToken.get('/Products')
    return response
}