import React from 'react';
import s from './page.module.scss';
import Link from 'next/link';
export const metadata = {
  title: 'Контакты',
  description: '',
  icons: [
    {
      rel: 'icon',
      sizes: 'any',
      url: '/logo.jpg',
    },
  ],
};

function ContactPage() {
  return (
    <div>
      <div className="container">
        <div className={s.contact}>
          <h2>Контакты</h2>
          <div className={s.blog}>
            <p>
              <span></span>
              <span>
                Quis fringilla convallis et vitae volutpat at porttitor. Est
                tincidunt massa aliquam sed enim rhoncus. Id nullam sollicitudin
                aliquet in.
              </span>
            </p>
            <iframe
              className={s.map}
              src="https://www.google.com/maps/embed?pb=!1m19!1m8!1m3!1d11697.097624655777!2d74.583139!3d42.867052!3m2!1i1024!2i768!4f13.1!4m8!3e0!4m0!4m5!1s0x389ec8256ad6fbe3%3A0x8e1345fef168d873!2zMTkxINGD0LsuINCR0L7QutC-0L3QsdCw0LXQstCwLCDQkdC40YjQutC10LogNzIwMDE3LCDQmtGL0YDQs9GL0LfRgdGC0LDQvQ!3m2!1d42.8681585!2d74.583079!5e0!3m2!1sru!2sus!4v1700752897196!5m2!1sru!2sus"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
          <div className={s.wrapper}>
            <div className={s.card}>
              <h5>Адрес:</h5>
              <p>
                <Link
                  target="_blank"
                  href={'https://maps.app.goo.gl/nAVBSeMUmPD457Sv7'}
                >
                  720017, г. Бишкек, ул. Боконбаева, 191;
                </Link>
              </p>
            </div>
            <div className={s.card}>
              <h5>Режим работы:</h5>
              <p>Пн — Пт: с 8.30 до 17.00 / Сб-Вс: выходной;</p>
            </div>
            <div className={s.card}>
              <h5>Телефон:</h5>
              <p>
                <Link className="mr-5" href={'tel:+996312353381'}>
                  +996 (312) 35 33 81;
                </Link>
                <Link href={'tel:+996312353383'}>+996 (312) 35 33 83;</Link>
              </p>
            </div>
            <div className={s.card}>
              <h5>Факс:</h5>
              <p>
                <Link href={'tel:+996312353373'}>+996 (312) 35 33 73;</Link>
              </p>
            </div>
            <div className={s.card}>
              <h5>E-mail:</h5>
              <p>
                <Link target="_blank" href="mailto:erc@elcat.kg">
                  erc@elcat.kg
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactPage;
