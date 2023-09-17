import { useFetch } from '../../hooks/useFetch'
import './Location.css'
import address from '../../assets/icons/./Iconly/Bold/Location.svg'

const Address = () => {

    const url = '//localhost:1212/api/address'
    const {data,isPending,error} = useFetch(url)
    console.log(data);

  return (
    <div>
        <div id='address' className='address-all'>
            <h3 className='location-title'>Manzilimiz</h3>
            {isPending && <div>Loading...</div>}
            {isPending && <div>{error}</div>}

            {data && data.map((item)=>{
                return (
                    <div>
                        <h3 className='address-title'>{item.location}</h3>
                          <h3 className='address-destination'>{item.destination}</h3>
                          <div className='location-img'>
                            <img src={address} alt="" />
                            <a href={item.geolacation}>Geolokatsiya</a>
                          </div>

                          <div>
                            <img src={item.images} alt="img" />
                              {/* {JSON.parse(item.images)?.length > 0 && 
                JSON.parse(item.images)?.map((image)=>{
                  console.log(image);
                  return (
                    <img src={`//localhost:1212/address${image}`} alt="" />
                  )
                })
              } */}
                          </div>
                    </div>
                )
            })}
        </div>
    </div>
  )
}

export default Address