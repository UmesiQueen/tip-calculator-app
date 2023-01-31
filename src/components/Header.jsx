import React from "react";

function Header() {
  const imageUrl = "../images/logo.svg";

  return (
    <header>
      <img src={imageUrl} alt="Logo" />
    </header>
  );
}

export default Header;
