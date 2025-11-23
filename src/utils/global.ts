export const scrollToTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
};
export const isValue = (value: string | number) => {
    if (value === null || value === '' || value === undefined) {
        return false
    } else {
        return true
    }
}
