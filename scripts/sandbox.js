//fun typescript practice (╯°□°）╯︵ ┻━┻
import * as config from "../config/config.js";
const navGroupBurgerDiv = document.createElement('div');
const parentNode = document.querySelector("header");
const navGroupBtn = document.createElement('a');
const navChild = document.getElementById("search");
const navGroup = document.querySelector(".nav__group");
const linesArr = new Array;
const groups = document.querySelectorAll(".faq__column__items__item__group");
const form = document.querySelector("#form");
const modal = document.querySelector(".modal__container");
const readbtn = document.querySelector(".readmore");
const closeBtn = document.querySelector(".modal__button__footer__close");
const header = document.getElementsByTagName("header")[0];
const headerCloseBtn = document.querySelector(".modal__button__close");
const carouselItems = document.querySelectorAll(".testimonial__block");
const createBurgerMenu = () => {
    const burgerMenu = document.createElement("nav");
    const ul = document.createElement("ul");
    let navElementsGroup = [];
    burgerMenu.classList.add("nav__group--adjusted", "hidden");
    ul.classList.add("nav__group__items--adjusted");
    for (let index = 0; index < navElements.length; index++) {
        const anchor = document.createElement("a");
        const li = document.createElement("li");
        anchor.classList.add("nav__group__items__list__item__link--adjusted");
        anchor.href = "./" + navElements[index] + ".html";
        navElements[index] !== "Index" ? anchor.textContent = navElements[index] : anchor.textContent = "Home";
        li.className = "nav__group__items__list__item";
        li.appendChild(anchor);
        navElementsGroup.push(li);
    }
    navElementsGroup.forEach((element) => ul.appendChild(element));
    burgerMenu.appendChild(ul);
    return burgerMenu;
};
//create burger btn
const createBurgerBtn = () => {
    navGroupBtn.classList.add('nav__group__btn');
    navGroupBurgerDiv.classList.add('nav__group__burger');
    for (let i = 0; i < 3; i++) {
        const line = document.createElement('span');
        line.classList.add('line');
        linesArr.push(line);
    }
    linesArr.forEach(line => {
        navGroupBtn.appendChild(line);
    });
    navGroupBurgerDiv.appendChild(navGroupBtn);
    (navGroup && navChild) && navGroup.insertBefore(navGroupBurgerDiv, navChild);
};
createBurgerBtn();
//burger event listener && toggle animation class
const lines = document.querySelectorAll(".line");
const btn = document.querySelector(".nav__group__btn");
const burger = document.getElementById("burger-menu");
const navElements = ["Index", "About", "Service", "Contact"];
//create burger menu
const burgerMenu = createBurgerMenu();
btn.addEventListener("click", () => {
    lines.forEach((line, index) => {
        if (index === 0)
            line.classList.toggle("activefirst");
        if (index === 1)
            line.classList.toggle("hidden");
        if (index === 2)
            line.classList.toggle("activelast");
    });
    if (parentNode) {
        if (!parentNode.contains(burgerMenu)) {
            parentNode.appendChild(burgerMenu);
            setTimeout(() => {
                burgerMenu.classList.contains("hidden") && burgerMenu.classList.remove("hidden");
            }, 200);
        }
        else {
            burgerMenu.classList.add("hidden");
            setTimeout(() => {
                parentNode.removeChild(burgerMenu);
            }, 200);
        }
    }
});
//accordion click event
const container = document.querySelector(".faq__column__items");
function handleAccordionClickEvent(event) {
    const target = event.target;
    const isAccordion = target.classList.contains("faq__column__items__item__group") || target.closest('[data-accordion="true"]');
    if (isAccordion) {
        const accordion = target.closest(".faq__column__items__item__group");
        if (accordion) {
            accordion.classList.toggle("faq__column__items__item__group--active");
            if (accordion.lastElementChild) {
                accordion.lastElementChild.classList.toggle("faq__column__items__item__btn--active");
                accordion.nextElementSibling && accordion.nextElementSibling.classList.toggle("faq__column__items__item__description--active");
            }
        }
    }
}
if (container)
    container.addEventListener("click", handleAccordionClickEvent);
