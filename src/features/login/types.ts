export type SignUpMode = "supplier" | "eventOrganizer"
export type LoginOrSignUpMode = "login" | "signUp"
export type loginMode = "login" | "requestActiveCode"
export type SignUpSelectorProp = {
    signUpMode: SignUpMode
    goToSupplierMode: () => void
    goToEventOrganizerMode: () => void
}