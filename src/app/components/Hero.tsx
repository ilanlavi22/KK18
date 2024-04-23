import Image from 'next/image';
import MutLogo from '../../../public/mut_logo.png';
import BdkomLogo from '../../../public/bdKom.svg';
import QuadrigaLogo from '../../../public/quadriga-logo.svg';
import { FaXing, FaFacebookF, FaTwitter } from 'react-icons/fa';
import ButtonSichern from './ButtonSichern';

export default function Hero() {
  return (
    <section className='md:min-h-[calc(100vh-3.8rem) relative z-0 min-h-screen w-full bg-hero-sm bg-no-repeat md:bg-hero-md'>
      <div className='absolute left-0 top-0 flex h-full w-full bg-black opacity-20 md:hidden'></div>
      <div className='container relative z-20 pt-[9.0625rem] text-white'>
        <p className='text-[.875rem] font-medium uppercase leading-10 tracking-[.0625rem]'>
          Fokus
        </p>
        <Image
          src={MutLogo}
          alt='MUT Logo'
          height='140'
          className='w-[180px] md:w-[281px]'
        />
        <h4 className='pt-2 text-[30px] font-light tracking-tighter md:pt-0 md:text-[42px]'>
          27. & 28. <span className='md:pl-2'>September 2018</span>
        </h4>
        <div className='flex flex-col gap-4 pt-8 text-[.9375rem] font-medium uppercase leading-7 tracking-[-0.0125rem] text-white md:flex-row md:gap-0 md:space-x-9 md:pt-5'>
          <ul>
            <li>strategische Kommunikation</li>
            <li>Krisenkommunikation</li>
            <li>Interne Kommunikation</li>
          </ul>
          <ul className='pt-2 md:pt-0'>
            <li>Mut zur Rolle</li>
            <li>Mut zum Fortschritt</li>
            <li>Mut zur Haltung</li>
            <li>Mut zur Stärke</li>
          </ul>
        </div>
        <div className='inline-flex flex-col items-center'>
          <ButtonSichern className='inline-flex md:ml-14 md:mt-14' />

          <div className='mt-5 flex justify-center opacity-70 md:hidden'>
            <div className='flex items-center gap-0.5 pr-3'>
              <FaXing size='1.3rem' color='white' />
              <FaFacebookF size='1.3rem' color='white' />
              <FaTwitter size='1.3rem' color='white' />
            </div>
            <div className='flex items-center'>
              <Image
                src={QuadrigaLogo}
                alt='Quadriga Logo'
                width='95'
                height='17'
              />
              <Image src={BdkomLogo} alt='BdKom Logo' width='95' height='17' />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
