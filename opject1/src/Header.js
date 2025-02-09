import './Header.css';
import { FaTwitter } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaGooglePlusG } from "react-icons/fa";

function Header(){
    return(
        <div>
            <section class="main-section">
                <div class="content">
                    <h2>Hello, I’m Mo</h2>
                    <h1 class="web-developer">web developer</h1>
                    <p>This is My Website</p>
                    <a href="#" class="btn">View My Work</a>
                    <div class="social-icons">
                        <a href="#"><i class="fab fa-twitter"><FaTwitter /></i></a>
                        <a href="#"><i class="fab fa-github"><FaFacebook /></i></a>
                        <a href="#"><i class="fab fa-google"><FaGooglePlusG /></i></a>
                    </div>
                </div>
            </section>
            <script src="https://kit.fontawesome.com/a076d05399.js"></script>
            </div>
    );
}
export default Header;