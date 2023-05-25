import { Article, Photo, Container, Wrapper, Box } from "./styled";
import { Title, Section } from "../styled";
import certyfikate from "../../../images/certyfikate.svg";
import { reasons } from "./reasons";
import ReasonsBox from "./ReasonsBox";

const Reasons = () => (
    <Section id="reasons">
        <Title> Kiedy potrzebujesz świadectwa charakterystyki energetycznej? </Title>
        <Container>
            <div>
                <Article>
                    Świadectwo charakterystyki energetycznej jest dokumentem, który informuje o efektywności energetycznej danego budynku. Wymóg posiadania certyfikatu dotyczy wszystkich budynków, niezależnie od roku budowy. Obowiązek zależy natomiast od podejmowanych działań.
                </Article>
                <Photo src={certyfikate} alt="Certyfikat energetyczny" />
            </div>
            <Wrapper>
                {reasons.map(({ photo, title, article }) => (
                    <ReasonsBox
                        key={title}
                        photo={photo}
                        title={title}
                        article={article}
                    />
                ))}
            </Wrapper>
        </Container>
    </Section >
);

export default Reasons;