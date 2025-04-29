import github from '../assets/github.png';
import instagram from '../assets/instagram.png';
import linkedin from '../assets/linkedin.png';
import './footer.css';

const Footer = () => {
  return (
    <footer className="footer__container">
      <div className="footer__wave">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
  <path fill="#421869" fill-opacity="1" d="M0,160L48,144C96,128,192,96,288,106.7C384,117,480,171,576,197.3C672,224,768,224,864,197.3C960,171,1056,117,1152,117.3C1248,117,1344,171,1392,197.3L1440,224L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
</svg>/
      </div>

      <div className="footer">
        <div className="footer__socials">
          <a href="https://github.com" target="_blank" rel="noopener noreferrer">
            <img src={github} alt="GitHub" className="footer__icon" />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <img src={instagram} alt="Instagram" className="footer__icon" />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
            <img src={linkedin} alt="LinkedIn" className="footer__icon" />
          </a>
        </div>

        <ul className="footer__links">
          <li><a href="#terms">Termos de Serviço</a></li>
          <li><a href="#conditions">Termos e Condições Gerais</a></li>
          <li><a href="#privacy">Política de Privacidade</a></li>
          <li><a href="#cookies">Política de Cookies</a></li>
          <li><a href="#legal">Nota Legal</a></li>
        </ul>

        <div className="footer__copyright">
          <small>© Trabalho feito por Ana Caroline Mena SENAI</small>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
