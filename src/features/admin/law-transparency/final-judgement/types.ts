export type FinalJudgement = {
    province: string
    title: string
    jurisdictionBranch: string
    forAgainst:string,
    date:string | Date,
    description:string | undefined,
}
export type FinalJudgementsResponse = Array<FinalJudgement>

