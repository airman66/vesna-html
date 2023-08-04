function getlength(number) {
    return number.toString().length;
}

const headerSlider = new Swiper('.header-slider .swiper', {
    speed: 400,
    spaceBetween: 100,
    pagination: {
        el: '.swiper-pagination',
        clickable: false,
        type: "fraction",
        formatFractionCurrent: (number) => {
            return `0${number}`;
        },
        formatFractionTotal: (number) => {
            return `0${number}`;
        },
        currentClass: "slider-pagintaion-current",
        totalClass: "slider-pagintaion-total",
        renderFraction: function (currentClass, totalClass) {
            return '<span class="' + currentClass + '"></span>' +
                '<span class="fraction"> / </span>' +
                '<span class="' + totalClass + '"></span>';
        }
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    }
});

// const doctorPrev = document.querySelector(".doctors-slider .button-prev");
//
// doctorPrev.addEventListener("click", () => {
//     document.querySelector(".doctors .swiper .swiper-button-prev").click();
// });
//
// const doctorNext = document.querySelector(".doctors-slider .button-next");
//
// doctorNext.addEventListener("click", () => {
//     document.querySelector(".doctors .swiper .swiper-button-next").click();
// });

// const doctorsSlider = new Swiper(".doctors .swiper", {
//     slidesPerView: 3,
//     breakpoints: {
//         // when window width is >= 320px
//         320: {
//             slidesPerView: 1
//         },
//         // when window width is >= 640px
//         670: {
//             slidesPerView: 2
//         },
//         1300: {
//             slidesPerView: 3
//         }
//     },
//     speed: 400,
//     pagination: {
//         el: '.swiper-pagination',
//         clickable: false,
//         type: "fraction",
//         formatFractionCurrent: (number) => {
//             return `0${number}`;
//         },
//         formatFractionTotal: (number) => {
//             return `0${number}`;
//         },
//         currentClass: "slider-pagintaion-current",
//         totalClass: "slider-pagintaion-total",
//         renderFraction: function (currentClass, totalClass) {
//             return '<span class="' + currentClass + '"></span>' +
//                 '<span class="fraction"> / </span>' +
//                 '<span class="' + totalClass + '"></span>';
//         }
//     },
//     navigation: {
//         nextEl: '.swiper-button-next',
//         prevEl: '.swiper-button-prev',
//     }
// });

window.addEventListener("resize", function(e) {
    const width = (window.innerWidth > 0) ? window.innerWidth : screen.width;
    const mapElement = document.getElementById("map");
    const img = document.querySelector(".contacts-getPlace img");
    mapElement.style.height = `${img.offsetHeight}px`;
    const galleryTitles = document.querySelectorAll(".contacts-photogallery__row-item__title");
    galleryTitles.forEach(element => {
        const img = element.parentNode.firstElementChild;
        element.style.left = `${(img.offsetWidth - element.offsetWidth)/2}px`;
        element.style.top = `${(img.offsetHeight - element.offsetHeight)/2}px`;
    });
    const videos = document.querySelectorAll(".reviews-videos__item");
    videos.forEach(element => {
        element.style.height = `${element.offsetWidth*1.395}px`;
    });

    if (width <= 430) {
        videos.forEach(element => {
            element.style.height = `${element.offsetWidth*1.364}px`;
        });
    }
});

window.addEventListener("DOMContentLoaded", function(e) {
    const mapElement = document.getElementById("map");
    const img = document.querySelector(".contacts-getPlace img");
    mapElement.style.height = `${img.offsetHeight}px`;
    const galleryTitles = document.querySelectorAll(".contacts-photogallery__row-item__title");
    galleryTitles.forEach(element => {
        const img = element.parentNode.firstElementChild;
        element.style.left = `${(img.offsetWidth - element.offsetWidth)/2}px`;
        element.style.top = `${(img.offsetHeight - element.offsetHeight)/2}px`;
    });
    const videos = document.querySelectorAll(".reviews-videos__item");
    videos.forEach(element => {
        element.style.height = `${element.offsetWidth*1.395}px`;
    });
    const branches = document.querySelectorAll(".branches_grid-item");
    branches.forEach(branch => {
        const original = branch.firstElementChild.src;
        const white = branch.dataset.white;
        if (white) {
            branch.onmouseover = () => {
                branch.firstElementChild.src = white;
            };
            branch.onmouseout = () => {
                branch.firstElementChild.src = original;
            };
        }
    });
    const accordionSections = document.querySelectorAll(".accordion-section");
    accordionSections.forEach(accordion => {
        accordion.querySelector(".accordion-section__button").addEventListener("click", e => e.preventDefault());
        if (accordion.dataset.state !== "close" && accordion.dataset.state !== "open") {
            accordion.dataset.state = "close";
        }
        if (accordion.dataset.state === "open") {
            accordion.querySelector(".accordion-section__button img").src = "img/accordion-open.png";
        }

        accordion.addEventListener("mouseover", () => {
            if (accordion.dataset.state === "close") {
                accordion.querySelector(".accordion-section__button img").src = "img/plus-hover.png";
            }
        });
        accordion.addEventListener("mouseout", () => {
            if (accordion.dataset.state === "close") {
                accordion.querySelector(".accordion-section__button img").src = "img/plus.png";
            }
        });

        accordion.addEventListener("click", () => {
            if (accordion.dataset.state === "close") {
                accordionSections.forEach(item => {
                    item.dataset.state = "close";
                    item.querySelector(".accordion-section__button img").src = "img/plus.png";
                });
                accordion.dataset.state = "open";
                accordion.querySelector(".accordion-section__button img").src = "img/accordion-open.png";
            } else if (accordion.dataset.state === "open") {
                accordionSections.forEach(item => {
                    item.dataset.state = "close";
                    item.querySelector(".accordion-section__button img").src = "img/plus.png";
                });
                accordion.dataset.state = "close";
                accordion.querySelector(".accordion-section__button img").src = "img/plus.png";
            }
        });
    });
});

