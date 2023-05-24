import { Wrapper, Paragraph } from "./styled";
import { Section, Title } from "../styled";
import PriceBox from "./PriceBox";
import { prices } from "./prices";

const Price = () => (
    <Section id="price">
        <Title>
            Ile to kosztuje?
        </Title>
        <Paragraph>
            Cena za świadectwo energetyczne zależy od rodzaju nieruchomości i jej specyfiki <br />
            <strong>Pamiętaj! Kara urzędowa za brak świadectwa to 5000 zł</strong>
        </Paragraph>
        <Wrapper>
            {prices.map(({ subtitle, imgSrc, price }) => (
                <PriceBox
                    key={subtitle}
                    subtitle={subtitle}
                    imgSrc={imgSrc}
                    price={price}
                />
            ))}
        </Wrapper>
    </Section>
);

export default Price;