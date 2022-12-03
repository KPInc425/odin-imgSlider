import './reset.css';
import './style.css';
import createImgSlider from './createImgSlider';
import img1 from './media/img1.jpg';
import img2 from './media/img2.jpg';
import img3 from './media/img3.jpg';
import img4 from './media/img4.jpg';
import img5 from './media/img5.jpg';
import img6 from './media/img6.jpg';
import img7 from './media/img7.jpg';

let imgArray = [
    img1,
    img2,
    img3,
    img4,
    img5,
    img6,
    img7,
]

createImgSlider(imgArray);

