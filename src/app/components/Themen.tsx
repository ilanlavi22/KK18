export default function Themen() {
  return (
    <section className='relative min-h-[750px] bg-bg-themen-sm text-white after:absolute after:right-0 after:top-0 after:h-full after:w-full after:bg-black after:opacity-80 md:bg-bg-themen md:after:opacity-65'>
      <div className='container relative z-10 py-14 md:py-32'>
        <div className='flex flex-col items-center gap-12 md:flex-row'>
          <h2 className='relative flex items-center md:pl-[35px] md:pt-[50px] md:before:absolute md:before:left-0 md:before:top-0 md:before:h-[calc(100%+50px)] md:before:w-[30px] md:before:border-[9px] md:before:border-r-0 md:before:border-theme-pink'>
            <div className='flex flex-col items-center'>
              <span>Themen</span>
              <span className='mt-6 block h-1.5 w-[60vw] bg-theme-pink md:hidden'></span>
            </div>
          </h2>

          <p className='mx-auto max-w-[800px] text-center text-base leading-8 md:mt-2 md:text-[1.0625rem] md:leading-9'>
            Mit dem Fokusthema „Mut“ möchte der Kommunikationskongress
            Entscheider aus der Branche ermutigen und befähigen, Gewohn-tes auf
            den Kopf zu stellen, Veränderungen anzutreiben, Risiken einzugehen
            und sich mit ihrer Rolle auseinanderzusetzen. Das Thema Mut
            diskutieren wir in vier Foren.
          </p>
        </div>
        <div className='xl:grid-cols-280 mt-16 grid grid-cols-1 justify-center gap-6 text-center sm:grid-cols-2 md:text-left lg:mt-32'>
          <div className='border-theme-pink border-opacity-80 py-4 pr-4 md:border-r-2 md:py-2'>
            <h3 className='text-theme-pink md:text-white'>
              Mut zu unserer Profession
            </h3>
            <p className='text[14px] pt-6 leading-7 md:pt-4'>
              Wie behaupten wir unsere Rolle im Unternehmen? Und wie verändert
              sich diese? Sprechen wir über unseren Stellenwert im Unternehmen
              und wie wir mit neuen Aufgabenfeldern umgehen.
            </p>
          </div>
          <div className='border-theme-pink border-opacity-80 py-4 pr-4 md:border-r-2 md:py-2'>
            <h3 className='text-theme-pink md:text-white'>
              Mut zu unserer Verantwortung
            </h3>
            <p className='text[14px] pt-4 leading-7'>
              Wie behaupten wir unsere Rolle im Unternehmen? Und wie verändert
              sich diese? Sprechen wir über unseren Stellenwert im Unternehmen
              und wie wir mit neuen Aufgabenfeldern umgehen.
            </p>
          </div>
          <div className='border-theme-pink border-opacity-80 py-4 pr-4 md:border-r-2 md:py-2'>
            <h3 className='text-theme-pink md:text-white'>
              Mut zu unserer Zukunft
            </h3>
            <p className='text[14px] pt-4 leading-7'>
              Wie behaupten wir unsere Rolle im Unternehmen? Und wie verändert
              sich diese? Sprechen wir über unseren Stellenwert im Unternehmen
              und wie wir mit neuen Aufgabenfeldern umgehen.
            </p>
          </div>
          <div className='border-theme-pink border-opacity-80 py-4 pr-4 md:border-r-2 md:py-2 xl:border-r-0'>
            <h3 className='text-theme-pink md:text-white'>Mut zu uns selbst</h3>
            <p className='text[14px] pt-4 leading-7'>
              Wie behaupten wir unsere Rolle im Unternehmen? Und wie verändert
              sich diese? Sprechen wir über unseren Stellenwert im Unternehmen
              und wie wir mit neuen Aufgabenfeldern umgehen.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
