import Head from 'next/head';
import Image from "next/image";
import 'bootstrap/dist/css/bootstrap-grid.css';
import '@awesome.me/kit-7a9092486b/icons/css/all.css'
import styles from "./page.module.css";
import './bootstrap.css';


export const metadata = {
  title: 'Hardcore - сложный сервер майнкрафт | Craftomania',
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
                      <div className={styles.separator}></div>
                      <div className={styles.title}><a href='/'>Hardcore</a></div>
                    </div>

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

        <section className={styles.comparison}>
          <div className="container">
            <div className="row g-0" style={{ borderRadius: '10px', boxShadow: '0px 0px 2px rgb(255, 255, 255, 0.2)', overflow: 'hidden' }}>
              <div className="col-4">
                <div className={styles.cellname}></div>
              </div>
              <div className="col-4">
                <div className={styles.cellcenter}>
                  <div className={styles.nostatus}>
                    Обычный
                  </div>
                </div>
              </div>
              <div className="col-4">
                <div className={styles.cell}>
                  <div className={styles.status}>
                    Prime
                  </div>
                </div>
              </div>

              <div className="col-4">
                <div className={styles.cellname}>
                  <div className={styles.name}>
                    Возможность летать в лобби
                  </div>
                </div>
              </div>
              <div className="col-4">
                <div className={styles.cellcenter}>
                  <div className={styles.false}>
                    <i className="fa-solid fa-minus"></i>
                  </div>
                </div>
              </div>
              <div className="col-4">
                <div className={styles.cell}>
                  <div className={styles.true}>
                    <i className="fa-solid fa-check"></i>
                  </div>
                </div>
              </div>

              <div className="col-4">
                <div className={styles.cellname}>
                  <div className={styles.name}>
                    Выделение в чате
                  </div>
                </div>
              </div>
              <div className="col-4">
                <div className={styles.cellcenter}>
                  <div className={styles.false}>
                    <i className="fa-solid fa-minus"></i>
                  </div>
                </div>
              </div>
              <div className="col-4">
                <div className={styles.cell}>
                  <div className={styles.true}>
                    <i className="fa-solid fa-check"></i>
                  </div>
                </div>
              </div>

              <div className="col-4">
                <div className={styles.cellname}>
                  <div className={styles.name}>
                    Вход на переполненный сервер
                  </div>
                </div>
              </div>
              <div className="col-4">
                <div className={styles.cellcenter}>
                  <div className={styles.false}>
                    <i className="fa-solid fa-minus"></i>
                  </div>
                </div>
              </div>
              <div className="col-4">
                <div className={styles.cell}>
                  <div className={styles.true}>
                    <i className="fa-solid fa-check"></i>
                  </div>
                </div>
              </div>

              <div className="col-4">
                <div className={styles.cellname}>
                  <div className={styles.name}>
                    Приоритетная поддержка
                  </div>
                </div>
              </div>
              <div className="col-4">
                <div className={styles.cellcenter}>
                  <div className={styles.false}>
                    <i className="fa-solid fa-minus"></i>
                  </div>
                </div>
              </div>
              <div className="col-4">
                <div className={styles.cell}>
                  <div className={styles.true}>
                    <i className="fa-solid fa-check"></i>
                  </div>
                </div>
              </div>

              <div className="col-4">
                <div className={styles.cellname}>
                  <div className={styles.name}>
                    Количество аксессуаров
                  </div>
                </div>
              </div>
              <div className="col-4">
                <div className={styles.cellcenter}>
                  <div className={styles.value}>
                    18
                  </div>
                </div>
              </div>
              <div className="col-4">
                <div className={styles.cell}>
                  <div className={styles.value}>
                    45
                  </div>
                </div>
              </div>

              <div className="col-4">
                <div className={styles.cellname}>
                  <div className={styles.name}>
                    Множитель очков
                  </div>
                </div>
              </div>
              <div className="col-4">
                <div className={styles.cellcenter}>
                  <div className={styles.value}>
                    x1
                  </div>
                </div>
              </div>
              <div className="col-4">
                <div className={styles.cell}>
                  <div className={styles.value}>
                    x1.25
                  </div>
                </div>
              </div>

              <div className="col-4">
                <div className={styles.cellname} style={{ borderBottom: 'none' }}>
                  <div className={styles.name}>
                    Задержка при возрождении
                  </div>
                </div>
              </div>
              <div className="col-4">
                <div className={styles.cellcenter} style={{ borderBottom: 'none' }}>
                  <div className={styles.value}>
                    60 сек.
                  </div>
                </div>
              </div>
              <div className="col-4">
                <div className={styles.cell} style={{ borderBottom: 'none' }}>
                  <div className={styles.value}>
                    НЕТ
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        <section className={styles.purchase}>
          <div className="container">
            <div className="row">
              <div className="col-12 col-sm-12 col-md-12 col-lg-7">
                <div className={styles.info}>
                  <div className="row g-0">
                    <div className="col-5">
                      <div className="d-flex justify-content-center">
                        <Image
                          className={styles.picture}
                          src="/prime.png"
                          width={236}
                          height={236}
                          alt="Prime"
                          quality={100} />
                      </div>

                    </div>
                    <div className="col-7">
                      <div className="d-flex justify-content-center">
                        <div>
                          <div className={styles.title}>PRIME<span className={styles.span}>-СТАТУС</span></div>
                          <div className={styles.subtitle}>разумный выбор игроков</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-12 col-sm-12 col-md-12 col-lg-5">
                <div className={styles.buy}>
                  <div className="d-flex justify-content-between">
                    <div className={styles.price}>299₽<span>/90&nbsp;дней</span></div>
                    <div className={styles.button}>
                      <div>Купить</div>
                    </div>
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
                <div className="d-flex justify-content-end">
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
