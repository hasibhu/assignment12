


// https://www.npmjs.com/package/react-responsive-carousel

import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import img1 from '../assets/3rdImage.jpeg'
import img2 from '../assets/4thImage.jpeg'
import img3 from '../assets/slidePic3.webp'
import img4 from '../assets/slidePic4.webp'
import img5 from '../assets/5thImage.jpeg'
// import img6 from '../../src/assets/home/06.png'

const HomepageCarousel = () => {
    return (
        <div className="mb-10" style={{ height: "590px" }}>
            <Carousel autoPlay
                interval={3000}
                infiniteLoop
                centerMode
                centerSlidePercentage={100}
                showThumbs={false}

            >
                <div>
                    <img src={img4} />
                    {/* <p className="legend">Legend 1</p> */}
                </div>
                <div>
                    <img src={img3} />
                    {/* <p className="legend">Legend 3</p> */}
                </div>
               
                <div>
                    <img className="h-[590px]"  src={img1} />
                    {/* <p className="legend">Legend 1</p> */}
                </div>
                <div>
                    <img className="h-[590px]" src={img2} />
                    {/* <p className="legend">Legend 2</p> */}
                </div>
                
               <div>
                    <img className="h-[590px]" src={img5} />
                    {/* <p className="legend">Legend 2</p> */}
                </div>
                {/* <div>
                    <img src={img6} />
                    <p className="legend">Legend 3</p>
                </div> */}
            </Carousel>
        </div>
    );
};

export default HomepageCarousel;