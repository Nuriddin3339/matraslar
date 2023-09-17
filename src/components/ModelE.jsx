import { useFetch } from '../hooks/useFetch';
import matras from '../assets/images/image20.png';

const ModelE = () => {
  const url = 'http://localhost:1212/api/products';
  const { data, isPending, error } = useFetch(url);
  const product = data && data.products;

  return (
    <div id="kategoriya">
      {isPending && <div>Loading...</div>}
      {error && <div>{error}</div>}

      {product &&
        product
          .filter((product) => {
            return product.category === 'Model E';
          })
          .map((product) => (
            <div id='katalog' className='bg-product' key={product.id}>
              <p className='product-title'>YANGI MAHSULOT</p>
              <h3 className='product-name'>{product.name}</h3>
              <div className='fff'>
                <img className='product-img' src={matras} alt='' />

                <span className='product-warranty'>
                  {' '}
                  Kafolat{' '}
                  <h3 className='product_warranty'>{product.warranty} yil</h3>
                </span>
                <span className='product-size'>
                  O'lachami <h3 className='product_size'>{product.size}</h3>
                </span>
                <span className='product-capacity'>
                  Sig'imi{' '}
                  <h3 className='product_capacity'>
                    {product.capacity} kishilik
                  </h3>
                </span>
              </div>
              <p className='product-body'>{product.body}</p>
              <span className='cost'>
                Narxi{' '}
                <h3 className='product-cost'>
                  {product.cost} <span className='som'>so'm</span>
                </h3>
              </span>
              {/* <span>Narxi <h3>{product.new_cost}</h3></span> */}
            </div>
          ))}
    </div>
  );
};

export default ModelE;
