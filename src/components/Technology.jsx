import { useFetch } from '../hooks/useFetch'
import './Technology.css'

const Technology = () => {

    const url = 'http://localhost:1212/api/technology'
    const {data,isPending,error}  = useFetch(url)
    console.log(data);
  return (
    <div className='qwerty'>
        <h3 className='technology-title'>Ishlab chiqarish texnologiyalari</h3>
<div   className='flex_wrap'>
    
{data && data.map((item)=>(
            <div className='technology-all' key={item.id}>
                <div>
                    <h1 className='technology-name'>{item.name}</h1>
                </div>
                <div className='all'>
                <div className='wrapp'>
                    <div >
                    <iframe  className='iframe'
                     src={item.link}
                     title='YouTube video player'
                     frameborder="0"
                     allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                     allowfullscreen
                     ></iframe>
                    </div>
                    <div>
                        <p>{item.description}</p>
                    </div>
                </div>
                </div>
            </div>
        ))}
</div>
    </div>
  )
}

export default Technology