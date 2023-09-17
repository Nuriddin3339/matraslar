import './Company.css'
import cloudImg from '../assets/images/img2.png'

const Company = () => {
  return (
    <div>
        <div id='cloud' className='cloud-all'>
            <div>
            <h2 className='cloud'>Dream Cloud <br /> kompaniyasi haqida</h2>
            <p className='cloud-p'>Penatibus viverra gravida rhoncus in. At turpis morbi ante tortor a est. Habitant <br /> adipiscing ut sed pulvinar tellus, ut urna, fermentum:</p>
                <ul className='cloud-ul'>
                    <li>Penatibus viverra gravida rhoncus in.</li>
                    <li>Dolor integer in interdum viverra risus dolor enim.</li>
                    <li>Turpis senectus eu, eget aenean nulla pellentesque sed ut tempor.</li>
                </ul>
            </div>
           
            <div>
            <iframe className='cloud-vd' width="560" height="315" src="https://www.youtube.com/embed/tbihBsEkFzg?si=rAf7CKNJk-0ikMn9" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            </div>
        </div>

        <div className='img-all'>
            <div>
                 <img className='cloud_img' src={cloudImg} alt="img" />
            </div>
            <div>
                <p className='img-p'>Libero erat praesent ullamcorper eget tortor sed et. Nec id lobortis gravida vitae. Scelerisque id fusce vitae ut. Integer sed vulputate sed nec. Arcu id mattis erat et id. </p>

                <ol>
                    <li>
                         Id risus phasellus laoreet eget. A nec pulvinar.
                    </li>
                    <li>
                         Eu justo, tincidunt fringilla diam nulla.
                    </li>
                    <li>
                    Amet, nullam cras lacus, fermentum leo tellus sagittis.
                    </li>
                    <li>
                    Facilisi mauris condimentum sagittis odio rhoncus semper.
                    </li>
                </ol>
                <p className='img-title'>Ac tortor volutpat pellentesque mauris nisi, praesent. Et tempus accumsan est elementum feugiat arcu mauris tincidunt. Eget faucibus pharetra et luctus eget ut fames. A cursus elementum egestas eu scelerisque id.</p>
            </div>
        </div>
    </div>
  )
}

export default Company