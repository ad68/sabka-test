export type Complaint = {
    date: string,
    nationalCode: string,
    companyName: string,
    userName: string,
    email: string,
    phoneNumber: string,
    mobileNumber: string,
    complaintType: string,
    description: string,
}
export type ComplaintResponse = Array<Complaint>