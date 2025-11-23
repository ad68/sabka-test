
import { useMutation } from '@tanstack/react-query'
import { createProvinceCompany } from '../../api/createProvinceCompany';
const useCreateProvinceCompany = () => {
    return useMutation({
        mutationFn: createProvinceCompany,
    })
}
export default useCreateProvinceCompany
