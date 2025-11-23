import { ReactNode } from 'react'

export type ModalProps = {
  open: boolean // Changed to boolean for type safety
  onClose?: () => void
  width?: number // Made width optional with a default value
  children?: ReactNode
}
