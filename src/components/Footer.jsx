import "./Footer.css";

export const Footer = () => {
  return (
    <>
      <footer className="footer">
        <div className="social-links">
          <a
            className="social-pill"
            href="https://github.com/Aritra-art"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa-brands fa-github"></i>
          </a>
          <a
            className="social-pill"
            href="https://twitter.com/Raj_chowdhury10"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa-brands fa-twitter"></i>
          </a>
          <a
            className="social-pill"
            href="https://www.linkedin.com/in/aritra-chowdhury-b95a66227/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa-brands fa-linkedin"></i>
          </a>
        </div>
        <div className="copyright-text">
          <span>
            Made with{" "}
            <span role="img" aria-label="red-heart">
              ❤️
            </span>{" "}
            by{" "}
            <span style={{ fontWeight: "600", margin: "0px 6px 0px 0px" }}>
              Aritra Chowdhury
            </span>
          </span>
          &copy; {new Date().getFullYear()} Luxuria
        </div>
      </footer>
    </>
  );
};
