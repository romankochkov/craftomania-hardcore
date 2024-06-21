import Head from 'next/head';
import Image from "next/image";
import 'bootstrap/dist/css/bootstrap-grid.css';
import '@awesome.me/kit-7a9092486b/icons/css/all.css'
import styles from "./page.module.css";
import './bootstrap.css';


export const metadata = {
  title: 'Hardcore - сложный сервер майнкрафт | Craftomania',
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
                    <Image
                      className={styles.logo}
                      src="/logo.gif"
                      width={200}
                      height={40}
                      alt="Logo"
                      quality={100} />
                    <div className="d-flex justify-content-end">
                      <div className={styles.rules}>Правила</div>
                      <div className={styles.button}>Начать играть</div>
                    </div>

                  </div>
                </div>
              </div>
            </div>
          </nav>
        </header>

        <section className={styles.welcome}>
          <div className="container">
            <div className="row">
              <div className="col-6">
                <div className={styles.label}>—&nbsp;&nbsp;-&nbsp;&nbsp;Craftomania</div>
                <h1>Hardcore</h1>
                <h2>Умри, живи и снова умри</h2>
                <h4>Данный лозунг используется исключительно в контексте<br></br>игрового проекта и не несет никакого призыва к действию</h4>
                <div>
                  <div className={styles.ip}>
                    <div className={styles.host}>mc.craftomania.net</div>
                    <div className={styles.version}>1.20.6</div>
                  </div>
                  {/*<span className={styles.online}></span>*/}
                </div>

              </div>
              <div className="col-6">
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

              <div className="col-6">
                <div className={styles.briefly}>
                  <div className={styles.title}>Разрушительный мир анархии!</div>
                  <div className={styles.description}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</div>
                </div>
                <div className={styles.briefly}>
                  <div className={styles.title}>Разрушительный мир анархии!</div>
                  <div className={styles.description}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</div>
                </div>
              </div>

              <div className="col-6">
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

        <section>
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className={styles.prime}>
                  <div className={styles.icon}><i className="fa-solid fa-coins"></i></div>
                  <div className="row g-0">
                    <div className="col-4">
                      <div className="d-flex justify-content-center">
                        <Image
                          className={styles.picture}
                          src="/prime.png"
                          width={320}
                          height={320}
                          alt="Prime"
                          quality={100} />
                      </div>

                    </div>
                    <div className="col-8">
                      <div className={styles.title}>PRIME<span className={styles.span}>-СТАТУС</span></div>
                      <div className={styles.subtitle}>для тех, кто хочет большего</div>
                      <div className={styles.description}>
                        Prime-подписка на нашем Minecraft сервере предлагает уникальные преимущества, которые делают игровой процесс еще более увлекательным и комфортным. Никаких ожиданий после смерти, уникальные предметы персонализации, приоритетная поддержка и многое другое!
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-12" style={{marginBottom: '100px', paddingLeft: '60px', paddingRight: '60px'}}>
                <div className="d-flex justify-content-between">
                  <div className={styles.advantage}>
                    <div className="d-inline-flex justify-content-start">
                      <div className={styles.icon}>
                        <i className="fa-solid fa-dove" style={{top: '46%', fontSize: '38px'}}></i>
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
                      <i className="fa-solid fa-hourglass-half" style={{fontSize: '36px'}}></i>
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
                      <i className="fa-solid fa-handshake-angle" style={{fontSize: '38px'}}></i>
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
              <div className="col-6 col-md-3">
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

              <div className="col-6 col-md-3">
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

              <div className="col-6 col-md-3">
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
                    Сразу чувствуется, что админы вкладывают душу в развитие проекта. Очень радует отсутствие лагов и постоянная работа над улучшением сервера.
                  </div>
                  <div className={styles.grade}>
                    <i className="fa-solid fa-star"></i>
                    <p>5.0</p>
                  </div>
                </div>
              </div>

              <div className="col-6 col-md-3">
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
                    Я играю здесь уже несколько месяцев, и каждый раз открываю для себя что-то новое. Игроки на сервере очень дружелюбные, что несомненно радует.
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
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className={styles.title}>Hardcore</div>
                <div className={styles.precaution}>Права на игру Minecraft принадлежат Mojang Studios и никак не связаны с Hardcore. Вебсайт hardcore.craftomania.net не относится к Mojang Studios.</div>
                <div className={styles.social}>
                  <div className={styles.discord}><i className="fa-brands fa-discord"></i></div>
                  <div className={styles.youtube}><i className="fa-brands fa-youtube"></i></div>
                  <div className={styles.tiktok}><i className="fa-brands fa-tiktok"></i></div>
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
