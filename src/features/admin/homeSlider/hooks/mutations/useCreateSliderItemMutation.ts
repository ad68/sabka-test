import { useMutation } from '@tanstack/react-query'
import { createSliderItem } from '../../api/createSliderItem'
const useCreateSliderItemMutation = () => {
    return useMutation({
        mutationFn: createSliderItem,
    })
}
export default useCreateSliderItemMutation