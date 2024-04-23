import Image from 'next/image';
import Link from 'next/link';
import kk2018Logo from '../../../public/kk2018-logo.svg';
import QuadrigaLogo from '../../../public/quadriga-logo.svg';
import BdkomLogo from '../../../public/bdKom.svg';
import { FaXing, FaFacebookF, FaTwitter } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className='bg-[#6F3665]'>
      <div className='container px-5 py-14 sm:px-8'>
        <div className='flex flex-col items-center space-y-8 xl:flex-row xl:items-start xl:space-y-0'>
          <Image
            src={kk2018Logo}
            alt='Kommunikationskongress 2018'
            width='200'
            height='29'
            className=''
          />

          <div className='flex w-full flex-col items-center justify-center space-y-8'>
            <nav className='flex flex-row flex-wrap items-center justify-center'>
              <Link href='/'>Über den Kongress</Link>
              <Link href='/'>Referent:innen</Link>
              <Link href='/'>Rückblick</Link>
              <Link href='/'>Partner</Link>
              <Link href='/'>Service</Link>
            </nav>

            <nav className='flex flex-row flex-wrap items-center justify-center'>
              <Link href='/'>Kontakt</Link>
              <Link href='/'>FAQ</Link>
              <Link href='/'>AGB</Link>
              <Link href='/'>Impressum</Link>
            </nav>

            <div className='flex items-center gap-4'>
              <Image
                src={QuadrigaLogo}
                alt='Quadriga Logo'
                width='109'
                height='17'
              />
              <Image src={BdkomLogo} alt='BdKom Logo' width='109' height='17' />

              <div className='flex items-center gap-0.5 pr-3'>
                <FaXing size='1.3rem' color='white' />
                <FaFacebookF size='1.3rem' color='white' />
                <FaTwitter size='1.3rem' color='white' />
              </div>
            </div>
            <p className='text-xs text-white'>
              Copyright © 2018 | www.kommunikationskongress.de
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
