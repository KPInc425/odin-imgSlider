const createImgSlider = (imgArray) => {
    const length = imgArray.length;
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
    btnLeft.innerHTML = '&#10094;';

    // Create right Button container
    const btnRightContainer = document.createElement('div');
    btnRightContainer.classList.add('btnRightContainer');
    // Create Right Button
    const btnRight = document.createElement('button');
    btnRight.id = 'btnRight';
    btnRight.innerHTML = '&#10095;';

    // Create container to hold img position circles
    const imgOrderContainer = document.createElement('div');
    imgOrderContainer.classList.add('imgOrderContainer');

    const addImages = () => {
        
        for (let i = 0; i < length; i++) {
            let tmpImgElementContainer = document.createElement('div');
            tmpImgElementContainer.classList.add('innerImgContainer');
            tmpImgElementContainer.classList.add('hiddenImg');
            tmpImgElementContainer.classList.add('fade');

            let tmpImgNumberLabel = document.createElement('div');
            tmpImgNumberLabel.classList.add('numberLabel');
            tmpImgNumberLabel.textContent = `${i + 1} / ${length}`;
            

            let tmpImgElement = document.createElement('img');
            tmpImgElement.src = imgArray[i];
            tmpImgElement.classList.add('sliderImg');

            let tmpImgCaptionLabel = document.createElement('div');
            tmpImgCaptionLabel.classList.add('textCaption');
            tmpImgCaptionLabel.textContent = `Caption Text ${i + 1}`;

            tmpImgElementContainer.appendChild(tmpImgNumberLabel);
            tmpImgElementContainer.appendChild(tmpImgElement);
            tmpImgElementContainer.appendChild(tmpImgCaptionLabel);
            imgContainer.appendChild(tmpImgElementContainer);
        }
        console.log(length);
    }

    const addIndexCircles = () => {
        for (let i = 0; i < length; i++) {
            let tmpCircleElementContainer = document.createElement('div');
            tmpCircleElementContainer.classList.add('indexCircleContainer');

            let tmpCircleElement = document.createElement('span');
            tmpCircleElement.classList.add('dot');
            tmpCircleElement.id = i + 1;

            tmpCircleElement.addEventListener('click', (e) => {
                e.stopPropagation();
                console.log(`Clicked Dot for Slide ${tmpCircleElement.id}!`);
                console.log(tmpCircleElement.id);
                currentImg(i + 1);
            });

            tmpCircleElementContainer.appendChild(tmpCircleElement);
            imgOrderContainer.appendChild(tmpCircleElementContainer);
        }
    }

    addImages();
    addIndexCircles();

    btnLeftContainer.appendChild(btnLeft);
    imgContainer.appendChild(btnLeftContainer);
    btnRightContainer.appendChild(btnRight);
    imgContainer.appendChild(btnRightContainer);

    // imgContainer.appendChild(imgLeftContainer);
    // imgContainer.appendChild(visibleImgContainer);
    // imgContainer.appendChild(imgRightContainer);

    imgSliderContainer.appendChild(imgContainer);
    imgSliderContainer.appendChild(imgOrderContainer);

    contentContainer.appendChild(imgSliderContainer);

    let imgIndex = 1;
    let timeoutID;
    showImg(imgIndex);

    function plusImg(n) {
        showImg(imgIndex += n);
    }

    function currentImg(n) {
        console.log(n);
        showImg(imgIndex = n);
    }

    function showImg(n) {
        if (timeoutID != undefined) {
            clearTimeout(timeoutID);
        }

        let i;
        let imgNodelist = document.querySelectorAll('.innerImgContainer');
        let dotNodelist = document.getElementsByClassName('dot');
        // console.log(imgNodelist);
        console.log(n);

        // Check for Above img amount
        if (n > imgNodelist.length) {
            imgIndex = 1;
        }

        // Check for below img amount
        if (n < 1) {
            imgIndex = imgNodelist.length;
        }

        // Give all images a display of none
        for (i = 0; i < imgNodelist.length; i++) {
            imgNodelist[i].style.display = 'none';
        }

        // remove active class from all dot elements
        for (i = 0; i < dotNodelist.length; i++) {
            dotNodelist[i].classList.remove("active");
        }
        // console.log(imgNodelist);

        // Display Chosen Img
        imgNodelist[imgIndex - 1].style.display = "block";
        dotNodelist[imgIndex - 1].classList.add('active');
        console.log(imgNodelist[imgIndex -1]);

        // AutoScroll everyt 10 seconds
        timeoutID = setTimeout(() => {
            plusImg(1);
        }, 10000);

        // visibleImgContainer.appendChild(imgNodelist[imgIndex -1]);
    }

    btnLeft.addEventListener('click', (e) =>{
        e.stopPropagation();
        plusImg(-1);
    })
    btnRight.addEventListener('click', (e) =>{
        e.stopPropagation();
        plusImg(1);
    })





}

export default createImgSlider;