// https://codepen.io/Hyperplexed/pen/VwXXPKJ - Codepen link for JS Logic

const gallery = document.getElementById("gallery");
let animating = false;

window.onmousemove = e => {
    const mouseX = e.clientX;
    const mouseY = e.clientY;

    const xDecimal = mouseX / window.innerWidth;
    const yDecimal = mouseY / window.innerHeight;

    // keep the max values withing the screen size
    const maxX = gallery.offsetWidth - window.innerWidth;
    const maxY = gallery.offsetHeight - window.innerHeight;

    // multiply the decimal by the max values and multiple by -1 to invert the direction
    const panX = maxX * xDecimal * -1;
    const panY = maxY * yDecimal * -1;

    if (!animating) {
        gallery.animate({
            transform: `translate(${panX}px, ${panY}px)`
        }, {
            duration: 4000,
            fill: "forwards",
            easing: "ease"
        })
    }
}

// add attribute to the images
const images = document.getElementsByClassName("tile");
// get all images and set attributes
for (let i = 0; i < images.length; i++) {
    images[i].setAttribute("data-show", "false");
    images[i].setAttribute("data-id", i);
    images[i].setAttribute("onClick", "showImage(this)");
    images[i].setAttribute("data-hide", "false");
}

// show image after 3 seconds
setTimeout(() => {
    for (let i = 0; i < images.length; i++) {
        images[i].setAttribute("data-show", "true");
    }
}, 3000)

const showImage = (image) => {
    animating = true;
    const id = image.getAttribute("data-id");

    // hide all images
    for (let i = 0; i < images.length; i++) {
        if (i != id) {
            images[i].setAttribute("data-show", "false");
            images[i].setAttribute("data-hide", "true");
        }
    }

    images[id].animate({
        top: "0",
        left: "50%",
        width: "100vmax",
        height: "100vmax",
        borderRadius: "0"
    }, {
        duration: 2000,
        fill: "forwards",
        easing: "ease"
    })

    setTimeout(() => {
        window.location.href = `item.html?id=${id}`;
    }, 2000)
}