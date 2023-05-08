import { Kontener, Informacja, Paragraf, Sekcja, Rodzaje, Nieruchomości, Tytuł, Opis, IkonaDomu } from "./styled";

const Cennik = () => (
    <Sekcja>
        <Kontener>
            <Informacja>
                Ile to kosztuje?
            </Informacja>
            <Paragraf>
                Cena zależy od rodzaju nieruchomości i jej specyfiki <br />
                Pamiętaj! Kara urzędowa za brak świadectwa to 5000 zł
            </Paragraf>
        </Kontener>
        <Rodzaje>
            <Nieruchomości>
                <Tytuł>Mieszkanie</Tytuł>
                <Opis>
                    od 700 zł
                </Opis>
            </Nieruchomości>
            <Nieruchomości>
                <Tytuł>Dom</Tytuł>
                <IkonaDomu />
                <Opis>
                    od 800 zł 
                </Opis>
            </Nieruchomości>
            <Nieruchomości>
                <Tytuł>Lokal</Tytuł>
                <Opis>
                    od 1000 zł 
                </Opis>
            </Nieruchomości>
        </Rodzaje>
    </Sekcja>
);

export default Cennik;