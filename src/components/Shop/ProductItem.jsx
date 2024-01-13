import { ProductStyledItem } from "./Shop.styled";

const ProductItem = () => {
  return (
    <ProductStyledItem>
      <div className="imageThumb">
        <img src={require("../../img/2.png")} alt="product" />
      </div>
      <div>
        <p className="productName">Chocolate Macaron</p>
        <p className="productPrice">$5.50</p>
      </div>
    </ProductStyledItem>
  );
};

export default ProductItem;
