
import { useMutation } from '@tanstack/react-query'
import { updateProvinceCompany } from '../../api/updateProvinceCompany'
const useUpdateProvinceCompanyMutation = () => {
    return useMutation({
        mutationFn: updateProvinceCompany,
    })
}
export default useUpdateProvinceCompanyMutation
