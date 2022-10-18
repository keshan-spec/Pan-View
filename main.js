// https://codepen.io/Hyperplexed/pen/VwXXPKJ - Codepen link for JS Logic

const gallery = document.getElementById("gallery");

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

    // gallery.style.transform = `translate3d(${panX}px, ${panY}px, 0)`;
    gallery.animate({
        transform: `translate(${panX}px, ${panY}px)`
    }, {
        duration: 4000,
        fill: "forwards",
        easing: "ease"
    })
}