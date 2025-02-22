import "./Home.css";
import logo from "./Images/mainLogo.png";
import img1 from "./Images/IMG-9153.jpg";
import img2 from "./Images/IMG-9264.jpg";
import whatsapp from "./Images/whatsapp.png";
import instagram from "./Images/instagram.png";
import phone from "./Images/phone-call.png";
import website from "./Images/click.png";
import facebook from "./Images/facebook.png";
function Home() {
  window.addEventListener("load", () => {
    setTimeout(() => {
      document.querySelector(".loader-container").style.opacity = "0"; // Start fading out
      setTimeout(() => {
        document.querySelector(".loader-container").style.display = "none"; // Remove after fade
        // document.querySelector(".HomeComponents").style.visibility = "visible"; // Remove after fade
      }, 1000);
    }, 2500);
  });

  return (
    <div className="HomeContainer">
      <div class="loader-container">
        <div class="fill"></div>
        <div class="heart"></div>
        <p className="HomeHead1">Welcome to The ReTail Project!!</p>
      </div>
      <div className="HomeComponents">
        <div className="HomeRow1">
          <div className="HomeRow1col1">
            <img src={logo} className="HomeRow1Logo" title="Logo" />
          </div>
          <div className="HomeRow1col2">
            <div className="HomeRow1txt">
              <p className="HomeHead1">
                The <span className="colYellow">Re</span>Tail Project
              </p>
              <p className="HomeHead2 colYellow">Pet Supplies Brand</p>
            </div>
          </div>
        </div>
        <div className="HomeRow2">
          <p className="HomeRow2txt">
            🌿 A Sustainable Lifestyle Brand that crafts Comfort and Joy for
            your Pets 🌿
          </p>
        </div>

        <div className="HomeRow3">
          <a href="https://wa.me/+919664149148">
            <button className="HomeRow3Btn animated-btn delay-0">
              WhatsApp
            </button>
          </a>
          <a href="https://wa.me/+919664149148">
            <div className="imgBgBtn animated-btn delay-0">
              <img src={whatsapp} className="HomeRow3Img" />
            </div>
          </a>
          <a href="">
            <button className="HomeRow3Btn animated-btn delay-1">
              Instagram
            </button>
          </a>
          <a href="">
            <div className="imgBgBtn animated-btn delay-1">
              <img src={instagram} className="HomeRow3Img" />
            </div>
          </a>
          <a href="">
            <button className="HomeRow3Btn animated-btn delay-2">
              Facebook
            </button>
          </a>
          <a href="">
            <div className="imgBgBtn animated-btn delay-2">
              <img src={facebook} className="HomeRow3Img" />
            </div>
          </a>
          <a href="">
            <button className="HomeRow3Btn animated-btn delay-3">
              Website
            </button>
          </a>
          <a href="">
            <div className="imgBgBtn animated-btn delay-3">
              <img src={website} className="HomeRow3Img" />
            </div>
          </a>
          <a href="">
            <button className="HomeRow3Btn animated-btn delay-4">
              Contact No
            </button>
          </a>
          <a href="">
            <div className="imgBgBtn animated-btn delay-4">
              <img src={phone} className="HomeRow3Img" />
            </div>
          </a>
        </div>
        {/* <p className="HomeRow2txt">Our Products</p> */}
        <div className="HomeRow4">
          <div className="ProductCard">
            <img src={img1} className="productImg" />
          </div>
          <div className="ProductCard">
            <img src={img2} className="productImg" />
          </div>
          <div className="ProductCard">
            <img src={img1} className="productImg" />
          </div>
          <div className="ProductCard">
            <img src={img2} className="productImg" />
          </div>
          <div className="ProductCard">
            <img src={img1} className="productImg" />
          </div>
        </div>
        <div className="HomeRow5">
          <button className="HomeRow5Btn">Our Story</button>
          <button className="HomeRow5Btn">About Us</button>
          <button className="HomeRow5Btn">Shop With Us</button>
        </div>
      </div>
    </div>
  );
}

export default Home;
