
import { useEffect, useRef, useState } from 'react'
import CustomTextBox from '../CustomTextBox'
type OtpType = {
  setActiveCode: (code: string) => void
  login: any
  activeCode: string
}
export default function OtpInputs({ setActiveCode, login, activeCode }: OtpType) {
  const firstRef = useRef<HTMLInputElement | null>(null)
  const secondRef = useRef<HTMLInputElement | null>(null)
  const thirdRef = useRef<HTMLInputElement | null>(null)
  const fourthRef = useRef<HTMLInputElement | null>(null)
  const fifthRef = useRef<HTMLInputElement | null>(null)
  const [firstOtp, setFirstOtp] = useState('')
  const [secondOtp, setSecondOtp] = useState('')
  const [thirdOtp, setThirdOtp] = useState('')
  const [fourthOtp, setFourthOtp] = useState('')
  const [fifthOtp, setFifthOtp] = useState('')

  useEffect(() => {
    if (secondOtp) {
      thirdRef.current?.focus()
    } else {
      firstRef.current?.focus()
    }
  }, [secondOtp])

  useEffect(() => {
    if (thirdOtp) {
      fourthRef.current?.focus()
    } else {
      secondRef.current?.focus()
    }
  }, [thirdOtp])

  useEffect(() => {
    if (fourthOtp) {
      fifthRef.current?.focus()
    } else {
      thirdRef.current?.focus()
    }
  }, [fourthOtp])

  useEffect(() => {
    if (!fifthOtp) {
      fourthRef.current?.focus()
    }
  }, [fifthOtp])

  useEffect(() => {
    if (!firstOtp) {
      firstRef.current?.focus()
    } else {
      secondRef.current?.focus()
    }
  }, [firstOtp])

  useEffect(() => {
    if (firstOtp && secondOtp && thirdOtp && fourthOtp && fifthOtp) {
      setActiveCode(firstOtp.concat(secondOtp, thirdOtp, fourthOtp, fifthOtp))
      if (activeCode) {
        login()
      }
    } else {
      setActiveCode('')
    }

  }, [firstOtp, secondOtp, thirdOtp, fourthOtp, fifthOtp, setActiveCode])
  useEffect(() => {
    if (firstOtp && secondOtp && thirdOtp && fourthOtp && fifthOtp) {
      setActiveCode(firstOtp.concat(secondOtp, thirdOtp, fourthOtp, fifthOtp))
      if (activeCode) {
        login()
      }
    }

  }, [activeCode])
  return (
    <section className='flex justify-center gap-2 mt-2'>
      <CustomTextBox
        ref={fifthRef}
        className='w-[64px] h-[64px] !text-[36px] text-[#40455b] font-bold text-center'
        value={fifthOtp}
        placeholder=' '
        maxLength={1}
        onChange={(e: any) => {
          const value = e.replace(/\D/g, '')
          setFifthOtp(value)
        }}

      />
      <CustomTextBox
        ref={fourthRef}
        maxLength={1}
        className='w-[64px] h-[64px] !text-[36px] text-[#40455b] font-bold text-center'
        placeholder=' '
        value={fourthOtp}
        onChange={(e: any) => {
          const value = e.replace(/\D/g, '')
          setFourthOtp(value)
        }}
      />
      <CustomTextBox
        ref={thirdRef}
        maxLength={1}
        className='w-[64px] h-[64px] !text-[36px] text-[#40455b] font-bold text-center'
        placeholder=' '
        value={thirdOtp}
        onChange={(e: any) => {
          const value = e.replace(/\D/g, '')
          setThirdOtp(value)
        }}
      />
      <CustomTextBox
        ref={secondRef}
        maxLength={1}
        className='w-[64px] h-[64px] !text-[36px] text-[#40455b] font-bold text-center'
        placeholder=' '
        value={secondOtp}
        onChange={(e: any) => {
          const value = e.replace(/\D/g, '')
          setSecondOtp(value)
        }}
      />
      <CustomTextBox
        ref={firstRef}
        maxLength={1}
        className='w-[64px] h-[64px] !text-[36px] text-[#40455b] font-bold text-center'
        placeholder=' '
        onChange={(e: any) => {
          const value = e.replace(/\D/g, '')
          setFirstOtp(value)
        }}
      />




    </section>
  )
}
