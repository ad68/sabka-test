import { useMutation } from '@tanstack/react-query'
import { applySliderSort } from '../../api/applySliderSort'
const useApplySliderSortMutation = () => {
    return useMutation({
        mutationFn: applySliderSort,
    })
}
export default useApplySliderSortMutation