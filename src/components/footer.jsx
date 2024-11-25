import facebook from "../assets/facebook.svg";
import github from "../assets/github.svg";
import phone from "../assets/phone-flip.svg";
const Footer = () => {
  return (
    <footer className="footer">
      <div>
        <p>&copy; 2023Ogunwande</p>
        <h2 className="main-text big">Landing</h2>
        <button className="action-button"> Purchase Now</button>
      </div>
      <div>
        <nav>
          <a href="#" className="text sec-text">
            Home
          </a>
          <a href="#" className="text sec-text">
            About
          </a>
          <a href="#" className="text sec-text">
            Contact Us
          </a>
        </nav>

        <nav>
          <a
            target="_blank"
            href="https://web.facebook.com/ogunwande.bukunmi.3"
          >
            <img src={facebook} alt="facebook" className="icon" />
          </a>
          <a target="_blank" href="https://github.com/OgunwandeBukunmi">
            <img src={github} className="icon" />
          </a>
          <a target="_blank" href="tel:+2349161276874">
            <img src={phone} alt="phone" className="icon" />
          </a>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
