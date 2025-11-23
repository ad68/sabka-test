'use client'
import { useEffect, useRef, useState } from 'react'

const useModalKit = (open: boolean) => {
  const modalBox = useRef<HTMLDivElement>(null)
  const modalWrapper = useRef<HTMLDivElement>(null)
  const modalOverlay = useRef<HTMLDivElement>(null)
  const [showChildren, setShowChildren] = useState(false)

  useEffect(() => {
    if (open) {
      modalWrapper.current!.style.display = 'flex'
      setShowChildren(true)
      setTimeout(() => {
        if (modalBox.current && modalOverlay.current) {
          modalBox.current!.style.transform = 'scale(1)'
          modalOverlay.current!.style.opacity = '1'
        }
      }, 10)
    } else {
      if (modalBox.current && modalOverlay.current) {
        modalBox.current!.style.transform = 'scale(0)'
        modalOverlay.current!.style.opacity = '0'
        setTimeout(() => {
          if (modalWrapper.current) {
            modalWrapper.current!.style.display = 'none'
            setShowChildren(false)
          }
        }, 400)
      }
    }
  }, [open])
  return { open, modalWrapper, modalOverlay, showChildren, modalBox }
}
export default useModalKit
