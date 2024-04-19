import React from 'react'
import ReactDOM from 'react-dom/client'
import './style.scss'
interface Experience {
    year: number;
    description: string;
}

interface CVData {
    photo: string;
    name: string;
    lastName: string;
    position: string;
    experience: Experience[];
    education: string[]
}

const cvData: CVData = {
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
    lastName: "Kowalski",
    name: "Jan",
    photo: "https://placehold.co/400x400/orange/white?text=KP",
    position: "Front-dev"
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <main className={'cv-main'}>
        <header className='cv-header'>
            <h1>CV {cvData.name} {cvData.lastName}</h1>
        </header>
        <aside className='cv-personal'>
            <h2>Personal data</h2>
            <img className='cv-photo' src={cvData.photo} alt={`${cvData.name} ${cvData.lastName} profile photo`}/>
            <p>{ cvData.name } { cvData.lastName }</p>
            <small>{ cvData.position }</small>
        </aside>
        <section className='cv-details'>
            <h2>Experience</h2>
            <ul>
                {cvData.experience.map(exp => (
                    <li key={exp.year}>
                        <strong>{exp.year}</strong>  - {exp.description}
                    </li>
                ))}
            </ul>
            <h2>Education</h2>
            <ul>
                {cvData.education.map((edu, index) => <li key={index}>{edu}</li>)}
            </ul>
        </section>
    </main>
  </React.StrictMode>,
)