const licenses = new Splide( '#licenses-slider' , {
    perPage: 5,
    rewind : false,
    gap: 30,
    breakpoints: {
        430: {
            perPage: 2,
            gap    : 5
        }
    },
});

const licensesPagination = document.querySelector("#licenses-slider .licenses-pagination");

licenses.on("mounted", () => {
    if (window.innerWidth <= 430) {
        const current = licenses.index + 2;
        const total = licenses.length;
        licensesPagination.querySelector(".slider-pagintaion-current").innerHTML = getlength(current) < 2 ? `0${current}` : `${current}`;
        licensesPagination.querySelector(".slider-pagintaion-total").innerHTML = total;
    } else {
        const current = licenses.index + 5;
        const total = licenses.length;
        licensesPagination.querySelector(".slider-pagintaion-current").innerHTML = getlength(current) < 2 ? `0${current}` : `${current}`;
        licensesPagination.querySelector(".slider-pagintaion-total").innerHTML = total;
    }
});

licenses.on("move", () => {
    if (window.innerWidth <= 430) {
        const current = licenses.index + 2;
        const total = licenses.length;
        licensesPagination.querySelector(".slider-pagintaion-current").innerHTML = getlength(current) < 2 ? `0${current}` : `${current}`;
        licensesPagination.querySelector(".slider-pagintaion-total").innerHTML = total;
    } else {
        const current = licenses.index + 5;
        const total = licenses.length;
        licensesPagination.querySelector(".slider-pagintaion-current").innerHTML = getlength(current) < 2 ? `0${current}` : `${current}`;
        licensesPagination.querySelector(".slider-pagintaion-total").innerHTML = total;
    }
});

licenses.mount();

const doctors = new Splide( '#doctors-slider' , {
    perPage: 3,
    rewind : false,
    gap: 30,
    breakpoints: {
        430: {
            perPage: 1,
            gap    : 0
        }
    },
});

const doctorsPagination = document.querySelector("#doctors-slider .doctors-pagination");

doctors.on("mounted", () => {
    if (window.innerWidth <= 430) {
        const current = doctors.index + 1;
        const total = doctors.length;
        doctorsPagination.querySelector(".slider-pagintaion-current").innerHTML = getlength(current) < 2 ? `0${current}` : `${current}`;
        doctorsPagination.querySelector(".slider-pagintaion-total").innerHTML = total;
    } else {
        const current = doctors.index + 3;
        const total = doctors.length;
        doctorsPagination.querySelector(".slider-pagintaion-current").innerHTML = getlength(current) < 2 ? `0${current}` : `${current}`;
        doctorsPagination.querySelector(".slider-pagintaion-total").innerHTML = total;
    }
});

doctors.on("move", () => {
    if (window.innerWidth <= 430) {
        const current = doctors.index + 1;
        const total = doctors.length;
        doctorsPagination.querySelector(".slider-pagintaion-current").innerHTML = getlength(current) < 2 ? `0${current}` : `${current}`;
        doctorsPagination.querySelector(".slider-pagintaion-total").innerHTML = total;
    } else {
        const current = doctors.index + 3;
        const total = doctors.length;
        doctorsPagination.querySelector(".slider-pagintaion-current").innerHTML = getlength(current) < 2 ? `0${current}` : `${current}`;
        doctorsPagination.querySelector(".slider-pagintaion-total").innerHTML = total;
    }
});

doctors.mount();