import "./Footer.css"
import { FaInstagram } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { FaYoutube } from "react-icons/fa";
const Footer = ()=>{
    return(
        <div>
            <footer class="footer">
  <div class="footer-container">
    <div class="footer-about">
      <h2>जल निधि</h2>
      <p>Rooftop Rainwater Harvesting (RTRWH) is a sustainable method to collect and use rainwater directly from rooftops. Together, we can conserve water and secure our future.</p>
    </div>

    <div class="footer-links">
      <h3>Quick Links</h3>
      <ul>
        <li><a href="#">Home</a></li>
        <li><a href="#">About जल निधि</a></li>
        <li><a href="#">Types of Harvesting</a></li>
        <li><a href="#">Storage & Recharge</a></li>
        <li><a href="#">Contact</a></li>
      </ul>
    </div>

    <div class="footer-contact">
      <h3>Contact</h3>
      <p>📍 Headquaters - Jaipur, Rajasthan</p>
      <p>📧 info@jalNidhi.org</p>
      <p>📞 +91-9876543210</p>
      <div class="socials">
        <a href="#"><FaInstagram /></a>
        <a href="#"><FaLinkedin /></a>
        <a href="#"><BsTwitterX /></a>
        <a href="#"><FaYoutube />
</a>
      </div>
    </div>
  </div>

  <div class="footer-bottom">
    <p>© 2025 जल निधि. All Rights Reserved.</p>
  </div>
</footer>

        </div>
    )
}
export default Footer;