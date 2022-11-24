import { FC } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { deleteApiPost } from '../../Redux/actions/apiActions';
import { СardItemProps } from '../../Redux/types';

const Card: FC<СardItemProps> = ({ id, image, name, species, status, gender }) => {
  const dispatch = useDispatch();

  const deleteHandler = () => {
    dispatch(deleteApiPost(id));
  };

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
    <div className="content-characters">
      <div className="character">
        <Link to={`${id}`}>
          <img src={image} alt={image} />
        </Link>
        <div className="info-character">
          <h2>{name}</h2>
          <h4>{species}</h4>
          <h4>{gender}</h4>
          <h4 style={{ background: color(status) }}>{status}</h4>
          <button type="submit" onClick={deleteHandler}>Удалить</button>
        </div>
      </div>
    </div>
  );
}

export default Card;
