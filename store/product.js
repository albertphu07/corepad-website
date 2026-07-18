const images = [

"../../images/IMG_7624.png",

"../../images/IMG_7632(1).png",

"../../images/IMG_7632(2).png",

"../../images/IMG_7633.png",

"../../images/IMG_7633(1).png",

];


let currentImage = 0;


function changeImage(direction){

    currentImage += direction;


    if(currentImage < 0){

        currentImage = images.length - 1;

    }


    if(currentImage >= images.length){

        currentImage = 0;

    }


    document.getElementById("product-image").src = images[currentImage];

}