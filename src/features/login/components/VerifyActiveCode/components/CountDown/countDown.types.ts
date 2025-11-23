export type RequestActiveCodeProps = {
  actionLoading: boolean
  requestActiveCode: (arg: any) => void
}
export type RequestCodeFormProps = { mobileNumber: string }
export type ActiveCodeFormProps = { activeCode: string }
export type SignInProps = {
  setPanelMode: (arg: string) => void
  mobileNumber: string
  requestActiveCode: (arg: any) => void
  loginLoading: boolean
}
export type CountDownProps = {
  totalCount: number
  setResendBtnState: (arg: boolean) => void
  reload: boolean
  resendBtnState: boolean
}
