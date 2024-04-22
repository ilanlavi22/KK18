import quadrigaLogo from '../../../public/quadriga-logo.svg';
import Image from 'next/image';
import { FaXing, FaFacebookF, FaTwitter } from 'react-icons/fa';

export default function NavUpper() {
  return (
    <div className='w-full border-b-[.0625rem] border-white border-opacity-85 bg-theme-purple'>
      <div className='container hidden w-full items-center justify-end space-x-5 py-5 md:flex md:h-[3.75rem]'>
        <div className='flex items-center gap-0.5'>
          <FaXing size='1.3rem' color='white' />
          <FaFacebookF size='1.3rem' color='white' />
          <FaTwitter size='1.3rem' color='white' />
        </div>
        <div className='flex-center flex-col text-white'>
          <div className='dot'></div>
        </div>
        <div className='flex-center flex-col'>
          <Image
            src={quadrigaLogo}
            alt='Quadriga Logo'
            width='109'
            height='17'
          />
          <p className='font-proxima text-[11px] font-semibold text-white'>
            Veranstalter & Kooperationspartner
          </p>
        </div>
      </div>
    </div>
  );
}
