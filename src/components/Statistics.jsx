import { useFetch } from '../hooks/useFetch';
import './Statistics.css';

const Statistics = () => {
  const url = 'http://localhost:1212/api/statistics';
  // console.log(url);
  const { data, isPending, error } = useFetch(url);
  // console.log(data);
  return (
    <div>
      {isPending && <div>Loading...</div>}
      {error && <div>{error}</div>}

      {data && (
        <div className='statistics'>
          <div>
            <h2 className='statistics-title'>{data.experience}</h2>
            <p className='statistics-subtitle'>Tajriba</p>
          </div>
          <div>
            <h2 className='statistics-title'>{data.clients}</h2>
            <p className='statistics-subtitle'>mamnun mijozlar</p>
          </div>
          <div>
            <h2 className='statistics-title'>{data.warranty}</h2>
            <p className='statistics-subtitle'>yillik kafolat</p>
          </div>
          <div>
            <h2 className='statistics-title'>{data.delivery}</h2>
            <p className='statistics-subtitle'>kunda yetkazish</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Statistics;
