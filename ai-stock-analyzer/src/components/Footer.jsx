import React from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { id: 1, name: "Home", url: "#" },
    { id: 2, name: "Stocks", url: "#" },
    { id: 3, name: "Portfolio", url: "#" },
    { id: 4, name: "Market News", url: "#" },
    { id: 5, name: "About", url: "#" },
    { id: 6, name: "Contact", url: "#" },
  ];

  const socialLinks = [
    { id: 1, icon: "🌐", name: "Website", url: "#" },
    { id: 2, icon: "📘", name: "Facebook", url: "#" },
    { id: 3, icon: "🐦", name: "Twitter", url: "#" },
    { id: 4, icon: "💼", name: "LinkedIn", url: "#" },
  ];

  const footerStyle = {
    backgroundColor: "#111827",
    color: "#ffffff",
    padding: "40px 20px",
    marginTop: "40px",
  };

  const containerStyle = {
    maxWidth: "1200px",
    margin: "0 auto",
  };

  const headingStyle = {
    fontSize: "22px",
    fontWeight: "bold",
    marginBottom: "10px",
    color: "#4ade80",
  };

  const paragraphStyle = {
    color: "#d1d5db",
    lineHeight: "1.8",
  };

  const sectionStyle = {
    display: "flex",
    justifyContent: "space-between",
    flexWrap: "wrap",
    gap: "30px",
    marginBottom: "30px",
  };

  const listStyle = {
    listStyle: "none",
    padding: 0,
    margin: 0,
  };

  const linkStyle = {
    color: "#d1d5db",
    textDecoration: "none",
    display: "block",
    marginBottom: "10px",
  };

  const bottomStyle = {
    borderTop: "1px solid #374151",
    paddingTop: "20px",
    textAlign: "center",
    color: "#9ca3af",
    fontSize: "14px",
  };

  return (
    <footer style={footerStyle}>
      <div style={containerStyle}>
        <div style={sectionStyle}>
          {/* Company Section */}
          <div style={{ flex: 1, minWidth: "250px" }}>
            <h2 style={headingStyle}>AI Stock App</h2>

            <p style={paragraphStyle}>
              AI Stock App helps investors track real-time market data,
              monitor their portfolio, analyze stock performance, and
              receive intelligent investment insights powered by AI.
            </p>
          </div>

          {/* Quick Links */}
          <div style={{ flex: 1, minWidth: "180px" }}>
            <h3 style={{ marginBottom: "15px" }}>Quick Links</h3>

            <ul style={listStyle}>
              {quickLinks.map((link) => (
                <li key={link.id}>
                  <a href={link.url} style={linkStyle}>
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div style={{ flex: 1, minWidth: "220px" }}>
            <h3 style={{ marginBottom: "15px" }}>Contact</h3>

            <p style={paragraphStyle}>
              📧 support@aistockapp.com
            </p>

            <p style={paragraphStyle}>
              📞 +91 98765 43210
            </p>

            <p style={paragraphStyle}>
              📍 Mumbai, Maharashtra
            </p>
          </div>

          {/* Social */}
          <div style={{ flex: 1, minWidth: "180px" }}>
            <h3 style={{ marginBottom: "15px" }}>Follow Us</h3>

            {socialLinks.map((item) => (
              <div key={item.id} style={{ marginBottom: "10px" }}>
                <a
                  href={item.url}
                  style={{
                    color: "#d1d5db",
                    textDecoration: "none",
                  }}
                >
                  {item.icon} {item.name}
                </a>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Footer */}

        <div style={bottomStyle}>
          © {currentYear} AI Stock App. All Rights Reserved.
          <br />
          Built with React.js ❤️ | Smart Investing Starts Here
        </div>
      </div>
    </footer>
  );
};

export default Footer;