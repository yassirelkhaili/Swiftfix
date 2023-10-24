//fun typescript practice (╯°□°）╯︵ ┻━┻

import * as config from "../config/config.js";

const navGroupBurgerDiv = document.createElement('div') as HTMLDivElement;
const parentNode: HTMLElement | null = document.querySelector("header");
const navGroupBtn = document.createElement('a') as HTMLAnchorElement;
const navChild: HTMLElement | null = document.getElementById("search");
const navGroup: Element | null = document.querySelector(".nav__group");
const linesArr: Array<HTMLSpanElement> = new Array <HTMLSpanElement>;
const groups = document.querySelectorAll(".faq__column__items__item__group");
const form = document.querySelector("#form") as HTMLFormElement;
const modal = document.querySelector(".modal__container") as HTMLDivElement;
const readBtn = document.querySelector(".readmore") as HTMLAnchorElement;
const closeBtn = document.querySelector(".modal__button__footer__close") as HTMLButtonElement;
const header = document.getElementsByTagName("header")[0] as HTMLHeadElement;
const headerCloseBtn = document.querySelector(".modal__button__close") as HTMLButtonElement;
const carouselItems = document.querySelectorAll(".testimonial__block") as NodeListOf<HTMLDivElement>;
const searchBtn = document.querySelector("#search") as HTMLDivElement;
const searchModal = document.querySelector(".modal__container__search") as HTMLDivElement;
const closeBtnSearch = document.querySelector(".modal__button__footer__close__search") as HTMLButtonElement;
const headerCloseBtnSearch = document.querySelector(".modal__button__close__search") as HTMLButtonElement;

const createBurgerMenu = (): HTMLElement => {
    const burgerMenu: HTMLElement = document.createElement("nav");
    const ul: HTMLUListElement = document.createElement("ul");
    let navElementsGroup: Array<HTMLLIElement> = [];

    burgerMenu.classList.add("nav__group--adjusted", "hidden")
    ul.classList.add("nav__group__items--adjusted");
    for (let index = 0; index < navElements.length; index++) {
        const anchor = document.createElement("a") as HTMLAnchorElement;
        const li = document.createElement("li") as HTMLLIElement;
        anchor.classList.add("nav__group__items__list__item__link--adjusted");
        anchor.href = "./" + navElements[index] + ".html";
        navElements[index] !== "Index" ? anchor.textContent = navElements[index] : anchor.textContent = "Home";
        li.className = "nav__group__items__list__item";
        li.appendChild(anchor);
        navElementsGroup.push(li);
        }
        navElementsGroup.forEach((element: HTMLLIElement) => ul.appendChild(element));
        burgerMenu.appendChild(ul);
        return burgerMenu;
}

//create burger btn
const createBurgerBtn = (): void => {
navGroupBtn.classList.add('nav__group__btn');
navGroupBurgerDiv.classList.add('nav__group__burger');
for (let i = 0; i < 3; i++) {
  const line = document.createElement('span') as HTMLSpanElement;
  line.classList.add('line');
  linesArr.push(line);
}
linesArr.forEach(line => {
  navGroupBtn.appendChild(line);
});
navGroupBurgerDiv.appendChild(navGroupBtn);
(navGroup && navChild) && navGroup.insertBefore(navGroupBurgerDiv, navChild)
}

createBurgerBtn();

//burger event listener && toggle animation class
const lines = document.querySelectorAll(".line") as NodeListOf<HTMLSpanElement>;
const btn = document.querySelector(".nav__group__btn") as HTMLAnchorElement;
const burger = document.getElementById("burger-menu")as HTMLDivElement;
const navElements: Array<string> = ["Index", "About", "Service", "Contact"]

