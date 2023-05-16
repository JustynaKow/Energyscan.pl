import { Element, Subtitle, Price, Image } from './styled';

const PriceBox = ({ subtitle, imgSrc, price }) => (
  <Element>
    <Subtitle>{subtitle}</Subtitle>
    <Image src={imgSrc} alt="mieszkanie" />
    <Price>od {price} zł</Price>
  </Element>
);

export default PriceBox;
