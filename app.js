import React from "react";
import ReactDom from "react-dom/client";
import img1 from './public/images/image-product-desktop.jpg';
import img2 from './public/images/image-product-mobile.jpg';


const Image = () => {
    return <div className="product_image">
      <picture>
      <source srcSet={img1} media="(min-width: 600px)"/>
      <img src={img2} alt=""/>
      </picture>
    </div>
};

const ProductContent = () => {
    return <div className="product_content">
      <p className="product_category">Perfume</p>
      <h1 className="product_title">Gabrielle Essence Eau De Parfum</h1>
      <p className="product_details">A floral, solar and voluptuous interpretation composed by Olivier Polge,Perfumer-Creator for the House of CHANEL.</p>

      <div className="price_details">
        <p className="sell_price">$149.99</p>
        <p className="original_price"><s>$169.99</s></p>
      </div>

      <button className="button" icon="cart">Add to Cart</button>
    </div>
}


const ProductLayout = () => {
    return <div className="product">
    <Image/>
    <ProductContent/>
     
    </div>
};

const root = ReactDom.createRoot(document.getElementById("root"));


root.render(<ProductLayout/>);