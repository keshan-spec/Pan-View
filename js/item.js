window.onload = () => {
    // get url params
    const urlParams = new URLSearchParams(window.location.search);
    const myParam = urlParams.get('id');
    console.log(myParam);
    // // get the image
    // const image = document.getElementById("image");
    // // set the image src
    // image.src = `images/${myParam}.jpg`;
}