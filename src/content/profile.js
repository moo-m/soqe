import React from "react";
const Proshow = () => {
  //import element
  let body_contener = document.querySelector(".contener_product");
  let product_list_add = document.querySelector(".form_list");
  let btn_add_product = document.querySelector(".add_product");
  let img_uploaded = document.querySelector(".img_added");
  let upload_file = document.querySelector(".upload_file");
  let btn_close_list_product = document.querySelector(".close_product_list");
  let lable_upload = document.querySelector(".lable_upload");
  let form_input = document.querySelector(".form_input");
  let add_more_img_product = document.querySelector(".img_product_added");
  //input element
  let name1 = document.querySelector(".add_name");
  let pric = document.querySelector(".add_price");
  let color = document.querySelector(".add_color");
  let discription = document.querySelector(".add_discription");
  let siz = document.querySelector(".add_siz");
  let supmet = document.querySelector(".add_it");
  let img = document.querySelector(".upload_file");
  //إضافة مجموعة صور
  for (let i = 0; i < 3; i++) {
    let imgs = document.createElement("img");
    add_more_img_product.append(imgs);
    imgs.src = img.files[i];
    console.log(img.files[i]);
  }
  console.log(img);
  //create proshow
  let storage;
  if (localStorage.product_info != null) {
    storage = JSON.parse(localStorage.product_info);
  }
  storage = [];

  //save data

  supmet.onclick = () => {
    var data_seved = {
      img_product: [],
      name_product: name1.value,
      pric_product: pric.value,
      color_product: color.value,
      discription_product: discription.value,
      siz_product: siz.value,
    };
    if (img == "") {
      console.log("dk");
    } else {
      read_file_url(data_seved, img);
    }

    storage.push(data_seved);
    localStorage.setItem("productp_info", JSON.stringify(storage));
    console.log(storage);
  };

  function read_file_url(object, image) {
    let image1 = new FileReader();
    image1.onload = () => {
      object.img_pro = image1.result;
    };
    image1.readAsDataURL(image.files[0]);
  }

  //show data
  for (let i = 1; i < 10; i++) {
    t = `
  <div class="my_product">

  <div class="show-product">
      <section class="img">
          <img src="../images/1.jpg" alt="" class="img-product" />
      </section>
  </div>
  <div>
      <section class="info-product">
          <h3 class="price-product">pric</h3>
          <h3 class="name-product">name</h3>
      </section>
  </div>
</div>

  `;

    body_contener.innerHTML += t;
  }

  //add product
  btn_add_product.addEventListener("click", () => {
    product_list_add.style.display = "block";
  });
  btn_close_list_product.addEventListener("click", () => {
    product_list_add.style.display = "none";
  });

  supmet.addEventListener("click", () => {
    setTimeout(() => {
      product_list_add.style.display = "none";
    }, 600);
  });

  upload_file.addEventListener("change", () => {
    let file_uploaded = new FileReader();
    file_uploaded.readAsDataURL(upload_file.files[0]);
    file_uploaded.onload = () => {
      img_uploaded.src = file_uploaded.result;
      lable_upload.style.display = "none";
    };
  });

  //save data

  return (
    <>
      {/*start header*/}
      <header className="head">
        <section className="contener-info-profile" dir="auto">
          <h3>الاسم</h3>
          <h3>location</h3>
          <h3>serves</h3>
          <h3>taqeem</h3>
          <button className="add_product">إضافة سلعة</button>
        </section>
        <section className="contener-img-profile">
          <img src="../images/3.jpg" alt="" className="profile" />
        </section>
      </header>
      {/*end header*/}
      {/*start body*/}
      <div className="contener_product">
        <div className="my_product">
          <div className="show-product">
            <section className="img">
              <img src="../images/1.jpg" alt="" className="img-product" />
            </section>
          </div>
          <div>
            <section className="info-product">
              <h3 className="price-product">pric</h3>
              <h3 className="name-product">name</h3>
            </section>
          </div>
        </div>
      </div>
      <div className="form_list">
        <div className="shower_product">
          <div className="img_product_added">
            <img className="img_added" src="" alt="" />
            <label htmlFor="file" className="lable_upload">
              رفع صورة
            </label>
          </div>
          <form method="post" action="" className="form_input">
            <input
              type="text"
              name=""
              max={250}
              id=""
              required=""
              placeholder="وصف المنتج"
              className="add_discription"
            />
            <input
              type="text"
              name=""
              max={20}
              id=""
              required=""
              placeholder="اسم المنتج"
              className="add_name"
            />
            <input
              type="number"
              name=""
              max={8}
              id=""
              required=""
              placeholder="سعر المنتج"
              className="add_price"
            />
            <input
              type="text"
              name=""
              id=""
              max={10}
              required=""
              placeholder="الأحجام المتوفرة"
              className="add_siz"
            />
            <input
              type="text"
              name=""
              max={10}
              id="color"
              required=""
              placeholder="الالوان المتوفرة"
              className="add_color"
            />
            <input
              id="file"
              type="file"
              multiple=""
              className="upload_file"
              accept="image/*"
              required=""
            />
          </form>
          <input
            type="button"
            className="close_product_list"
            defaultValue="إلغاء"
          />
          <input type="button" className="add_it" defaultValue="إضافة" />
        </div>
      </div>
      {/*end body*/}
      {/*start footer*/}
      <div className="footer-contener">
        <div className="foot-grid">
          <a href="bages.html">
            <img src="../images/1.jpg" alt="" />
          </a>
          <a href="trind.html">
            <img src="../images/2.jpg" alt="" />
          </a>
          <a href="proshow.html">
            <img src="../images/3.jpg" alt="" />
          </a>
          <a href="profile.html">
            <img src="../images/2.jpg" alt="" />
          </a>
        </div>
      </div>
      {/*end footer*/}
    </>
  );
};

export default Proshow;
