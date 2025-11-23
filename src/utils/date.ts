import moment from 'moment-jalaali'
moment.loadPersian({ dialect: 'persian-modern', usePersianDigits: false })


export function getNextTenDaysDetailed() {
    const persianMonths = [
        "فروردین",
        "اردیبهشت",
        "خرداد",
        "تیر",
        "مرداد",
        "شهریور",
        "مهر",
        "آبان",
        "آذر",
        "دی",
        "بهمن",
        "اسفند"
    ]
    const result = []
    for (let i = 0; i < 10; i++) {
        const m = moment().add(i, 'days')
        result.push({
            shamsiDate: m.format('jYYYY-jMM-jD'),     // 1404-4-11
            Date: m.format('YYYY-MM-DD'),            // 2025-07-02
            dayInWeek: m.format('dddd'),             // چهارشنبه
            day: m.jDate().toString(),               // 11
            month: persianMonths[m.jMonth()]         // تیر
        })
    }

    return result
}
export const convertPersianNumbersToEnglish = (input: string): string => {
    const persianNumbers = ['۰', '۱', '۲', '۳', '۴', '۵', '۶', '۷', '۸', '۹'];
    const englishNumbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

    return input.replace(/[۰-۹]/g, (char) => {
        const index = persianNumbers.indexOf(char);
        return index !== -1 ? englishNumbers[index] : char;
    });
}
export const gregorianToJalali = (value: string | undefined) => {
    if (value) {
        const persianDate = moment(value).format('jYYYY/jMM/jDD')
        return persianDate
    } else {
        return value
    }
}
export const jalaliToGregorian = (value: string) => {
    if (value) {
        const greDate = moment(
            convertPersianNumbersToEnglish(value),
            'jYYYY/jMM/jDD',
        ).format('YYYY-MM-DD')
        return greDate
    }
    return ''
}
export const GregorianToJalaliMonthName = (value: string | undefined) => {
    if (value) {
        return moment(value).format('jD jMMMM jYYYY');
    } else {
        return value
    }

}
export const dateToJalali = (value: Date): string => {
    if (value) {
        return moment(value).format('jYYYY-jMM-jDD');
    } else {
        return value
    }

}
export const dateToGregorian = (value: Date): string => {
    if (value) {
        return moment(value).format('YYYY-MM-DD');
    } else {
        return value
    }

}
export const dateToTime = (value: string | undefined) => {
    if (value) {
        return moment(value).format("HH:mm")
    }
    return ''
}
export const gregorianToJalaliDateTime = (value: string) => {
    if (value) {
        return `${gregorianToJalali(value)} ${moment(value).format("HH:mm")}`
    }
    return ''
}