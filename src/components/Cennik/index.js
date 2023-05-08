import { Kontener, Informacja, Paragraf, Sekcja, Rodzaje, Nieruchomości, Tytuł, Opis, Dom, Lokal, Mieszkanie } from "./styled";

const Cennik = () => (
    <Sekcja>
        <Kontener id="cennik">
            <Informacja>
                Ile to kosztuje?
            </Informacja>
            <Paragraf>
                Cena zależy od rodzaju nieruchomości i jej specyfiki
            </Paragraf>
            <Paragraf>
                Pamiętaj! Kara urzędowa za brak świadectwa to 5000 zł
            </Paragraf>
        </Kontener>
        <Rodzaje>
            <Nieruchomości>
                <Tytuł>Mieszkanie</Tytuł>
                <Mieszkanie />
                <Opis>
                    od 700 zł
                </Opis>
            </Nieruchomości>
            <Nieruchomości>
                <Tytuł>Dom</Tytuł>
                <Dom />
                <Opis>
                    od 800 zł
                </Opis>
            </Nieruchomości>
            <Nieruchomości>
                <Tytuł>Lokal</Tytuł>
                <Lokal />
                <Opis>
                    od 1000 zł
                </Opis>
            </Nieruchomości>
        </Rodzaje>
    </Sekcja>
);

export default Cennik;