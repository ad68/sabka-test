import { useMutation } from '@tanstack/react-query'

import { deleteSliderItem } from '../../api/deleteSliderItem'
const useDeleteSliderItemMutation = () => {
    return useMutation({
        mutationFn: deleteSliderItem,
    })
}
export default useDeleteSliderItemMutation