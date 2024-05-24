import Image from "next/image";
import 'bootstrap/dist/css/bootstrap-grid.css';
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <nav>
        <div className="container">
          <div className={styles.navbar}>
            <div className="d-flex justify-content-between">
              <div className={styles.logo}>
                <a href="/">Craftomania</a>
                <br className="d-block d-sm-none"></br>
                <span className={`${styles.separator} d-none d-sm-inline-flex`}>｜</span>
                <span className={styles.hardcore}>HARDCORE</span>
              </div>
              <div>
                <div className="d-flex justify-content-end">
                  <div className={styles.link}>Вики</div>
                  <div className={styles.link}>Донат</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>

      <section className={styles.section1}>
        <div className="container">
          <div className="row">
            <div className="col-9">
              <div className={styles.start}>
                <Image
                  src="/wallpaper.png"
                  fill={true}
                  quality={100}
                  alt="Wallpaper"
                  className={styles.wallpaper} />
                <div className={styles.info}>
                  <div className="d-flex justify-content-between">
                    <div className={styles.ip}>
                      mc.craftomania.net
                    </div>
                    <div>
                      <div className={styles.phase}>
                        ФАЗА III
                      </div>
                      <div className={styles.date}>
                        ВАЙП ЧЕРЕЗ 2 ДНЯ
                      </div>
                      
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-3">
              <div className={styles.rating}>

              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