const handleBlurEffect = (event) => {
    groups.forEach((group) => {
        if (group.classList.contains("faq__column__items__item__group--active") && event.target !== group && !group.contains(event.target)) {
            group.classList.remove("faq__column__items__item__group--active");
        }
    });
};
document.addEventListener("click", handleBlurEffect);
const handleContactFormSubmission = () => {
    form.addEventListener("submit", async (event) => {
        console.log("form submitted");
        event.preventDefault();
        const formData = new FormData(form);
        const jsonData = {};
        formData.forEach((value, key) => {
            jsonData[key] = value;
        });
        const jsonString = JSON.stringify(jsonData);
        try {
            const response = await fetch(config.ENDPOINT, {
                method: "POST",
                body: jsonString,
            });
            if (response.ok) {
                const responseData = await response.json();
                console.log(responseData);
            }
            else {
                console.error("there was an error");
            }
        }
        catch (error) {
            throw new Error("an error has occured " + error);
        }
    });
};
if (form)
    document.addEventListener("DOMContentLoaded", handleContactFormSubmission);
const createObscureDiv = () => {
    const div = document.createElement("div");
    div.classList.add("opacity");
    div.id = "opacity";
    header.appendChild(div);
};
createObscureDiv();
const obscure = document.getElementById("opacity");
const handleModalTrigger = () => {
    modal.classList.add("modal__container--active");
    obscure.classList.add("opacity--active");
    document.body.style.overflow = "hidden";
};
const handleModalClose = () => {
    modal.classList.remove("modal__container--active");
    obscure.classList.remove("opacity--active");
    document.body.style.overflow = "visible";
};
if (modal && readbtn) {
    readbtn.addEventListener("click", handleModalTrigger);
    closeBtn.addEventListener("click", handleModalClose);
    obscure.addEventListener("click", handleModalClose);
    headerCloseBtn.addEventListener("click", handleModalClose);
}
const generateCarouselButtons = () => {
    const buttonContainer = document.createElement("div");
    buttonContainer.classList.add("testimonial__carousel__buttons");
    const createCarouselBtn = () => {
        const btn = document.createElement("span");
        const buttonContainer = document.querySelector(".testimonial__carousel__buttons");
        btn.classList.add("testimonial__carousel__button");
        buttonContainer.appendChild(btn);
    };
    let itemCount = carouselItems.length;
    while (itemCount > 0) {
        createCarouselBtn();
        itemCount--;
    }
};
document.addEventListener("DOMContentLoaded", generateCarouselButtons);
let currentSlide = 0;
const showItem = (index) => {
    const spanButtons = document.querySelectorAll(".testimonial__carousel__button");
    const length = carouselItems.length;
    if (index < 0) {
        index = length - 1;
    }
    else if (index >= length) {
        index = 0;
    }
    for (let i = 0; i < length; i++) {
        const item = carouselItems[i];
        const button = spanButtons[i];
        if (i === index) {
            item.style.display = "flex";
            setTimeout(() => {
                item.classList.add("testimonial__block--active");
            }, 100);
            button.classList.add("testimonial__carousel__button--active");
        }
        else {
            item.style.display = "none";
            setTimeout(() => {
                item.classList.remove("testimonial__block--active");
            }, 100);
            button.classList.remove("testimonial__carousel__button--active");
        }
    }
    currentSlide = index;
};
const handleCarousel = () => {
    const interval = 5000;
    const autoSlide = () => {
        currentSlide++;
        showItem(currentSlide);
    };
    showItem(currentSlide);
    setInterval(autoSlide, interval);
    const spanButtons = document.querySelectorAll(".testimonial__carousel__button");
    spanButtons.forEach((span, index) => {
        span.addEventListener("click", () => showItem(index));
    });
};
document.addEventListener("DOMContentLoaded", handleCarousel);
