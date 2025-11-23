'use client'
import { scrollToTop } from '@/utils';
import { useEffect, useRef, useState } from 'react'
const useAboutUs = () => {
    const [activeSection, setActiveSection] = useState<number>(1)

    const [offset, setOffset] = useState(0);
    const section1Ref = useRef<HTMLDivElement | null>(null);
    const section2Ref = useRef<HTMLDivElement | null>(null);
    const section3Ref = useRef<HTMLDivElement | null>(null);
    const section4Ref = useRef<HTMLDivElement | null>(null);
    const section5Ref = useRef<HTMLDivElement | null>(null);
    const scrollToSection = (ref: any) => {
        if (ref.current) {
            const top = ref.current.getBoundingClientRect().top + window.scrollY;
            console.log("offset:::", top)
            window.scrollTo({
                top: top - 200,
                behavior: "smooth",
            });
        }
    };
    const goToSection1 = () => {
        scrollToTop()
    }
    const goToSection2 = () => {
        scrollToSection(section2Ref)
    }

    const goToSection3 = () => {
        scrollToSection(section3Ref)
    }

    const goToSection4 = () => {
        scrollToSection(section4Ref)
    }

    const goToSection5 = () => {
        scrollToSection(section5Ref)
    }
    useEffect(() => {
        const handleScroll = () => {
            setOffset(window.scrollY);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);
    useEffect(() => {
        console.log("offset top:::", offset)
        if (offset >= 0 && offset < 300) {
            setActiveSection(1)
        }
        if (offset > 450 && offset < 1115) {
            setActiveSection(2)
        }
        if (offset > 1050 && offset < 2000) {
            setActiveSection(3)
        }
        if (offset > 2250 && offset < 4289) {
            setActiveSection(4)
        }
        if (offset > 3700) {
            setActiveSection(5)
        }

    }, [offset])


    /*  useEffect(() => {
         if (activeSection === 1) {
             scrollToTop()
         }
         if (activeSection === 2) {
             scrollToSection(section2Ref)
         }
         if (activeSection === 3) {
             scrollToSection(section3Ref)
         }
         if (activeSection === 4) {
             scrollToSection(section4Ref)
         }
         if (activeSection === 5) {
             scrollToSection(section5Ref)
         }
     }, [activeSection]) */
    return {
        activeSection,
        setActiveSection,
        section1Ref,
        section2Ref,
        section3Ref,
        section4Ref,
        section5Ref,
        goToSection1,
        goToSection2,
        goToSection3,
        goToSection4,
        goToSection5,

    }
}
export default useAboutUs