import { ProductCustomizationDecorator } from "./product/product-customization-decorator";
import { ProductDecorator } from "./product/product-decorator";
import { ProductStampDecorator } from "./product/product-stamp-decorator";
import { TShirt } from "./product/t-shirt";

const tShirt = new TShirt();
const decoratedTShirt = new ProductDecorator(tShirt);
const tShirtWithStamp = new ProductStampDecorator(tShirt);
const tShirtWithStampFrontAndBack = new ProductStampDecorator(tShirtWithStamp);
const customizeTShirt = new ProductCustomizationDecorator(tShirt);

console.log(
  tShirtWithStampFrontAndBack.getPrice(),
  tShirtWithStampFrontAndBack.getName(),
);
console.log(customizeTShirt.getName(), customizeTShirt.getPrice());
console.log(decoratedTShirt.getName());
console.log(tShirtWithStamp.getPrice(), tShirtWithStamp.getName());
console.log(tShirt.getPrice(), tShirt.getName());
