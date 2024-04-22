import { BsTicketPerforated } from 'react-icons/bs';

export default function ButtonSichern() {
  return (
    <button className='mt-10 flex items-center justify-between gap-4 rounded-full bg-theme-pink px-9 py-3 font-proxima text-[17px] font-medium uppercase text-white md:ml-16 md:mt-14'>
      <span>Jetzt Ticket sichern</span>
      <BsTicketPerforated size='1.9rem' className='ml-auto' />
    </button>
  );
}
