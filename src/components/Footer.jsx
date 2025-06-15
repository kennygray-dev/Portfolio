function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-content">
        © {currentYear} Designed and Developed by Ken Agbapuonwu.
      </div>
    </footer>
  );
}

export default Footer;
