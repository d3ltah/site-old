var main = document.getElementsByTagName("main")[0];
var elements = main.children;

for (let i = 0; i < elements.length; i++) {
    elements[i].style.opacity = 0; // Set initial opacity to 0
    elements[i].style.transform = "translateY(-10px)";
    elements[i].style.transition = `opacity, transform 0.5s ease-in-out ${20 * i}ms`; // Apply staggered transition

    setTimeout(() => {
        elements[i].style.opacity = "";
        elements[i].style.transform = "translateY(0px)";
    }, i * 100);
}

setTimeout(() => {
    for (let i = 0; i < elements.length; i++) {
        elements[i].style.transition = "";
    }
}, 3000);