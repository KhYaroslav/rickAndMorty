import { useState, useEffect, FC, ChangeEvent } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getApiPosts } from '../../Redux/actions/apiActions';
import Card from '../Card';

const filterType  = [
  { all: 'показать все' },
  { name: 'по имени' },
  { status: 'по статусу' },
  { species: 'по виду' },
  { gender: 'по полу' },
];

const CardParental: FC = ()  => {
  const [input, setInput] = useState({});
  const [filter, setFilter] = useState('all');

  const api = useSelector((state: any) => state.api);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getApiPosts({ [filter]: input?.input }));
  }, [filter, input]);

  const changeInputHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setInput((prev) => ({ ...prev, [event.target.name]: event.target.value }));
  };

  const changeSelectHandler = (event: ChangeEvent<HTMLSelectElement>) => {
    setFilter(event.target.value);
  };

  return (
    <div>
      <img className="logo" src="assets/intro.gif" alt="" />
      <h1>Персонажи</h1>
      {filter !== 'all' && (
      <input
        readOnly={filter.length === 0}
        type="text"
        name="input"
        placeholder="Поиск..."
        onChange={changeInputHandler}
        value={input.input || ''}
      />
      )}
      <select
        onChange={changeSelectHandler}
        value={filter}
        name="select"
      >``
        {filterType.map((el, i) => (
          <option
            key={i}
            value={Object.keys(el)}
          >
            {Object.values(el)}
          </option>
        ))}
      </select>
      <div className="content">
        {api && api.map((el: any) => (
          <Card
            key={el.id}
            {...el}
          />
        ))}
      </div>
    </div>
  );
}

export default CardParental;
