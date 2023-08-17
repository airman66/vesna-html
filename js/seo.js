function getlength(number) {
    return number.toString().length;
}

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
    const galleries = document.querySelectorAll(".contacts-photogallery__row-item");
    galleries.forEach(gallery => {
        gallery.addEventListener("click", e => {
            e.preventDefault();
            const galleryModal = document.querySelector("#gallery-modal");
            galleryModal.classList.remove("modal-closed");
            document.body.style.overflow = "hidden";
        });
    });
    document.querySelectorAll(".reviews-videos__item").forEach(video => {
        video.addEventListener("click", (e) => {
            e.preventDefault();
            document.getElementById("video-modal").classList.remove("modal-closed");
            document.body.style.overflow = "hidden";
        });
    });
    const accordionSections = document.querySelectorAll(".accordion-section");
    accordionSections.forEach(accordion => {
        accordion.querySelector(".accordion-section__button").addEventListener("click", e => e.preventDefault());
        if (accordion.dataset.state !== "close" && accordion.dataset.state !== "open") {
            accordion.dataset.state = "close";
        }
        if (accordion.dataset.state === "open") {
            accordion.querySelector(".accordion-section__button img").src = "img/accordion-open.svg";
        }

        accordion.addEventListener("mouseover", () => {
            if (accordion.dataset.state === "close") {
                accordion.querySelector(".accordion-section__button img").src = "img/plus-hover.svg";
            }
        });
        accordion.addEventListener("mouseout", () => {
            if (accordion.dataset.state === "close") {
                accordion.querySelector(".accordion-section__button img").src = "img/plus.svg";
            }
        });

        accordion.addEventListener("click", () => {
            if (accordion.dataset.state === "close") {
                accordionSections.forEach(item => {
                    item.dataset.state = "close";
                    item.querySelector(".accordion-section__button img").src = "img/plus.svg";
                });
                accordion.dataset.state = "open";
                accordion.querySelector(".accordion-section__button img").src = "img/accordion-open.svg";
            } else if (accordion.dataset.state === "open") {
                accordionSections.forEach(item => {
                    item.dataset.state = "close";
                    item.querySelector(".accordion-section__button img").src = "img/plus.svg";
                });
                accordion.dataset.state = "close";
                accordion.querySelector(".accordion-section__button img").src = "img/plus.svg";
            }
        });
    });

    const readMore = document.querySelectorAll(".review-full .reviews-grid__item-text_link");
    readMore.forEach(link => {
        link.addEventListener("click", e => {
            e.preventDefault();
            const fullToggle = link.parentElement;
            link.parentElement.parentElement.querySelector(".review-full_text").style.display = "inline";
            fullToggle.style.display = "none";
        });
    });

    const closeButtons = document.querySelectorAll(".modal-close");
    closeButtons.forEach(btn => {
        btn.addEventListener("click", () => {
            btn.parentElement.classList.add("modal-closed");
            document.body.style.overflowY = "visible";
        });
    });

    document.querySelectorAll(".license").forEach(license => {
        license.addEventListener("click", (e) => {
            e.preventDefault();
            document.getElementById("license-modal").classList.remove("modal-closed");
            document.body.style.overflow = "hidden";
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
        },
        768: {
            perPage: 3,
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
    } else if (window.innerWidth <= 768) {
        const current = licenses.index + 3;
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
    } else if (window.innerWidth <= 768) {
        const current = licenses.index + 3;
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

const gallerySlider = new Splide( '#gallery-slider' , {
    perPage: 1,
    arrows: true,
    pagination: false
});

const galleryThumbnailCarousel = new Splide( '#gallery-thumbnail-carousel', {
    fixedWidth: 100,
    gap       : 10,
    pagination: false,
    isNavigation: true,
    arrows: false
});

gallerySlider.sync(galleryThumbnailCarousel);
gallerySlider.mount();
galleryThumbnailCarousel.mount();