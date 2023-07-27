import { Wrapper } from "./styled";
import { Section } from "../../../common/Section";
import { Title } from "../../../common/Title";
import { Article } from "../../../common/Article";
import PriceBox from "./PriceBox";
import { prices } from "./prices";

const Price = ({ title }) => (
    <Section id="cennik">
        <Title>
            {title}
        </Title>
        <Article>
            Cena za świadectwo energetyczne zależy od rodzaju nieruchomości i jej specyfiki.
            Wycena oraz czas wykonania jest indywidualny dla każdego klienta.
            Na ostateczną cenę mają wpływ czynniki takie, jak: <br />
            <strong> powierzchnia nieruchomości, sposób ogrzewania czy odległość od naszego biura, gdy występuje konieczność dokonania pomiarów. </strong>
        </Article>
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