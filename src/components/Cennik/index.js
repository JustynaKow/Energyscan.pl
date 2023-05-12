import { Section, Wrapper, Element, Title, Subtitle, Price, Image } from "./styled";
import dom from "../../images/dom.svg";
import blok from "../../images/blok.svg";
import lokal from "../../images/lokal.svg";

const Cennik = () => (
    <Section id="cennik">
        <Title> Ile to kosztuje? </Title>
        <p> Cena za świadectwo energetyczne zależy od rodzaju nieruchomości i jej specyfiki </p>
        <p> Pamiętaj! Kara urzędowa za brak świadectwa to 5000 zł </p>
        <Wrapper>
            <Element>
                <Subtitle>Mieszkanie</Subtitle>
                <Image src={blok} alt="mieszkanie" />
                <Price>od 700 zł</Price>
            </Element>
            <Element>
                <Subtitle>Dom</Subtitle>
                <Image src={dom} alt="dom" />
                <Price>od 800 zł</Price>
            </Element>
            <Element>
                <Subtitle>Lokal</Subtitle>
                <Image src={lokal} alt="lokal użytkowy" />
                <Price>od 1000 zł</Price>
            </Element>
        </Wrapper>
    </Section>
);

export default Cennik;