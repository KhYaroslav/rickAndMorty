import { FC, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { fetchCharacter } from '../../Redux/actions/apiActions';

const PersonalCard: FC = () => {
  const navigate = useNavigate();
  const { id }  = useParams()

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCharacter(id))
  }, []);

  const character = useSelector((state: any) => state.character);

  const color = (status: string) => {
    if (status === 'Alive') {
      return 'green';
    }
    if (status === 'Dead') {
      return 'red';
    }
    return 'orange';
  };

  return (
    <div className="content-characters__id">
      <div className="character__id">
        <h2>{character.name}</h2>
        <img src={character.image} alt={character.image} />
        <div className="info-character__id">
        <h4 className='character__info'>{character.species}</h4>
        <h4 className='character__info'>{character.gender}</h4>
          <h4 className='character__info' style={{ background: color(character.status) }}>{character.status}</h4>
            <button className='character__button' type="submit" onClick={() => navigate('/')}>Вернуться назад</button>
      </div>
    </div>
  </div>
  )
}

export default PersonalCard;