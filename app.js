const pagesContainer = document.querySelector(".pages-container");
const pagesSlider = document.querySelector(".pages-container .pages");

const pagesContainerStyle = window.getComputedStyle(pagesContainer);

const backNextBtnContainer = document.querySelector(".pages-buttons");
const backButton = document.querySelector(".pages-buttons .back");
const nextButton = document.querySelector(".pages-buttons .next");
let slidIndex = 0;

nextButton.addEventListener("click", (e) => {
    if (slidIndex < 4) {
        slidIndex++;
        pagesSlider.style.left =
            pagesContainerStyle.width.replace("px", "") * slidIndex * -1 + "px";

        if (slidIndex == 4) backNextBtnContainer.classList.add("submit");
    }
});
backButton.addEventListener("click", (e) => {
    if (slidIndex > 0) {
        if (slidIndex <= 2) {
            slidIndex = 0;
            backNextBtnContainer.classList.add("hide");
        } else slidIndex--;

        pagesSlider.style.left =
            pagesContainerStyle.width.replace("px", "") * slidIndex * -1 + "px";
    }
});

//  //

const forwardChainingBtn = document.querySelector(
    ".pages-container .search-method .foreword"
);
const backwardsChainingBtn = document.querySelector(
    ".pages-container .search-method .backwards"
);

const searchMethodInput = document.querySelector(
    ".pages-container .search-method .search-method"
);

forwardChainingBtn.addEventListener("click", (e) => {
    slidIndex += 2;
    pagesSlider.style.left =
        pagesContainerStyle.width.replace("px", "") * slidIndex * -1 + "px";

    searchMethodInput.setAttribute("value", "forward");

    backNextBtnContainer.classList.remove("hide");
});
backwardsChainingBtn.addEventListener("click", (e) => {
    slidIndex += 1;
    pagesSlider.style.left =
        pagesContainerStyle.width.replace("px", "") * slidIndex * -1 + "px";

    searchMethodInput.setAttribute("value", "backward");

    backNextBtnContainer.classList.remove("hide");
});
