const close = document.querySelector("main .close");
const hamburger = document.querySelector("main .hamburger");

hamburger.addEventListener("click", function() {
    document.querySelector("main nav ul").style.right = "0px";
    document.querySelector("main .overly").style.display = "block";
    hamburger.style.display = "none";
    close.style.display = "block";
});

close.addEventListener("click", function() {
    document.querySelector("main nav ul").style.right = "-300px";
    document.querySelector("main .overly").style.display = "none";
    hamburger.style.display = "block";
    close.style.display = "none";
});


const startQueries = () => {
    let newQuery = window.matchMedia('(max-width: 700px)');
    console.log(newQuery);
    const queryListenChanges = query => {
        if(query.matches) {
            document.querySelector("main .content .left img").src = "./assets/images/image-web-3-mobile.jpg";
        } else {
            document.querySelector("main .content .left img").src = "./assets/images/image-web-3-desktop.jpg";
        }
    }

    newQuery.addListener(queryListenChanges);
    queryListenChanges(newQuery);
}

window.addEventListener("load", function() {
    startQueries();
})