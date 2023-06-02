import { Wrapper, Paragraph, Article } from "./styled";
import { Section, Title } from "../styled";
import PriceBox from "./PriceBox";
import { prices } from "./prices";

const Price = ({ title }) => (
    <Section id="price">
        <Title>
            {title}
        </Title>
        <Paragraph>
            Cena za świadectwo energetyczne zależy od rodzaju nieruchomości i jej specyfiki. <br />
            Wycena oraz czas wykonania jest indywidualny dla każdego klienta.
        </Paragraph>
        <Paragraph>
            Na ostateczną cenę mają wpływ czynniki takie, jak: <br />
            powierzchnia nieruchomości, sposób ogrzewania czy odległość od naszego biura, gdy występuje konieczność dokonania pomiarów.
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
        <Article>
            <strong>
                Zachęcamy do kontaktu telefonicznego aby porozmawiać o szczegółach współpracy!
            </strong>
        </Article>
    </Section>
);

export default Price;