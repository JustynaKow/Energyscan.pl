import { Kontener, Tytuł, Warunek, Podtytuł, Sprzedaż, Opis, Wynajem, Budowa, Dofinansowanie } from "./styled";

const Przesłanki = () => (
    <>
        <Tytuł id="przeslanki">
            Dlaczego i kiedy muszę mieć certyfikat?
        </Tytuł>
        <Kontener>
            <Warunek>
                <Sprzedaż />
                <Podtytuł>
                    Sprzedaż
                </Podtytuł>
                <Opis>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
                </Opis>
            </Warunek>
            <Warunek>
                <Wynajem />
                <Podtytuł>
                    Wynajem
                </Podtytuł>
                <Opis>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
                </Opis>
            </Warunek>
            <Warunek>
                <Budowa />
                <Podtytuł>
                    Zakończenie budowy
                </Podtytuł>
                <Opis>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
                </Opis>
            </Warunek>
            <Warunek>
                <Dofinansowanie />
                <Podtytuł>
                    Dofinansowanie
                </Podtytuł>
                <Opis>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
                </Opis>
            </Warunek>
        </Kontener>
    </>
);

export default Przesłanki;