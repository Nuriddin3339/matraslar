import './Corusel.css';
import { useFetch } from '../hooks/useFetch';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import img from '../assets/images/img1.png';
import arrow from '../assets/icons/Arrow3.svg';

const Corusel = () => {
  const url = 'http://localhost:1212/api/carousel';
  const { data, isPending, error } = useFetch(url);

  const customStyles = {
    maxWidth: '600px',
    margin: '0 auto',
    border: '2px solid #bbb',
  };

  return (
    <div className='all'>
      {isPending && <div>Loading...</div>}
      {error && <h3>{error}</h3>}

      <Carousel style={customStyles}>
        {data &&
          data.map((item, index) => {
            return (
              <div key={index}>
                <div className='title'>
                  <h3>{item.title}</h3>
                  <a href='#kategoriya' className='btn-arrow'>
                    <button className='btnn'>
                      Kategoriyalar{' '}
                      <span>
                        {' '}
                        <img className='arrow' src={arrow} alt='arrow' />
                      </span>
                    </button>
                  </a>
                </div>
                <div className='zzz'>
                  <img className='img1' src={img} alt='' />
                </div>
              </div>
            );
          })}
      </Carousel>
    </div>
  );
};

export default Corusel;
