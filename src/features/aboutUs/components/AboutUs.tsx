'use client'
import SecondSection from './SecondSection';
import ThirdSection from './ThirdSection';
import FourthSection from './FourthSection';
import FifthSection from './FifthSection';
import SixSection from './SixSecction';
/* import SevenSection from './SevenSection';
import EightSection from './EightSection'; */
import NineSection from './NineSection';
import ScrollToSection from './ScrollToSection';
import useAboutUs from '../hooks/useAboutUs';
export default function Index() {
    const { activeSection, goToSection1, goToSection2, goToSection3, goToSection4, goToSection5, section1Ref, section2Ref, section3Ref, section4Ref, section5Ref } = useAboutUs()
    return (
        <section className='w-full pt-[200px]'>
            {/*   <FirstSection /> */}
            <ScrollToSection activeSection={activeSection} goToSection1={goToSection1} goToSection2={goToSection2} goToSection3={goToSection3} goToSection4={goToSection4} goToSection5={goToSection5} />
            <SecondSection ref={section1Ref} />
            <ThirdSection ref={section2Ref} />
            <FourthSection ref={section3Ref} />
            <FifthSection />
            <SixSection ref={section4Ref} />
            {/* <SevenSection /> */}
            {/* <EightSection /> */}
            <NineSection ref={section5Ref} />
        </section>
    )
}