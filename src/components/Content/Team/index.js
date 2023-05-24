import { Icon, Subtitle, Article, Object } from "./styled";
import check from "../../../images/check.svg";
import { Section, Title } from "../styled";

const Team = () => (
    <Section id="aboutUs">
        <Title>Co nas wyróżnia</Title>
        <Object>
            <Icon src={check} alt="zaznaczona ikona" />
            <Subtitle>Wszechstronna i wykształcona kadra</Subtitle>
        </Object>
        <Article>Nasz zespół składa się z wyjątkowych ekspertów oraz doświadczonych inżynierów, którzy
            pasjonują się dziedziną audytów energetycznych i świadectw charakterystyki energetycznej.
            Dzięki wiedzy i profesjonalizmowi możemy zapewnić najwyższą jakość usług oraz
            kompleksowe doradztwo w zakresie efektywności energetycznej. Nasz priorytet to
            zadowolenie naszych klientów i wspieranie ich w osiągnięciu optymalnej efektywności
            energetycznej dla ich nieruchomości
        </Article>
        <Object>
            <Icon src={check} alt="zaznaczona ikona" />
            <Subtitle>Certyfikowani i doświadczeni Audytorzy</Subtitle>
        </Object>
        <Article>Wszyscy nasi audytorzy posiadają wpis do rejestru osób uprawnionych do wykonywania
            świadectw charakterystyki energetycznej, prowadzonego przez Ministerstwo Rozwoju i
            Technologii (MRiT). Dzięki temu możesz mieć pewność, że nasz zespół posiada nie tylko
            odpowiednie kwalifikacje, ale także aktualną wiedzę na temat obowiązujących przepisów i
            standardów w zakresie efektywności energetycznej. Nasza firma podejmuje wszelkie
            działania, aby zapewnić profesjonalne i wiarygodne świadectwa charakterystyki
            energetycznej, spełniające najwyższe standardy jakości.
        </Article>
        <Object>
            <Icon src={check} alt="zaznaczona ikona" />
            <Subtitle>Ubezpieczenie OC - Twoje bezpieczeństwo</Subtitle>
        </Object>
        <Article>Wszyscy nasi audytorzy posiadają obowiązkowe ubezpieczenie OC zgodne z normami
            prawnymi. Dbamy o to, aby zapewnić naszym klientom pełne bezpieczeństwo i ochronę w
            przypadku ewentualnych szkód. Ponadto, przed każdą wysyłką dokładnie sprawdzamy
            jakość każdego stworzonego przez nas świadectwa. Nasza firma konsekwentnie dąży do
            zapewnienia najwyższej jakości usług audytu energetycznego i świadectw charakterystyki
            energetycznej, aby sprostać oczekiwaniom naszych klientów i zapewnić im pełne
            zadowolenie.
        </Article>
        <Object>
            <Icon src={check} alt="zaznaczona ikona" />
            <Subtitle>Gwarancja jakości</Subtitle>
        </Object>
        <Article>Gwarantujemy, że każde świadectwo charakterystyki energetycznej, które sporządzimy,
            będzie spełniać najwyższe standardy jakości. Nasz zespół audytorów i inżynierów zadba o
            każdy detal, aby zapewnić dokładne pomiary, rzetelne analizy i precyzyjne raporty.
        </Article>
        <Object>
            <Icon src={check} alt="zaznaczona ikona" />
            <Subtitle>Kompleksowe wsparcie</Subtitle>
        </Object>
        <Article>Wybierając EnergyScan, otrzymujesz nie tylko profesjonalne usługi audytów energetycznych
            i świadectw charakterystyki energetycznej, ale także pełne wsparcie i doradztwo na każdym
            etapie procesu. Naszym celem jest nie tylko dostarczenie Ci wymaganego dokumentu, ale
            również pomóc Ci zrozumieć wyniki i wskazać możliwości poprawy efektywności
            energetycznej Twojej nieruchomości.
        </Article>
    </Section>
);

export default Team;