import { Wrapper, Element, Subtitle, Paragraf, Image, Article, Photo, Container } from "./styled";
import { Title, Section } from "../styled";
import foto from "../../../images/foto.svg";
import mandate from "../../../images/mandate.svg";
import sell from "../../../images/sell.svg";
import sale from "../../../images/building.svg";
import certyfikate from "../../../images/certyfikate.svg";

const Reasons = () => (
    <Section id="reasons">
        <Title> Dlaczego potrzebujesz świadectwa charakterystyki energetycznej? </Title>
        <Article>Świadectwo charakterystyki energetycznej jest dokumentem, który informuje o efektywności energetycznej danego budynku. Wymóg posiadania certyfikatu dotyczy wszystkich budynków, niezależnie od roku budowy. Obowiązek zależy natomiast od podejmowanych działań.</Article>
        <Container>
            <Wrapper>
                <Element>
                    <Image src={mandate} alt="mandat" />
                    <Subtitle> Konsekwencje braku świadectwa </Subtitle>
                </Element>
                <Paragraf>
                    W przypadku braku świadectwa charakterystyki energetycznej podczas wynajmu lub
                    sprzedaży nieruchomości istnieje ryzyko otrzymania grzywny o wysokości nawet do 5 tysięcy
                    złotych. Ważne jest również, że notariusz jest zobowiązany do umieszczenia pouczenia o tej
                    sankcji w każdym akcie notarialnym, jeżeli świadectwo nie zostanie dostarczone.
                </Paragraf>
                <Element>
                    <Image src={sale} alt="sprzedaż domu, miekszania" />
                    <Subtitle> Wynajem i sprzedaż </Subtitle>
                </Element>
                <Paragraf>
                    Od 28 kwietnia 2023 roku, zgodnie z nowelizacją ustawy z dnia 29 sierpnia 2014 r. o
                    charakterystyce energetycznej budynków, świadectwo charakterystyki energetycznej
                    jest obowiązkowe przy każdej transakcji sprzedaży i wynajmu nieruchomości
                </Paragraf>
                <Element>
                    <Image src={sell} alt="budowa domu" />
                    <Subtitle> Zakończenie budowy </Subtitle>
                </Element>
                <Paragraf>
                    Warto wiedzieć, że wraz ze zmianą przepisów wprowadzono obowiązek dołączania
                    kopii świadectwa charakterystyki energetycznej do zawiadomienia o zakończeniu
                    budowy lub wniosku o pozwolenie na użytkowanie. Świadectwo energetyczne może
                    zostać załączone w formie papierowej lub elektronicznej. Należy pamiętać, że bez
                    tego dokumentu formalne zakończenie budowy nie będzie możliwe
                </Paragraf>
                <Element>
                    <Image src={foto} alt="dofinansowanie, dopłaty" />
                    <Subtitle> Dofinansowanie </Subtitle>
                </Element>
                <Paragraf>
                    Świadectwo charakterystyki energetycznej jest również wymagane w wielu
                    programach, dotacjach i dofinansowaniach, takich jak np. program &quot;Moje ciepło&quot;.
                    Posiadając aktualne świadectwo charakterystyki energetycznej, możesz uzyskać
                    dodatkowe środki finansowe na remont lub zwrot nakładów związanych z poprawą
                    efektywności energetycznej Twojej nieruchomości
                </Paragraf>
            </Wrapper>
            <Photo src={certyfikate} alt="Certyfikat energetyczny" />
        </Container>
    </Section>
);

export default Reasons;