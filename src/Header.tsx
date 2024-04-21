import {CVPersonal} from "./types.ts";

type Props = {
    personal: CVPersonal;
}
export const Header = ({personal}: Props) => {
    return (
        <header className='cv-header'>
            <h1>CV {personal.name} {personal.lastName}</h1>
        </header>
    )
}