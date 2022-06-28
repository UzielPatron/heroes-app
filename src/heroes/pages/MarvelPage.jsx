import { HeroList } from '../';

export const MarvelPage = () => {
    return (
        <>
            <h1>Marvel Comics</h1>

            <ul>
                <HeroList
                    publisher='Marvel Comics'
                />
            </ul>
        </>
    )
}
