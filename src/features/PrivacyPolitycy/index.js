import { Title } from "../../common/Title";
import { Paragraph, Wrapper, StyledLink, Container } from "./styled";

const PrivacyPolitycy = () => (
  <Wrapper>
    <Container>
    <StyledLink to="/">⬅</StyledLink>
    </Container>
    <Title>
      Klauzula informacyjna RODO w zakresie przetwarzania danych osobowych
    </Title>
    <Paragraph>
      <ol>
        <li>
          Administratorem danych osobowych jest: Paweł Kowalewski, ul. Portowa
          2, 16-300 Augustów. tel: +48530196930, e-mail: biuro@energyscan.pl
        </li>
        <li>
          Administrator wyznaczył inspektora ochrony danych osobowych. Dane
          kontaktowe inspektora: Paweł Kowalewski, tel: +48530196930, e-mail:
          biuro@energyscan.pl
        </li>
        <li>
          Przekazane dane osobowe przetwarzane będą w celu realizacji usług,
          obsługi zgłoszeń i udzielania odpowiedzi na zgłoszenia;
        </li>
        <li>
          Kategorie danych osobowych obejmują m.in. imię i nazwisko, numer
          telefonu, adres email, adres, dane dedykowane do
          procesu/usługi/projektu;
        </li>
        <li>
          Pani / Pana dane osobowe nie będą przekazywane żadnym podmiotom
          przetwarzającym dane osobowe na zlecenie administratora.
        </li>
        <li>
          Państwa dane osobowe będą przechowywane przez okres istnienia prawnie
          uzasadnionego interesu administratora, chyba że Pani / Pan wyrazi
          sprzeciw wobec przetwarzania danych;
        </li>
        <li>
          Państwa dane nie będą przekazywane do państwa trzeciego ani
          organizacji międzynarodowej;
        </li>
        <li>
          Posiadają Państwo prawo dostępu do treści swoich danych oraz prawo ich
          sprostowania, usunięcia, ograniczenia przetwarzania, prawo do
          przenoszenia danych, prawo wniesienia sprzeciwu, prawo do cofnięcia
          zgody w dowolnym momencie bez wpływu na zgodność z prawem
          przetwarzania, którego dokonano na podstawie zgody przed jej
          cofnięciem;
        </li>
        <li>
          Mają Państwo prawo wniesienia skargi do organu nadzorczego zajmującego
          się ochroną danych osobowych, którym jest Prezes Urzędu Ochrony Danych
          Osobowych, gdy uznają Państwo, iż przetwarzanie Państwa danych
          osobowych narusza przepisy ustawy z dnia 10 maja 2018 r. o ochronie
          danych osobowych (tekst jednolity Dz. U. z 2018 r., poz. 1000) lub
          przepisy Rozporządzenia Parlamentu Europejskiego i Rady (UE) 2016/679
          z dnia 27 kwietnia 2016 r. w sprawie ochrony osób fizycznych w związku
          z przetwarzaniem danych osobowych i w sprawie swobodnego przepływu
          takich danych oraz uchylenia dyrektywy 95/46/WE (ogólne rozporządzenie
          o ochronie danych) z dnia 27 kwietnia 2016 r. (Dz.Urz.UE.L Nr 119,
          str. 1);
        </li>
        <li>
          Dane udostępnione przez Panią/Pana nie będą podlegały
          zautomatyzowanemu podejmowaniu decyzji oraz profilowaniu;
        </li>
        <li>Dane pochodzą od osób, których dane dotyczą;</li>
        <li>Podanie przez Państwa danych osobowych jest dobrowolne;</li>
      </ol>
    </Paragraph>
  </Wrapper>
);

export default PrivacyPolitycy;
