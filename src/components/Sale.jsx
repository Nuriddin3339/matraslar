import { useFetch } from '../hooks/useFetch';
import './Sale.css';
import matras from '../assets/images/image20.png';

const Sale = () => {
  const url = 'http://localhost:1212/api/products';
  const { data, isPending, error } = useFetch(url);

  return (
    <div>
      <h1 className='product-sale'>Aksiyadagi mahsulotlar</h1>
      {isPending && <div>Loading...</div>}
      {error && <div>{error}</div>}

      {data &&
        data?.products?.map((product) => (
            product.new_cost &&
         ( <div id='aksiya' className='bg-sale' key={product}>
            <button className='sale-btn'>Aksiya</button>
            <img className='sale-img' src={matras} alt='' />
            <h3 className='sale-name'>{product.name}</h3>
            <div className='sale-flex'>
              <span className='sale-warranty'>
                Kafolat<h3 className='sale_warranty '>{product.warranty}</h3>
              </span>
              <span className='sale-size'>
                O'lchami<h3 className='sale_size'>{product.size}</h3>
              </span>
              <span className='sale-capacity'>
                Sig'imi
                <h3 className='sale_capacity'>{product.capacity} kishilik</h3>
              </span>
            </div>
            <p className='sale-body'>{product.body}</p>
            <p className='cost-title'>Narxi</p>
            <div className='costs'>
              <span className='sale-cost'>
                <h3 className='sale_cost'>{product.cost}so'm</h3>
              </span>
              <span className='sale-new_cost'>
                <h3 className='sale_new_cost'>{product.new_cost}so'm</h3>
              </span>
            </div>
          </div>)
        ))}
    </div>
  );
};

export default Sale;
