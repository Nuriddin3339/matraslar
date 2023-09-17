import { useFetch } from '../hooks/useFetch';
import { NavLink, Outlet } from 'react-router-dom';
import './Category.css';

const Categoryy = () => {
  const url = 'http://localhost:1212/api/products';
  const { data, isPending, error } = useFetch(url);
  console.log(data);


  return (
    <div>
      <h1 className='category'>Bizning mahsulotlar</h1>
      {isPending && <div>Loading...</div>}
      {error && <div>{error}</div>}
      <div className='aaa'>
        <NavLink className='category-title' to = 'barchasi'>Barchasi</NavLink>
        {data &&
          data?.categories?.map((item) => {
            return (
              <div className='aaa' key={item.id}>
                <div>
                  <NavLink to={item?.category.split(' ').join('')} className='category-title'>{item.category}</NavLink>
                </div>
              </div>
            );
          })}
      </div>
      <div className="products">
        <Outlet />
      </div>
    </div>
  );
};

export default Categoryy;
