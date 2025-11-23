
'use client'
import { useEffect } from "react";
import type { CountDownProps } from "./countDown.types";
import { TimerIcon } from "lucide-react";
export default function Index({ totalCount, setResendBtnState, reload, resendBtnState }: CountDownProps) {
  useEffect(() => {
    const element = document.getElementById("countDown");
    element!.innerHTML = formatNumber(Math.trunc(totalCount / 60)) + ":" + formatNumber(Math.trunc(totalCount % 60));
    let myCount: number = totalCount;
    let mySecond: number;
    let myMinute: number;
    const myInterval = setInterval(() => {
      if (myCount > 0) {
        myCount = myCount - 1;
        myMinute = Math.trunc(myCount / 60);
        mySecond = myCount - myMinute * 60;
        if (element) {
          element.innerHTML = formatNumber(myMinute) + ":" + formatNumber(mySecond);
        }
      } else {
        clearInterval(myInterval);
        setResendBtnState(true);
      }
    }, 1000);
    return () => {
      clearInterval(myInterval);
    };

  }, [reload]);
  const formatNumber = (value: number) => {
    let num = String(value);
    if (num.length === 1) {
      num = "0" + num;
    } else {
      num = num;
    }
    return num;
  };
  return (
    <section className="flex items-center justify-center mt-[15px]">
      <section className="">
        {!resendBtnState && (
          <section className="flex w-full  justify-center gap-2 items-center">
            <TimerIcon className="text-primary w-[20px]" />
            <span className="text-primary  font-bold w-[50px] pt-[5px]" id="countDown"></span>
          </section>
        )}
      </section>

    </section>
  );
}
