import Head from 'next/head';
import Image from "next/image";
import 'bootstrap/dist/css/bootstrap-grid.css';
import styles from "./page.module.css";
import './bootstrap.css';

export default function Home() {
  return (
    <>
      <Head>
        <title>Моя страница</title>
        <meta name="description" content="Craftomania | Hardcore" />
        <meta name="keywords" content="ключевые слова, для, seo" />
      </Head>

      <main className={styles.main}>
        <Image
          className={styles.background}
          src="/wallpaper.jpg"
          width={2000}
          height={500}
          alt="Background"
          quality={100} />

        <header className={styles.header}>
          <nav>

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
                <div className={styles.ip}>
                  <div className={styles.host}>mc.craftomania.net</div>
                  <div className={styles.version}>1.20.6</div>
                </div>
              </div>
              <div className="col-6">
                <div className="d-flex justify-content-center">
                  <Image
                    className={styles.picture}
                    src="/welcome.png"
                    width={580}
                    height={580}
                    alt="Welcome"
                    quality={100} />
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
                  <div className={styles.picture}>

                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>
      </main>

    </>
  );
}
