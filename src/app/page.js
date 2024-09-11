import Head from 'next/head';
import Image from "next/image";
import NavButtons from '../components/nav-buttons.js';
import MapComponent from '../components/map.js';
import PrimeBlock from '../components/prime.js';
import CopyIP from '../components/copy-ip.js';
import 'bootstrap/dist/css/bootstrap-grid.css';
import '@awesome.me/kit-7a9092486b/icons/css/all.css'
import styles from "./page.module.css";
import './bootstrap.css';


export const metadata = {
  title: 'Hardcore - сложный сервер майнкрафт',
  authors: [{ name: 'Roman K', url: 'https://github.com/romankochkov' }],
  creator: 'Craftomania',
  publisher: 'Craftomania',
  keywords: ['Майнкрафт', 'Minecraft', 'Крафтомания', 'Craftomania'],
}


export default function Home() {
  return (
    <>
      <main className={styles.main}>
        <Image
          className={styles.background}
          src="/wallpaper.jpg"
          width={2000}
          height={500}
          alt="Background"
          quality={100} />

        <header className={styles.header}>
          <nav className={styles.nav}>
            <div className="container">
              <div className="row">
                <div className="col-12">
                  <div className="d-flex justify-content-between">
                    <div style={{ height: '46px' }}>
                      <Image
                        className={styles.logo}
                        src="/logo.png"
                        width={200}
                        height={40}
                        alt="Logo"
                        quality={100} />
                      <div className="d-none d-md-inline-flex" style={{ verticalAlign: 'top', marginTop: '3.5px' }}>
                        <div className={styles.separator}></div>
                        <div className={styles.title}><a href='/'>Hardcore</a></div>
                      </div>

                    </div>

                    <NavButtons styles={styles} />
                  </div>
                </div>
              </div>
            </div>
          </nav>
        </header>

        <section className={styles.welcome}>
          <div className="container">
            <div className="row">
              <div className="col-12 col-sm-12 col-md-6 col-lg-6">
                <div className={styles.label}>—&nbsp;&nbsp;-&nbsp;&nbsp;Craftomania</div>
                <h1>Hardcore</h1>
                <h2>Умри, живи и снова умри</h2>
                <h4>Данный лозунг используется исключительно в контексте<br></br>игрового проекта и не несет никакого призыва к действию</h4>
                <div className="d-none d-md-block">
                  <CopyIP />
                  {/*<span className={styles.online}></span>*/}
                </div>
                <div className="d-flex d-md-none justify-content-center">
                  <CopyIP />
                  {/*<span className={styles.online}></span>*/}
                </div>
              </div>
              <div className="d-none d-md-block col-md-6 col-lg-6">
                <div className="d-flex justify-content-center" style={{ position: 'relative' }}>
                  <Image
                    className={styles.picture}
                    src="/welcome.png"
                    width={580}
                    height={580}
                    alt="Welcome"
                    quality={100} />
                  <div className={styles.glow}></div>
                </div>
              </div>

              <div className="col-12 col-sm-12 col-md-6 col-lg-6">
                <div className={styles.briefly}>
                  <div className={styles.title}>Разрушительный мир анархии 💣</div>
                  <div className={styles.description}>Ваше выживание зависит только от вашей хитрости, силы и способности строить альянсы. Этот сервер создан для настоящих любителей анархии, где каждый сам решает, кем быть: безжалостным грабителем, мирным фермером или непримиримым воином.</div>
                </div>
                <div className={styles.briefly}>
                  <div className={styles.title}>Твоя игра, твои правила!</div>
                  <div className={styles.description}>Вы сами решаете, каким станет ваше приключение: создайте мирный уголок вдали от хаоса или погрузитесь в безжалостную борьбу за ресурсы. На этом сервере важен каждый шаг — каждая ошибка может стать последней.</div>
                </div>
              </div>

              <div className="col-12 col-sm-12 col-md-6 col-lg-6">
                <div className={styles.state}>
                  <div className={styles.title}>ФАЗА II</div>
                  <div className={styles.subtitle}>Восстание мертвецов</div>
                  <div className={styles.picture}></div>
                  <div className={styles.players}><i className="fa-solid fa-user"></i>10 игроков</div>
                  <div className={styles.time}><i className="fa-solid fa-sun"></i>Рассвет</div>
                </div>
              </div>

            </div>
          </div>
        </section>

        <section className={styles.map}>
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className={styles.title}>Текущая локация</div>
              </div>

              <MapComponent />
            </div>
          </div>
        </section>

        <section>
          <div className="container">
            <div className="row">
              <div className="col-12">
                <PrimeBlock />
              </div>

              <div className="col-12" style={{ marginBottom: '100px', paddingLeft: '60px', paddingRight: '60px' }}>
                <div className="d-none d-md-flex justify-content-between">
                  <div className={styles.advantage}>
                    <div className="d-inline-flex justify-content-start">
                      <div className={styles.icon}>
                        <i className="fa-solid fa-dove" style={{ top: '46%', fontSize: '38px' }}></i>
                      </div>
                      <div className="d-inline-flex flex-column">
                        <div className={styles.title}>/fly</div>
                        <div className={styles.subtitle}>возможность летать в лобби</div>
                      </div>
                    </div>
                  </div>

                  <div className={styles.advantage}>
                    <div className="d-inline-flex justify-content-start">
                      <div className={styles.icon}>
                        <i className="fa-solid fa-face-cowboy-hat"></i>
                      </div>
                      <div className="d-inline-flex flex-column">
                        <div className={styles.title}>20+</div>
                        <div className={styles.subtitle}>уникальных аксессуаров</div>
                      </div>
                    </div>
                  </div>

                  <div className={styles.advantage}>
                    <div className="d-inline-flex justify-content-start">
                      <div className={styles.icon}>
                        <i className="fa-solid fa-hourglass-half" style={{ fontSize: '36px' }}></i>
                      </div>
                      <div className="d-inline-flex flex-column">
                        <div className={styles.title}>0 секунд</div>
                        <div className={styles.subtitle}>больше никаких ожиданий</div>
                      </div>
                    </div>
                  </div>

                  <div className={styles.advantage}>
                    <div className="d-inline-flex justify-content-start">
                      <div className={styles.icon}>
                        <i className="fa-solid fa-handshake-angle" style={{ fontSize: '38px' }}></i>
                      </div>
                      <div className="d-inline-flex flex-column">
                        <div className={styles.title}>Помощь</div>
                        <div className={styles.subtitle}>перманентная поддержка</div>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </section>

        <section className={styles.reviews}>
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className={styles.title}>Отзывы пользователей</div>
              </div>
              <div className="col-12 col-sm-6 col-md-3">
                <div className={styles.review}>
                  <div>
                    <Image
                      className={styles.avatar}
                      src="/review-avatar-1.png"
                      width={44}
                      height={44}
                      alt="Avatar"
                      quality={60} />
                    <div className="d-inline-flex flex-column" style={{ verticalAlign: 'top' }}>
                      <div className={styles.name}>Tortik228</div>
                      <div className={styles.rank}>Игрок</div>
                    </div>
                  </div>
                  <div className={styles.description}>
                    Этот сервер превзошел все мои ожидания! Удивительно, как здесь все продумано до мелочей: от дизайна спавна до организации ивентов.
                  </div>
                  <div className={styles.grade}>
                    <i className="fa-solid fa-star"></i>
                    <p>5.0</p>
                  </div>
                </div>
              </div>

              <div className="col-12 col-sm-6 col-md-3">
                <div className={styles.review} style={{ background: 'transparent' }}>
                  <div>
                    <Image
                      className={styles.avatar}
                      src="/review-avatar-2.png"
                      width={44}
                      height={44}
                      alt="Avatar"
                      quality={60} />
                    <div className="d-inline-flex flex-column" style={{ verticalAlign: 'top' }}>
                      <div className={styles.name}>BlockMaster</div>
                      <div className={styles.rank}>Игрок</div>
                    </div>
                  </div>
                  <div className={styles.description}>
                    Приятно видеть, что админы активно слушают игроков и внедряют их идеи. Очень понравилась система наград, которая мотивирует играть.
                  </div>
                  <div className={styles.grade}>
                    <i className="fa-solid fa-star"></i>
                    <p>5.0</p>
                  </div>
                </div>
              </div>

              <div className="col-12 col-sm-6 col-md-3">
                <div className={styles.review} style={{ background: 'transparent' }}>
                  <div>
                    <Image
                      className={styles.avatar}
                      src="/review-avatar-3.png"
                      width={44}
                      height={44}
                      alt="Avatar"
                      quality={60} />
                    <div className="d-inline-flex flex-column" style={{ verticalAlign: 'top' }}>
                      <div className={styles.name}>QuantumCrafter_</div>
                      <div className={styles.rank}>Игрок</div>
                    </div>
                  </div>
                  <div className={styles.description}>
                    Сразу чувствуется, что админы вкладывают душу в развитие проекта. Очень радует постоянная работа над улучшением сервера.
                  </div>
                  <div className={styles.grade}>
                    <i className="fa-solid fa-star"></i>
                    <p>5.0</p>
                  </div>
                </div>
              </div>

              <div className="col-12 col-sm-6 col-md-3">
                <div className={styles.review} style={{ background: 'transparent' }}>
                  <div>
                    <Image
                      className={styles.avatar}
                      src="/review-avatar-4.png"
                      width={44}
                      height={44}
                      alt="Avatar"
                      quality={60} />
                    <div className="d-inline-flex flex-column" style={{ verticalAlign: 'top' }}>
                      <div className={styles.name}>Vitalik2015</div>
                      <div className={styles.rank}>Игрок</div>
                    </div>
                  </div>
                  <div className={styles.description}>
                    Я играю здесь уже несколько месяцев, и каждый раз открываю для себя что-то новое. Игроки на сервере очень дружелюбные.
                  </div>
                  <div className={styles.grade}>
                    <i className="fa-solid fa-star"></i>
                    <p>5.0</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <footer className={styles.footer}>
          <Image
            className={styles.background1}
            src="/wallpaper.jpg"
            width={100}
            height={100}
            alt="Background"
            quality={50} />

          <Image
            className={styles.background2}
            src="/wallpaper.jpg"
            width={100}
            height={100}
            alt="Background"
            quality={50} />

          <div className="container">
            <div className="row">
              <div className="col-12 col-sm-12 col-md-6 col-lg-6">
                <div className={styles.title}>Hardcore</div>
                <div className={styles.precaution}>Права на игру Minecraft принадлежат Mojang Studios и никак не связаны с Hardcore. Вебсайт hardcore.craftomania.net не относится к Mojang Studios.</div>
                <div className={styles.social}>
                  <div className={styles.discord}><i className="fa-brands fa-discord"></i></div>
                  <div className={styles.youtube}><i className="fa-brands fa-youtube"></i></div>
                  <div className={styles.tiktok}><i className="fa-brands fa-tiktok"></i></div>
                </div>
              </div>
              <div className="col-12 col-sm-12 col-md-6 col-lg-6">
                <div className="d-none d-md-flex justify-content-end">
                  <div className="d-flex flex-column" style={{ marginRight: '100px' }}>
                    <div className={styles.chapter}>Платформа</div>
                    <div className={styles.link}><a href='/'>Главная</a></div>
                    <div className={styles.link}><a href='/rules'>Правила</a></div>
                    <div className={styles.link}><a href='/prime'>Подписка</a></div>
                  </div>
                  <div className="d-flex flex-column">
                    <div className={styles.chapter}>Информация</div>
                    <div className={styles.link}><a href='/help'>Поддержка</a></div>
                    <div className={styles.link}><a href='/info'>Подробности</a></div>
                    <div className={styles.link}><a href='/gratitude'>Благодарности</a></div>
                  </div>
                </div>

                <div className="d-flex d-md-none justify-content-center">
                  <div className="d-flex flex-column" style={{ marginRight: '100px' }}>
                    <div className={styles.chapter}>Платформа</div>
                    <div className={styles.link}><a href='/'>Главная</a></div>
                    <div className={styles.link}><a href='/rules'>Правила</a></div>
                    <div className={styles.link}><a href='/prime'>Подписка</a></div>
                  </div>
                  <div className="d-flex flex-column">
                    <div className={styles.chapter}>Информация</div>
                    <div className={styles.link}><a href='/help'>Поддержка</a></div>
                    <div className={styles.link}><a href='/info'>Подробности</a></div>
                    <div className={styles.link}><a href='/gratitude'>Благодарности</a></div>
                  </div>
                </div>
              </div>
              <div className="col-12">
                <div className={styles.copyright}>
                  <div className="d-flex justify-content-between">
                    <div className={styles.info}>© Craftomania Hardcore, 2024</div>
                    <div className={styles.language}>RU</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </main>

    </>
  );
}
