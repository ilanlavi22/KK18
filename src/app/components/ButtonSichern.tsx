import { BsTicketPerforated } from 'react-icons/bs';
import clsx from 'clsx';

export default function ButtonSichern(
  props: React.ButtonHTMLAttributes<HTMLButtonElement>
) {
  return (
    <button
      {...props}
      className={clsx(
        'mt-10 flex items-center justify-between gap-4 rounded-full bg-theme-pink px-9 py-3 font-proxima text-[17px] font-medium uppercase text-white',
        props.className
      )}
    >
      <span>Jetzt Ticket sichern</span>
      <BsTicketPerforated size='1.9rem' className='ml-auto' />
    </button>
  );
}
