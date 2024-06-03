import React from "react";

import logo from "./img/logo.jpg";

import Image from "./components/Image.js";

export default function Logo() {
  return (
    <a href="#">
      <Image src={logo} alt="logo" />
    </a>
  );
}