//create burger menu
const burgerMenu = createBurgerMenu();
btn.addEventListener("click", () => {
    lines.forEach((line: HTMLSpanElement, index: number) => {
        if (index === 0) line.classList.toggle("activefirst");
        if (index === 1) line.classList.toggle("hidden");
        if (index === 2) line.classList.toggle("activelast");
      });
      if (parentNode)
      {
        if (!parentNode.contains(burgerMenu)){
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

    }
)

//accordion click event
const container = document.querySelector(".faq__column__items") as HTMLDivElement;

function handleAccordionClickEvent(event: Event) {
  const target = event.target as HTMLElement;
  const isAccordion = target.classList.contains("faq__column__items__item__group") || target.closest('[data-accordion="true"]');
  if (isAccordion) {
    const accordion = target.closest(".faq__column__items__item__group") as HTMLDivElement;
    if (accordion) {
      accordion.classList.toggle("faq__column__items__item__group--active");
      if (accordion.lastElementChild) {
        accordion.lastElementChild.classList.toggle("faq__column__items__item__btn--active");
        accordion.nextElementSibling && accordion.nextElementSibling.classList.toggle("faq__column__items__item__description--active");
      }
    }
  }
}

if(container) container.addEventListener("click", handleAccordionClickEvent);

const handleBlurEffect = (event: Event) => {
    groups.forEach((group) => {
      if (group.classList.contains("faq__column__items__item__group--active") && event.target !== group && !group.contains(event.target as Node)) {
        group.classList.remove("faq__column__items__item__group--active");
      }
    })
}

document.addEventListener("click", handleBlurEffect);

const handleContactFormSubmission = () => {
  form.addEventListener("submit", async (event: Event) => {
    console.log("form submitted")
    event.preventDefault();
    const formData = new FormData(form);
    const jsonData: { [key: string]: any } = {};
    formData.forEach((value, key) => {
      jsonData[key] = value;
    });
    const jsonString: string = JSON.stringify(jsonData);
    try {
      const response: Response = await fetch (config.ENDPOINT, {
        method: "POST",
        body: jsonString,
      })
      if (response.ok)
      {
        const responseData: JSON = await response.json();
        console.log(responseData);
      } else {
        console.error("there was an error");
      }
    } catch (error) {
      throw new Error("an error has occured " + error);
    }
  }
    )
}

if(form) document.addEventListener("DOMContentLoaded", handleContactFormSubmission);

const createObscureDiv = () => {
  const div = document.createElement("div") as HTMLDivElement;
  div.classList.add("opacity");
  div.id = "opacity";
  header.appendChild(div);
}

createObscureDiv();
const obscure  = document.getElementById("opacity") as HTMLDivElement;

const handleModalTrigger = (event: Event) => {
  const target = event.target as HTMLElement;
  target.classList.contains("modal__container__search") ? searchModal.classList.add("modal__container--active"): modal.classList.add("modal__container--active");
  obscure.classList.add("opacity--active");
  document.body.style.overflow = "hidden";
}

const handleModalClose = (event: Event) => {
  const target = event.target as HTMLElement;
  target.classList.contains("modal__container__search") ? searchModal.classList.remove("modal__container--active"): modal.classList.remove("modal__container--active");
  console.log(searchModal)
  obscure.classList.remove("opacity--active");
  document.body.style.overflow = "visible";
}

if (modal && readBtn)
{
  readBtn.addEventListener("click", handleModalTrigger);
  closeBtn.addEventListener("click", handleModalClose);
  obscure.addEventListener("click", handleModalClose);
  headerCloseBtn.addEventListener("click", handleModalClose);
}

const generateCarouselButtons = () => {
  const buttonContainer = document.createElement("div") as HTMLDivElement;

  buttonContainer.classList.add("testimonial__carousel__buttons");
  const createCarouselBtn = (): void => {
  const btn = document.createElement("span") as HTMLSpanElement;
  const buttonContainer = document.querySelector(".testimonial__carousel__buttons") as HTMLDivElement;
  btn.classList.add("testimonial__carousel__button");
  buttonContainer.appendChild(btn);
  }
  let itemCount: number = carouselItems.length;
  while (itemCount > 0) {
    createCarouselBtn();
    itemCount--;
  }
}

document.addEventListener("DOMContentLoaded", generateCarouselButtons);

let currentSlide: number = 0;
const showItem = (index: number) => {
  const spanButtons = document.querySelectorAll(".testimonial__carousel__button") as NodeListOf<HTMLSpanElement>;
  const length = carouselItems.length;

  if (index < 0) {
    index = length - 1;
  } else if (index >= length) {
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
    } else {
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
  const interval: number = 5000;

  const autoSlide = () => {
      currentSlide++;
      showItem(currentSlide);
  };

  showItem(currentSlide);
  setInterval(autoSlide, interval);
  const spanButtons = document.querySelectorAll(".testimonial__carousel__button") as NodeListOf<HTMLSpanElement>;
  spanButtons.forEach((span: HTMLSpanElement, index: number) => {
    span.addEventListener("click", () => showItem(index));
  });
};

document.addEventListener("DOMContentLoaded", handleCarousel);

  if (modal && searchBtn)
{
  searchBtn.addEventListener("click", handleModalTrigger);
  closeBtnSearch.addEventListener("click", handleModalClose);
  obscure.addEventListener("click", handleModalClose);
  headerCloseBtnSearch.addEventListener("click", handleModalClose);
}




















