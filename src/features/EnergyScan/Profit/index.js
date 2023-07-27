import { Section } from "../../../common/Section";
import { Title } from "../../../common/Title";
import { Article } from "../../../common/Article";
import { Wrapper, Container } from "./styled";
import { profit } from "./profit";

const Profit = ({ title }) => (
    <Section id="co-zyskujesz">
        <Title>{title}</Title>
        <Article>
            Świadectwo charakterystyki energetycznej informuje o efektywności energetycznej budynku lub lokalu mieszkalnego. Zawiera ono ważne informacje dotyczące zużycia energii i kosztów związanych z eksploatacją nieruchomości.
        </Article>
        <Wrapper>
            {profit.map(({ subtitle, article, key }) => (
                <Container key={key}>
                    <h3>
                        {key}.&nbsp;
                        {subtitle}
                    </h3>
                    <p>{article}</p>
                </Container>
            ))}
        </Wrapper>
        <Article>
            <strong> Świadectwo charakterystyki energetycznej ma na celu dostarczenie użytkownikom i nabywcom informacji na temat efektywności energetycznej danego obiektu, co pozwala podejmować świadome decyzje dotyczące oszczędzania energii, zmniejszania kosztów eksploatacji i wpływu na środowisko. </strong>
        </Article>
    </Section>
);

export default Profit;