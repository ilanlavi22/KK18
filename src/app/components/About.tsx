import Image from 'next/image';
import ButtonSichern from './ButtonSichern';
import BdkomLogo from '../../../public/bdKom.svg';
import QuadrigaLogo from '../../../public/quadriga-logo.svg';

export default function About() {
  return (
    <section className='relative -mt-[2px] min-h-[800px] w-full bg-bg-about bg-no-repeat'>
      <div className='container flex h-full max-w-[950px] flex-col items-center justify-center py-14 text-white md:py-32'>
        <h1 className='mb-6 text-center'>Über den Kongress</h1>
        <p className='mb-8 text-center font-medium md:text-[1.25rem]'>
          The place to be für Kommunikationsverantwortliche
        </p>
        <p className='text-base leading-8 md:text-center md:text-[1.0625rem] md:leading-9'>
          Der Kommunikationskongress ist ein zweitägiges Netzwerk- und
          Weiterbildungsevent, auf dem aktuelle und zukunftsweisende
          Herausforderungen der Kommunikationsbranche erörtert und beleuchtet
          werden. Jährlich kommen rund 1.500 Entscheider in Berlin zusammen, um
          über den Tellerrand ihrer Profession zu blicken, Trends zu diskutieren
          und disruptive Lösungsansätze in ihren Alltag zu integrieren.{' '}
          <span className='block pt-8 md:inline md:pt-0'>
            Die Menge an Vortragsformaten, Speakern und Netzwerkmöglichkeiten
            ist es, was den Kommunikationskongress so einzigartig macht.
          </span>{' '}
          <span className='block pt-8 md:inline md:pt-0'>
            Seien Sie am 27. und 28. September 2018 dabei und gestalten Sie die
            Zukunft Ihrer Profession mit!
          </span>
        </p>

        <ButtonSichern />

        <div className='mt-5 hidden items-center justify-center opacity-70 md:flex'>
          <Image
            src={QuadrigaLogo}
            alt='Quadriga Logo'
            width='95'
            height='17'
          />
          <Image src={BdkomLogo} alt='BdKom Logo' width='95' height='17' />
        </div>
      </div>
    </section>
  );
}
