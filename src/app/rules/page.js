import Head from 'next/head';
import Image from "next/image";
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
                      <div className="d-none d-md-inline-flex">
                        <div className={styles.separator}></div>
                        <div className={styles.title}><a href='/'>Hardcore</a></div>
                      </div>
                    </div>

                    <div className="d-flex justify-content-end">
                      <div className={styles.button}>Начать играть</div>
                    </div>

                  </div>
                </div>
              </div>
            </div>
          </nav>
        </header>

        <section className={styles.page}>
          <div className="container">
            <div className="row">
              <div className="col-12 col-sm-12 col-md-12 col-lg-8">
                <div className={styles.card}>
                  <div className={styles.list}>
                    <p className={styles.title}>Правила пользования сайтом ultrahardcore.net</p>

                    <p className={styles.text}>Добро пожаловать на сайт нашего Minecraft-сервера! Используя наш сайт, вы соглашаетесь соблюдать следующие правила и условия. Пожалуйста, внимательно ознакомьтесь с ними.</p>

                    <p className={styles.title}>1. Общие положения</p>

                    <p className={styles.text}>1.1. Настоящие правила регулируют использование сайта и услуги, предоставляемые на нашем Minecraft-сервере.</p>
                    <p className={styles.text}>1.2. Администрация сайта оставляет за собой право изменять правила в любое время без предварительного уведомления пользователей. Актуальная версия правил всегда доступна на сайте.</p>

                    <p className={styles.title}>2. Определения</p>

                    <p className={styles.text}>2.1. <strong>Сайт</strong> – интернет-сайт, на котором размещается информация о нашем Minecraft-сервере и предоставляются соответствующие услуги.</p>
                    <p className={styles.text}>2.2. <strong>Администрация</strong> – команда лиц, управляющих Сайтом и Minecraft-сервером, обладающих всеми необходимыми правами и полномочиями для обеспечения его работы и предоставления услуг.</p>
                    <p className={styles.text}>2.3. <strong>Пользователь</strong> – любое лицо, использующее Сайт и/или услуги Minecraft-сервера.</p>

                    <p className={styles.title}>3. Авторские права</p>

                    <p className={styles.text}>3.1. Все материалы, размещенные на сайте, включая текст, графику, логотипы, значки, изображения и программное обеспечение, являются собственностью администрации сайта или контент-провайдеров и защищены международными законами об авторских правах.</p>
                    <p className={styles.text}>3.2. Запрещается копирование, распространение, изменение или использование материалов с сайта в коммерческих целях без письменного разрешения администрации.</p>

                    <p className={styles.title}>4. Платные услуги</p>

                    <p className={styles.text}>4.1. Сайт может предоставлять платные услуги, такие как покупка внутриигровой валюты, предметов, доступ к премиум-аккаунтам и другие.</p>
                    <p className={styles.text}>4.2. Цены на платные услуги указаны на соответствующих страницах сайта. Администрация оставляет за собой право изменять цены без предварительного уведомления.</p>
                    <p className={styles.text}>4.3. Оплата услуг производится через доступные на сайте платежные системы. Все платежи являются окончательными и не подлежат возврату, за исключением случаев, предусмотренных законодательством или решением администрации.</p>
                    <p className={styles.text}>4.4. В случае технических проблем или ошибок при предоставлении платных услуг, пользователи могут обратиться в службу поддержки для решения проблемы.</p>

                    <p className={styles.title}>5. Политика конфиденциальности</p>

                    <p className={styles.text}>5.1. Администрация сайта обязуется защищать личные данные пользователей и соблюдать конфиденциальность информации.</p>
                    <p className={styles.text}>5.2. Сбор и использование личной информации осуществляется в соответствии с законодательством и только для предоставления услуг, улучшения работы сайта и коммуникации с пользователями.</p>
                    <p className={styles.text}>5.3. Личные данные могут включать имя, адрес электронной почты, информацию о платежах и другие данные, предоставленные пользователями добровольно.</p>
                    <p className={styles.text}>5.4. Администрация сайта принимает все разумные меры для защиты личной информации от несанкционированного доступа, изменения, раскрытия или уничтожения.</p>
                    <p className={styles.text}>5.5. Пользователи имеют право запросить удаление или изменение своих личных данных, связавшись с администрацией сайта.</p>

                    <p className={styles.title}>6. Ответственность пользователей</p>

                    <p className={styles.text}>6.1. Пользователи обязуются соблюдать все применимые законы и правила при использовании сайта и услуг Minecraft-сервера.</p>
                    <p className={styles.text}>6.2. Запрещается использовать сайт для распространения вредоносного ПО, спама, а также для совершения действий, направленных на взлом или нанесение ущерба серверу и другим пользователям.</p>
                    <p className={styles.text}>6.3. В случае нарушения правил, администрация оставляет за собой право ограничить доступ к сайту и услугам, а также принять другие меры в соответствии с законодательством.</p>

                    <p className={styles.title}>7. Ограничение ответственности</p>

                    <p className={styles.text}>7.1. Администрация сайта не несет ответственности за возможные убытки, прямые или косвенные, возникшие в результате использования или невозможности использования сайта и услуг сервера.</p>
                    <p className={styles.text}>7.2. Администрация не гарантирует бесперебойную и безошибочную работу сайта и сервера, но стремится к максимальной стабильности и безопасности.</p>

                    <p className={styles.title}>8. Контакты</p>

                    <p className={styles.text}>8.1. По всем вопросам и предложениям пользователи могут обращаться в службу поддержки сайта через контактную форму или по указанным контактным данным.</p>

                    <p className={styles.text}><strong>Дата вступления в силу:</strong> 25.06.2024</p>

                    <p className={styles.text}><br></br><br></br><br></br>Спасибо за использование нашего сайта!</p>
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
