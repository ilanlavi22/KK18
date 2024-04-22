import kk2018Logo from '../../../public/kk2018-logo.svg';
import { FiMenu } from 'react-icons/fi';
import Image from 'next/image';
import Link from 'next/link';
export default function Nav() {
  return (
    <header className='absolute left-0 top-0 z-10 flex h-[110px] w-full items-center border-b-[.0625rem] border-white border-opacity-85 before:absolute before:h-[109px] before:w-full before:bg-theme-purple-nav before:opacity-65 before:mix-blend-darken md:top-[3.8rem] md:h-24 md:border-none before:md:h-24'>
      <div className='container relative flex items-center justify-center md:justify-start'>
        <div className='flex items-center'>
          <Image
            src={kk2018Logo}
            alt='Kommunikationskongress 2018 Logo'
            width='340'
            height='43'
          />
        </div>
        <div className='ml-10 flex h-12 w-14 flex-shrink-0 items-center justify-center rounded-xl bg-white md:hidden'>
          <FiMenu size='1.5rem' color='black' />
        </div>
        <nav className='hidden flex-1 items-center justify-end gap-3.5 md:flex'>
          <Link className='nav-link' href='/'>
            Über den Kongress
          </Link>
          <Link href='/'>Referent:innen</Link>
          <Link href='/' className='active'>
            Rückblick
          </Link>
          <Link href='/'>Partner</Link>
          <Link href='/'>Service</Link>
        </nav>
      </div>
    </header>
  );
}
