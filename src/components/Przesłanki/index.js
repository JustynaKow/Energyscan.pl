import { Section, Wrapper, Title, Element, Subtitle, Paragraf, Image } from "./styled";
import foto from "../../images/foto.svg";
import rent from "../../images/rent.svg";
import sell from "../../images/house.svg";
import sale from "../../images/sell.svg";

const Przesłanki = () => (
    <Section id="przeslanki">
        <Title> Dlaczego i kiedy muszę mieć certyfikat? </Title>
        <Wrapper>
            <Element>
                <Image src={sale} alt="sprzedaż domu, miekszania" />
                <Subtitle> Sprzedaż </Subtitle>
                <Paragraf>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
                </Paragraf>
            </Element>
            <Element>
                <Image src={rent} alt="wynajem domu, mieszkania" />
                <Subtitle> Wynajem </Subtitle>
                <Paragraf>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
                </Paragraf>
            </Element>
            <Element>
                <Image src={sell} alt="budowa domu" />
                <Subtitle> Zakończenie budowy </Subtitle>
                <Paragraf>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
                </Paragraf>
            </Element>
            <Element>
                <Image src={foto} alt="dofinansowanie, dopłaty" />
                <Subtitle> Dofinansowanie </Subtitle>
                <Paragraf>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
                </Paragraf>
            </Element>
        </Wrapper>
    </Section>
);

export default Przesłanki;