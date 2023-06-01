import { Section, Title } from "../styled";
import { advantages } from "./advantages";
import AdvantagesBox from "./AdvantagesBox";

const Team = ({ title }) => (
    <Section id="aboutUs">
        <Title>{title}</Title>
        {advantages.map(({ subtitle, article }) => (
            <AdvantagesBox
                key={subtitle}
                subtitle={subtitle}
                article={article}
            />
        ))}
    </Section>
);

export default Team;