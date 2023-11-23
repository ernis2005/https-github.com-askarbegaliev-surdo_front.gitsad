import React from 'react'
import s from './page.module.scss'
import Logo from '../../public/imgs/Logo.png'
import Oracle from '../../public/imgs/Oracle.png'
import Image from "next/legacy/image"
import Link from 'next/link'
import Email from '../svg/Email'
import Location from '../svg/Location'
import Facebook from '../svg/Facebook'
import Instagram from '../svg/Instagram'
import Linkidin from '../svg/Linkidin'
import Telegram from '../svg/Telegram'
import Whatssap from '../svg/Whatssap'
import { MdOutlineEmail } from "react-icons/md";


export default function Footer() {
  return (
    <div className={s.footer}>
      <div className='container'>
        <div className={s.footer_wrapper}>
          <div className={s.footer_left}>
            <div>
              <div className={s.footer_logo}>
                <Image className={s.logo} src={Logo} alt="" />
                <span>КОС и КОГ</span>
              </div>
              <p>&copy; 2023 КОС И КОГ All rights Recerved.</p>
            </div>
            <div className={s.oracle}>
              <p>Разработано в компании:</p>
              <Image className={s.image} src={Oracle} alt="" />
            </div>
          </div>
          <div className={s.footer_rigth}>
            <div>
              <h3>Quick Links</h3>
              <ul>
                <li><Link className={s.link} href="/">Главная</Link></li>
                <li>
                  <Link className={s.link} href="/page/company">О компании</Link>
                </li>
                <li>
                  <Link className={s.link} href="/page/News">Новости</Link>
                </li>
                <li>
                  <Link className={s.link} href="/page/Questions">Вопросы</Link>
                </li>
                <li>
                  <Link className={s.link} href="/page/contact">Контакты</Link>
                </li>
              </ul>
            </div>
            <div className={s.wrapper}>
              <div className={s.footer_flex}>
                <div>
                  <h3>Контакты</h3>
                  <ul>
                    <li>
                      <Email />
                      <Link className={s.link} target="_blank" href="mailto:erc@elcat.kg">
                        erc@elcat.kg
                      </Link>
                    </li>
                    <li>
                      <Location />
                      <Link className={s.link}
                        target="_blank"
                        href={'https://maps.app.goo.gl/nAVBSeMUmPD457Sv7'}>
                        location
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className={s.footer_item}>
                  <h3>Мы в соц.сетях</h3>
                  <div className={s.footer_link}>
                    <Link target="_blank" href="https://www.facebook.com/login.php?skip_api_login=1&api_key=966242223397117&signed_next=1&next=https%3A%2F%2Fwww.facebook.com%2Fsharer%2Fsharer.php%3Fu%3Dhttp%253A%252F%252Fwww.kosg.kg%252Fkontakty%252F%26t%3D-%26quote&cancel_url=https%3A%2F%2Fwww.facebook.com%2Fdialog%2Fclose_window%2F%3Fapp_id%3D966242223397117%26connect%3D0%23_%3D_&display=popup&locale=ru_RU">
                      <Facebook />
                    </Link>
                    <Link target="_blank" href="#">
                      <Instagram />
                    </Link>
                    <Link target="_blank" href="">
                      <MdOutlineEmail className={'w-[32px] h-[32px]'} />
                    </Link>
                    <Link target="_blank" href="https://telegram.me/share/url?url=http%3A%2F%2Fwww.kosg.kg%2Fkontakty%2F&text=-">
                      <Telegram />
                    </Link>
                    <Link target="_blank" href="https://api.whatsapp.com/send?text=-%20http%3A%2F%2Fwww.kosg.kg%2Fkontakty%2F">
                      <Whatssap />
                    </Link>
                  </div>
                </div>
              </div>
              <div className={s.footer_map}>
                <h3>Мы на карте</h3>
                <div className={s.map_link}>
                  <Link
                    target="_blank"
                    href={'https://maps.app.goo.gl/nAVBSeMUmPD457Sv7'}>
                    Посмотреть на карты
                  </Link>
                  <iframe
                    className={s.map}
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2924.6339980505554!2d74.58391327603604!3d42.859460803404865!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x389ec99f10d3e9f1%3A0xd8ae1cafa61a6ea6!2z0KTQuNC70L7RgNC90Y7QvNC-0L3QuNGP!5e0!3m2!1sru!2skg!4v1696498751488!5m2!1sru!2skg"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={s.mobile_wrapper}>
          <div className={s.footer_item}>
            <h3>Мы в соц.сетях</h3>
            <div className={s.footer_link}>
              <Link href="#">
                <Facebook />
              </Link>
              <Link href="#">
                <Instagram />
              </Link>
              <Link href="#">
                <Linkidin />
              </Link>
              <Link href="#">
                <Telegram />
              </Link>
              <Link href="#">
                <Whatssap />
              </Link>
            </div>
          </div>
          <div className={s.footer_map}>
            <h3>Мы на карте</h3>
            <div className={s.map_link}>
              <Link
                target="_blank"
                href={'https://maps.app.goo.gl/nAVBSeMUmPD457Sv7'}

              >
                Посмотреть на карты
              </Link>
              <iframe
                className={s.map}
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2924.6339980505554!2d74.58391327603604!3d42.859460803404865!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x389ec99f10d3e9f1%3A0xd8ae1cafa61a6ea6!2z0KTQuNC70L7RgNC90Y7QvNC-0L3QuNGP!5e0!3m2!1sru!2skg!4v1696498751488!5m2!1sru!2skg"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
