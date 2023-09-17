import './Footer.css'
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
import InstagramIcon from '@mui/icons-material/Instagram';
import vizitka from  '../assets/icons/vizitka.svg'
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';


const Footer = () => {
  return (
    <div>
    <div className='footer-all'>
        <div className='footer-a'>
            <a href="#cloud">Biz haqimizda</a>
            <a href="#katalog">Katalog</a>
            <a href="#aksiya">Aksiya</a>
            <a href="#address">Manzilimiz</a>
        </div>
        <div className='footer-icon'>
                <a href='Facebook.com'>
                <FacebookIcon/> 
                </a>
                <a href='Twitter.com'>
                <TwitterIcon />
                </a>
                <a href="Youtube.com">
                <YouTubeIcon />
                </a>
                <a href="Instagram.com">
                <InstagramIcon />
                </a>
                
                <hr/>
        </div>
    </div>
    <div className='vizitka'>
        <div className='footer-p'>
            <p>© 2021 Dream Cloud. Barcha huquqlar himoyalangan.</p>
        </div>
        <div>
            <a href='#header' className='arrowSpan'>
            <ArrowUpwardIcon />
            </a>
            <img className='vizitka-img' src={vizitka} alt="" />
        </div>
    </div>
    </div>
  )
}

export default Footer