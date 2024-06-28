import Head from 'next/head';
import Image from "next/image";
import NavButtons from '../../components/nav-buttons.js';
import 'bootstrap/dist/css/bootstrap-grid.css';
import '@awesome.me/kit-7a9092486b/icons/css/all.css'
import styles from "./page.module.css";
import '../bootstrap.css';


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

                    <NavButtons styles={styles}/>
                  </div>
                </div>
              </div>
            </div>
          </nav>
        </header>

        <section className={styles.page}>
          <div className="container">
            <div className="row">
              <div className="d-flex justify-content-center">
                <div className="col-12 col-sm-12 col-md-10 col-lg-8">
                  <div className={styles.card}>
                    <p className={styles.title}>Шаг 1: Запуск Minecraft</p>
                    <p className={styles.text}>1. Открой Minecraft Launcher.</p>
                    <p className={styles.text}>2. Убедись, что у тебя установлена версия игры 1.20.1. Если нет, обнови её до этой версии.</p>

                    <p className={styles.title}>Шаг 2: Переход к меню многопользовательской игры</p>
                    <p className={styles.text}>1. На главном экране игры нажми на кнопку <b>"Сетевая игра"</b>.</p>
                    <Image
                      className={styles.picture}
                      src="/start-1.jpg"
                      width={1000}
                      height={600}
                      alt="Start"
                      quality={100} />

                    <p className={styles.title}>Шаг 3: Добавление нового сервера</p>
                    <p className={styles.text}>1. В меню мультиплеера нажми на кнопку <b>"Добавить"</b>.</p>
                    <Image
                      className={styles.picture}
                      src="/start-2.jpg"
                      width={1000}
                      height={600}
                      alt="Start"
                      quality={100} />

                    <p className={styles.title}>Шаг 4: Информация о сервере</p>
                    <p className={styles.text}>1. В поле <b>"Название сервера"</b> введи любое название, например, <b>"UHC"</b> или <b>"UltraHardcore"</b>.</p>
                    <p className={styles.text}>2. В поле <b>"Адрес сервера"</b> введи <b>mc.ultrahardcore.net</b>.</p>

                    <p className={styles.title}>Шаг 5: Сохранение и подключение</p>
                    <p className={styles.text}>1. Нажми на кнопку <b>"Готово"</b>, чтобы сохранить настройки.</p>
                    <p className={styles.text}>2. Ты вернёшься в список серверов, где теперь будет виден сервер <b>mc.ultrahardcore.net</b>.</p>
                    <p className={styles.text}>3. Выбери сервер в списке и нажми на кнопку <b>"Подключиться"</b>, чтобы зайти на сервер.</p>
                    <Image
                      className={styles.picture}
                      src="/start-3.jpg"
                      width={1000}
                      height={600}
                      alt="Start"
                      quality={100}
                      style={{marginBottom: '0px'}}/>

                    <p className={styles.title}>Дополнительные советы</p>
                    <p className={styles.text}>- Убедись, что у тебя стабильное интернет-соединение.</p>
                    <p className={styles.text}>- Если сервер не работает, попробуй проверить его статус на специализированных сайтах или форумах.</p>
                    <p className={styles.text}>- Версия твоей игры должна быть именно 1.20.1, так как сервер может не поддерживать другие версии.</p>

                    <p className={styles.text}><br></br>Теперь ты готов играть на сервере mc.ultrahardcore.net! Удачи!</p>
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
