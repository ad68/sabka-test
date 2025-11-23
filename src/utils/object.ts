
export const objectToQueryString = (obj: Record<string, any>): string => {
    const filteredObj = Object.fromEntries(
        Object.entries(obj)
            .filter(([, value]) => value !== null && value !== undefined && value !== "")
            .map(([key, value]) => [key, String(value)])
    );

    const params = new URLSearchParams(filteredObj);
    return params.toString();
};
