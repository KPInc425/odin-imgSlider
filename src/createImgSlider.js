const createImgSlider = (imgArray) => {
    // Get ref for content element
    const contentContainer = document.querySelector('.content');

    // Create outer container
    const imgSliderContainer = document.createElement('div');
    imgSliderContainer.classList.add("imgSliderContainer");

    // Create main Img container
    const imgContainer = document.createElement('div');
    imgContainer.classList.add('imgContainer');

    // // Create imgLeft Container
    // const imgLeftContainer = document.createElement('div');
    // imgLeftContainer.classList.add('imgLeftContainer');

    // Create container to hold "Visible" img
    const visibleImgContainer = document.createElement('div');
    visibleImgContainer.classList.add('visibleImgContainer');

    // // Create imgRight Container 
    // const imgRightContainer = document.createElement('div');
    // imgRightContainer.classList.add('imgRightContainer');

    // Create left Button container
    const btnLeftContainer = document.createElement('div');
    btnLeftContainer.classList.add('btnLeftContainer');
    // Create Left button
    const btnLeft = document.createElement('button');
    btnLeft.id = 'btnLeft';
    btnLeft.textContent = '<';

    // Create right Button container
    const btnRightContainer = document.createElement('div');
    btnRightContainer.classList.add('btnRightContainer');
    // Create Right Button
    const btnRight = document.createElement('button');
    btnRight.id = 'btnRight';
    btnRight.textContent = '>';

    // Create container to hold img position circles
    const imgOrderContainer = document.createElement('div');
    imgOrderContainer.classList.add('imgOrderContainer');

    const addImages = () => {
        const length = 8;

        for (let i = 0; i < length; i ++) {
            let tmpImgElementContainer = document.createElement('div');
            tmpImgElementContainer.classList.add('innerImgContainer');

            let tmpImgElement = document.createElement('img');

            tmpImgElementContainer.appendChild(tmpImgElement);
            imgContainer.appendChild(tmpImgElementContainer);
        }
        console.log(length);
    }

    addImages();

    imgContainer.appendChild(btnLeftContainer);
    btnLeftContainer.appendChild(btnLeft);
    imgContainer.appendChild(btnRightContainer);
    btnRightContainer.appendChild(btnRight);
    // imgContainer.appendChild(imgLeftContainer);
    imgContainer.appendChild(visibleImgContainer);
    // imgContainer.appendChild(imgRightContainer);

    imgSliderContainer.appendChild(imgContainer);
    imgSliderContainer.appendChild(imgOrderContainer);

    contentContainer.appendChild(imgSliderContainer);
}

export default createImgSlider;