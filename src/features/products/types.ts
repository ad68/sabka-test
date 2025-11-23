export type Product = {
    "productId": number
    "productName": string
    "unitPrice": number
    "categoryId": number
    "categoryName": string
    "supplierId": number
    "supplierName": string
}
export type ProductsResponse = Array<Product>