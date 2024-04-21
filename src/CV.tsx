import {CVData} from "./types.ts";
import {Header} from "./Header.tsx";
import {Personal} from "./Personal.tsx";
import {Details} from "./Details.tsx";

export const CV = () => {

    const cvData: CVData = {
        details: {
            education: [
                "School nr 1",
                "School nr 2",
                "School nr 3",
                "School nr 4",
                "School nr 5",
            ],
            experience: [
                { year: 2020, description: "Work nr 1"},
                { year: 2023, description: "Work nr 2"},
                { year: 2026, description: "Work nr 3"},
                { year: 2028, description: "Work nr 4"},
            ],
        },
        personal: {
            lastName: "Kowalski",
            name: "Jan",
            photo: "https://placehold.co/400x400/orange/white?text=KP",
            position: "Front-dev"
        }

    }

    return (
        <main className={'cv-main'}>
            <Header personal={cvData.personal} />
            <Personal personal={cvData.personal} />
            <Details details={cvData.details}/>
        </main>
    )
}