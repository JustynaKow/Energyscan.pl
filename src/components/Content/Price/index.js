import { Section, Wrapper, Element, Title, Subtitle, Cost, Image, Paragraph } from "./styled";
import dom from "../../../images/dom.svg";
import blok from "../../../images/blok.svg";
import lokal from "../../../images/lokal.svg";

const Price = () => (
    <Section id="price">
        <Title> Ile to kosztuje? </Title>
        <Paragraph> Cena za świadectwo energetyczne zależy od rodzaju nieruchomości i jej specyfiki <br />
            Pamiętaj! Kara urzędowa za brak świadectwa to 5000 zł </Paragraph>
        <Wrapper>
            <Element>
                <Subtitle>Mieszkanie</Subtitle>
                <Image src={blok} alt="mieszkanie" />
                <Cost>od 700 zł</Cost>
            </Element>
            <Element>
                <Subtitle>Dom</Subtitle>
                <Image src={dom} alt="dom" />
                <Cost>od 800 zł</Cost>
            </Element>
            <Element>
                <Subtitle>Lokal</Subtitle>
                <Image src={lokal} alt="lokal użytkowy" />
                <Cost>od 1000 zł</Cost>
            </Element>
        </Wrapper>
    </Section>
);

export default Price;