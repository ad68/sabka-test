export type Contract = {
    contractNumber: string
    dateContract: string | Date
    contractingParty: string
    titleContract:string,
    amount:string,
    fromDate:string | Date,
    toDate:string | Date,
    description:string,
}
export type ContractsResponse = Array<Contract>

