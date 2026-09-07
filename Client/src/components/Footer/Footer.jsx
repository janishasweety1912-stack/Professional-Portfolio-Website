import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">

      <div className="container">

        <h3>
          PROFESSIONAL PORTFOLIO
        </h3>


        <div className="footer-links">

          <a href="#">
            GitHub
          </a>

          <a href="#">
            LinkedIn
          </a>

          <a href="#">
            Email
          </a>

        </div>


        <div className="footer-bottom">

          © {new Date().getFullYear()} Anisha Sweety.
          All Rights Reserved.

        </div>


      </div>

    </footer>
  );
}


export default Footer;