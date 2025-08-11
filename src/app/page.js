import  Header  from '../components/Header'
import  SecondBlock  from '../components/sections/Second'
import  ThirdBlock  from '../components/sections/Third'
import  FourthBlock  from '../components/sections/Fourth'
import  FifthBlock  from '../components/sections/Fifth'
import  Footer  from '../components/Footer'
import  BrailleCursor  from '../components/BrailleCursor.jsx'

import Image from 'next/image';

export default function Home() {
  return (
    <main>
    <div className='page'>
      <div className='container'>
        <div className='content'>
        <section className='relative overflow-hidden h-[50vw] bg-[#259d4e] pt-[3.13vw] px-[5vw] rounded-b-[2.5vw] '>
          <Header />

          <Image
            className='absolute mt-[0] w-[35.13vw] h-[41.38vw] ml-[30vw] z-[1] select-none'
            src="/img/bHand.png"
            alt="Описание картинки"
            width={562}
            height={662}
          />

          <h1 className=' text-[8.13vw] text-[#fff] leading-[84%] z-[10] ppmori relative top-[25vw] select-none'>
            We create visions <br />
            more than just design
          </h1>
        </section>
        <SecondBlock />
        <ThirdBlock />
        <FourthBlock />
        <FifthBlock />
        <Footer />
        </div>
      </div>
    </div>

    {/* всякая всячина (эффекты) */}
    <BrailleCursor />
    
    </main>
  )
}



/* 
██████╗  █████╗ ██████╗  █████╗  ██████╗ ███████╗     █████╗  ██████╗ ███████╗███╗   ██╗ ██████╗██╗   ██╗
██╔════╝ ██╔══██╗██╔══██╗██╔══██╗██╔════╝ ██╔════╝    ██╔══██╗██╔════╝ ██╔════╝████╗  ██║██╔════╝╚██╗ ██╔╝
██║  ███╗███████║██████╔╝███████║██║  ███╗█████╗      ███████║██║  ███╗█████╗  ██╔██╗ ██║██║      ╚████╔╝ 
██║   ██║██╔══██║██╔══██╗██╔══██║██║   ██║██╔══╝      ██╔══██║██║   ██║██╔══╝  ██║╚██╗██║██║       ╚██╔╝  
╚██████╔╝██║  ██║██║  ██║██║  ██║╚██████╔╝███████╗    ██║  ██║╚██████╔╝███████╗██║ ╚████║╚██████╗   ██║   
 ╚═════╝ ╚═╝  ╚═╝╚═╝  ╚═╝╚═╝  ╚═╝ ╚═════╝ ╚══════╝    ╚═╝  ╚═╝ ╚═════╝ ╚══════╝╚═╝  ╚═══╝ ╚═════╝   ╚═╝   
*/