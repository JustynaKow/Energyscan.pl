import { Container } from "./styled";
import { Title, Section, Article } from "../styled";
import { reasons } from "./reasons";
import ReasonsBox from "./ReasonsBox";

const Reasons = ({ title }) => (
    <Section id="reasons">
        <Title> {title} </Title>
        <Article>
            Świadectwo charakterystyki energetycznej jest dokumentem, który informuje o efektywności energetycznej danego budynku Obowiązek zależy od podejmowanych działań.
        </Article>
        <Container>
                {reasons.map(({ photo, title, article }) => (
                    <ReasonsBox
                        key={title}
                        photo={photo}
                        title={title}
                        article={article}
                    />
                ))}
        </Container>
    </Section >
);

export default Reasons;