import {CVDetails} from "./types.ts";

type Props = {
    details: CVDetails
}
export const Details = ({details}: Props) => {
    return (
        <section className='cv-details'>
            <h2>Experience</h2>
            <ul>
                {details.experience.map(exp => (
                    <li key={exp.year}>
                        <strong>{exp.year}</strong> - {exp.description}
                    </li>
                ))}
            </ul>
            <h2>Education</h2>
            <ul>
                {details.education.map((edu, index) => <li key={index}>{edu}</li>)}
            </ul>
        </section>
    )
}