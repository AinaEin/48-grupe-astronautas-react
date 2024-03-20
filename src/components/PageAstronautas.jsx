import astronautas from "../assets/astronautas.jpg";
import logo from "../assets/logo.jpg";
import style from "./PageAstronautas.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faTwitter, faInstagram, faLinkedin} from "@fortawesome/free-brands-svg-icons";

function PageAstronautas() {
  return (
    <body>
      <header className={style.container}>
        <img className={style.logo} src={logo} alt="Logo" />
        <nav className={style.mainNav}>
          <a className={[style.navLink, style.active].join(" ")} href="/">
            About
          </a>
          <a className={style.navLink} href="/">
            Portfolio
          </a>
          <a className={style.navLink} href="/">
            Job
          </a>
          <a className={style.navLink} href="/">
            Contact
          </a>
        </nav>
      </header>

      <main className={style.container}>
        <div className={style.columLeft}>
          <h1 className={style.mainTitle}>404</h1>
          <h2 className={style.subtitle}>
            <span className="title">Lost</span> in Space
          </h2>
          <p className={style.description}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit
            eveniet labore, aspernatur necessitatibus vitae at officiis numquam
            in quae sed?
          </p>
          <div className={style.btnList}>
            <a className={style.btn} href="/">
              Go home
            </a>
            <a className={style.btn} href="/">
              Back
            </a>
          </div>
        </div>
        <div className={style.columRight}>
          <img
            className={style.mainImg}
            src={astronautas}
            alt="Astronautas raso zinute namo, nes iskrido i kosmosa"
          />
        </div>
      </main>

      <footer className={style.container}>
        <div className={style.socials}>
          <a className={style.socialLink} href="/"></a>
          <FontAwesomeIcon icon={faFacebook} style={{ fontSize: "18px" }} />
          <a className={style.socialLink} href="/"></a>
          <FontAwesomeIcon icon={faTwitter} style={{ fontSize: "18px" }} />
          <a className={style.socialLink} href="/"></a>
          <FontAwesomeIcon icon={faInstagram} style={{ fontSize: "18px" }} />
          <a className={style.socialLink} href="/"></a>
          <FontAwesomeIcon icon={faLinkedin} style={{ fontSize: "18px" }} />
        </div>
        <p className={style.copyRight}>&copy; 2024 - All rights reserved</p>
      </footer>
    </body>
  );
}

export { PageAstronautas };
