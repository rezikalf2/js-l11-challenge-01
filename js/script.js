const button = document.querySelector("button");
const authorSpan = document.querySelector(".author");
const imgDiv = document.querySelector(".image-container");
const img = document.querySelector(".img");
const getImage = async function(){
        //imgDiv.classList.add("hide");
        const res = await fetch("https://picsum.photos/v2/list?limit=100");
        var images = await res.json();
        selectRandomImage(images);
        //console.log(images);
        
}
//getImage();
//console.log(getImage().images.length); // here images is not defined due to the scope
const selectRandomImage = function (images){
    const randomIndex = Math.floor(Math.random()*(images.length));
    //console.log(images.length);
    //console.log(randomIndex);
    const randomImage  = images[randomIndex];
    //console.log(randomImage);
    displayImage(randomImage);
}
const displayImage = function(randomImage){
    const author = randomImage.author;
    const imageAdd = randomImage.download_url;
    authorSpan.innerText = author;
    img.src = imageAdd;
    imgDiv.classList.remove("hide");
}
button.addEventListener("click",function(){
    getImage();
});
