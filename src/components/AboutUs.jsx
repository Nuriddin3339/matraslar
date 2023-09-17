import './AboutUs.css'
import dhl from '../assets/images/cardhl.png'
import rasm from '../assets/images/img.png'
import raasm from '../assets/images/iimg.png'



const AboutUs = () => {
  return (
    <div>
        <h1 className='about'>Nega bizni tanlashadi</h1>

        <div className='about-all'>
            <div className='cardA' >
                <img src={dhl} alt="" />
                <h3>Yetkazib berish</h3>
                <p>Toshkent bo'ylab bepul o'lchov <br /> va etkazib berish</p>
            </div>
            <div className='cardA'>
                <img src={rasm} alt="" />
                <h3>Qo'llab - quvvatlash</h3>
                <p>Bizning qo'llab-quvvatlash xizmati sizga har qanday savolda yordam beradi va menejerlarning </p>
                <p>+998 97 144-24-42</p>
            </div>
            <div className='cardA'>
                <img src={raasm} alt="" />
                <h3>Kafolat</h3>
                <p>Biz matraslarimiz uchun 8 yilgacha kafolat beramiz. Agar matras kamida 25 mm qisqartirilsa.</p>
            </div>
        </div>
    </div>
  )
}

export default AboutUs