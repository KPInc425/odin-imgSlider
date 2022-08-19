const createImgSlider = (imgArray) => {
    // Get ref for content element
    const contentContainer = document.querySelector('.content');

    // Create outer container
    const imgSliderContainer = document.createElement('div');
    imgSliderContainer.classList.add("imgSliderContainer");

    // Create main Img container
    const imgContainer = document.createElement('div');
    imgContainer.classList.add('imgContainer');

    // Create left Button container
    const btnLeftContainer = document.createElement('div');
    btnLeftContainer.classList.add('btnLeftContainer');

    // Create right Button container
    const btnRightContainer = document.createElement('div');
    btnRightContainer.classList.add('btnRightContainer');

    // Create container to hold img position circles
    const imgOrderContainer = document.createElement('div');
    imgOrderContainer.classList.add('imgOrderContainer');



    imgContainer.appendChild(btnLeftContainer);
    imgContainer.appendChild(btnRightContainer);
    imgSliderContainer.appendChild(imgContainer);
    imgSliderContainer.appendChild(imgOrderContainer);

    contentContainer.appendChild(imgSliderContainer);
}

export default createImgSlider;