import { useMemo } from 'react';
import { Navigate, useNavigate, useParams } from 'react-router-dom';
import { getHeroById } from '../';

export const HeroPage = () => {

    const { id } = useParams();

    const hero = useMemo( () => getHeroById( id ), [ id ] );

    const navigate = useNavigate();

    const onNavigateBack = () => navigate( -1 );



    if( !hero ) {
        return <Navigate to='/marvel' />
    };

    const { superhero, alter_ego, publisher, first_appearance, characters, } = hero;



    return (
        <div className="row mt-5  animate__animated animate__fadeInLeft">
            <div className="col-4">
                <img
                    src={ `/assets/heroes/${ id }.jpg` }
                    alt={ superhero }
                    className="img-thumbnail"
                />
            </div>

            <div className="col-8">
                <h3>{ superhero }</h3>
                <ul className='list-group list-group-flush'>
                    <li className="list-group-item"> <b>Alter ego: </b>{ alter_ego } </li>
                    <li className="list-group-item"> <b>Publisher: </b>{ publisher } </li>
                    <li className="list-group-item"> <b>First appareance: </b>{ first_appearance } </li>
                </ul>

                <h5 className="mt-3">Characters: </h5>
                <p>{ characters }</p>

                <button
                    className="btn btn-outline-primary"
                    onClick={ onNavigateBack }
                >
                    Back
                </button>
            </div>

        </div>
    )
}
