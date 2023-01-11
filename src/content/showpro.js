import React from "react";
const Proshow = () => {
  //import element
  let body_contener = document.getElementById("body");
  let info_product = document.querySelector(".contener--img");
  let exit_btn = document.querySelector(".exit-btn");
  //create proshow

  ///add data
  for (let i = 0; i < 3; i++) {
    t = `
  <div className="cover-product">
  <div className="show-product">
  
      <section className="img">
          <img src="" alt="" onclick="add_event_on_img()" className="img-product">
      </section>
  </div>
  <div>
      <section className="info-product">
          <h3 className="price-product">pric</h3>
          <h3 className="name-product">name</h3>
      </section>
  </div>

  `;

    body_contener.innerHTML += t;
  }
  //pop-click

  function add_event_on_img() {
    info_product.style.display = "grid";
  }
  exit_btn.addEventListener("click", () => {
    info_product.style.display = "none";
  });
  return (
    <dev>
      <h1>proshow</h1>
    </dev>
  );
};

export default Proshow;
