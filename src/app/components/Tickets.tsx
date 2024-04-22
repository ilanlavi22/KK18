import Link from 'next/link';
import Image from 'next/image';
import keyVisual from '../../../public/key-visual.png';

export default function Tickets() {
  return (
    <section className='flex flex-col items-center justify-between bg-black text-white lg:flex-row xl:gap-8'>
      <h2 className='relative flex items-center py-6 lg:hidden lg:pl-[35px] lg:pt-[50px] lg:before:absolute lg:before:left-0 lg:before:top-0 lg:before:h-[calc(100%+50px)] lg:before:w-[30px] lg:before:border-[9px] lg:before:border-r-0 lg:before:border-theme-pink'>
        <div className='flex flex-col items-center'>
          <span>
            Tickets <span className='block'>sichern</span>
          </span>
          <span className='mt-6 block h-1.5 w-[60vw] bg-theme-pink lg:hidden'></span>
        </div>
      </h2>
      <Image
        src={keyVisual}
        alt='Key Visual'
        width={360}
        height={266}
        className='-ml-4 scale-x-[-1]'
      />

      <p className='px-4 pb-20 pt-6 text-center text-[17px] leading-8 md:px-8  md:pt-16 lg:leading-7 xl:max-w-[600px]'>
        Sie möchten sich mit Kollegen austauschen, Kommunikations-Trends
        kennenlernen und neue Impulse für die eigene Arbeit sammeln?{' '}
        <Link href='/' className='text-theme-pink'>
          Dann sichern Sie sich jetzt
        </Link>{' '}
        Ihre Teilnahme für den #kk18.
      </p>

      <div className='-mt-[50px] hidden lg:block'>
        <h2 className='relative flex shrink-0 pr-[100px] pt-[30px] before:absolute before:right-16 before:top-0 before:h-[calc(100%+50px)] before:w-[30px] before:border-[9px] before:border-l-0 before:border-theme-pink'>
          <span>
            Tickets <span className='block'>sichern</span>
          </span>
        </h2>
      </div>
    </section>
  );
}
