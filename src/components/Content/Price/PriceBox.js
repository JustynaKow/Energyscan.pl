import { Element, Subtitle, Cost, Container, Image } from "./styled";

const PriceBox = ({ subtitle, imgSrc, price }) => (
    <Element>
        <Container>
            <Subtitle>{subtitle}</Subtitle>
            <Image src={imgSrc} alt={subtitle} />
            <Cost>od {price} zł</Cost>
        </Container>
    </Element>
);

export default PriceBox;