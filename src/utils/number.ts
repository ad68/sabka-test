import { isValue } from "./global"

export const numberWithCommas = (num: number | string | undefined) => {
    if (num) {
        if (isValue(num)) {
            return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
        } else {
            return num
        }
    } else {
        return num
    }

}