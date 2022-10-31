import React, { useState } from "react";
import "../style/Footer.scss";

function Footer() {
  const languages = [
    { value: "", text: "Options" },
    { value: "en", text: "EN €" },
    { value: "nl", text: "NL €" },
    { value: "fr", text: "FR €" },
  ];

  const [lang, setLang] = useState("en");

  // This function put query that helps to
  // change the language
  const handleChange = (e) => {
    setLang(e.target.value);
  };

  return (
    <>
      <section className="footer">
        <div className="footer__menu">
          <a className="footer__menu--item" href="#">
            Reviews
          </a>
          <a className="footer__menu--item" href="#">
            Contact
          </a>
          <a className="footer__menu--item" href="#">
            Account
          </a>
        </div>
        <div className="footer__language-select">
          <select
            className="footer__language-select--languages"
            value={lang}
            onChange={handleChange}
          >
            {languages.map((language, index) => (
              <option key={index} value={language.value}>
                {language.text}
              </option>
            ))}
          </select>
        </div>
        <div className="ooter__contact">
          <p>
            <strong>Call</strong> 020-2050738
          </p>
          <p>
            <strong>mail</strong> onshallo@aceandtate.nl
          </p>
          <p>
            <strong>whatsapp</strong> +31 6 33236677
          </p>
        </div>
      </section>
    </>
  );
}

export default Footer;
