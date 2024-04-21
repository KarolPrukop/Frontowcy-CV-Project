import {CVPersonal} from "./types.ts";

type Props = {
    personal: CVPersonal
}
//  poniżej destruktaryzacja w destruktaryzacji xD
export const Personal = ({personal: {photo, name, lastName, position}}: Props) =>{
    return (
        <aside className='cv-personal'>
            <h2>Personal data</h2>
            <img className='cv-photo' src={photo} alt={`${name} ${lastName} profile photo`}/>
            <p>{name} {lastName}</p>
            <small>{position}</small>
        </aside>
    )
}