import { Element, Subtitle, Cost, Image } from "./styled";

const PriceBox = ({ subtitle, imgSrc, price }) => (
    <Element>
        <Subtitle>{subtitle}</Subtitle>
        <Image src={imgSrc} alt={subtitle} />
        <Cost>od {price} zł</Cost>
    </Element>
);

export default PriceBox;