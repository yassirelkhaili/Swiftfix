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
const searchBtn = document.getElementById("search") as HTMLDivElement;
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
navGroup && navGroup.appendChild(navGroupBurgerDiv)
}

createBurgerBtn();

//burger event listener && toggle animation class
const lines = document.querySelectorAll(".line") as NodeListOf<HTMLSpanElement>;
const btn = document.querySelector(".nav__group__btn") as HTMLAnchorElement;
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

//form validation
const isValid: { error: boolean, message: string } = { error: false, message: "" };

const nameInput = document.querySelector("#name") as HTMLInputElement;
const emailInput = document.querySelector("#email") as HTMLInputElement;
const messageInput = document.querySelector("#message") as HTMLInputElement;
const subjectInput = document.querySelector("#subject") as HTMLInputElement;
const referralInput = document.querySelector("#referral") as HTMLInputElement;

const emailRegex: RegExp = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
const nameRegex: RegExp = /^[A-Za-z\s]{1,50}$/;
const subjectRegex: RegExp = /^[A-Za-z0-9\s]{1,100}$/;
const messageRegex: RegExp = /^[A-Za-z0-9\s]{1,250}$/;
const referralRegex: RegExp = /^[A-Za-z0-9\s]{1,60}$/;

//create error message div

const createErrorContainer = (): HTMLDivElement => {
  const errorContainer = document.createElement("div") as HTMLDivElement;
  errorContainer.classList.add("form__error__container");
  return errorContainer;
}

function validateReferral() {
  const errorContainer = createErrorContainer() as HTMLDivElement
  if (!referralInput.value.trim()) {
    referralInput.style.borderBottomColor = "#094B72";
  } else if (!referralRegex.test(referralInput.value.trim())) {
    isValid.error = true;
    referralInput.value.trim().length > 60 ? isValid.message = "Referral cannot exceed 60 charracters" : isValid.message = "Please enter a valid referral.";
    referralInput.style.color = "red";
    referralInput.style.borderBottomColor = "red";
    errorContainer.textContent = isValid.message;
    if (referralInput.parentNode?.querySelectorAll(".form__error__container").length === 0) {
      if (referralInput.nextSibling) {
        referralInput.parentNode?.insertBefore(errorContainer, referralInput.nextSibling);
      } else {
        referralInput.parentNode?.appendChild(errorContainer);
      }
    }
  } else {
    if (referralInput.nextElementSibling?.classList.contains("form__error__container"))
      referralInput.nextSibling?.remove();
    isValid.error = false;
    referralInput.style.color = "green";
    referralInput.style.borderBottomColor = "green";
  }
}

function validateName() { 
  if (!nameInput.value.trim()) {
    nameInput.style.borderBottomColor = "#094B72";
  } else if (!nameRegex.test(nameInput.value.trim())) {
    isValid.error = true;
    isValid.message = "Please enter a valid name.";
    nameInput.style.color = "red";
    nameInput.style.borderBottomColor = "red";
  } else {
    isValid.error = false;
    nameInput.style.color = "green";
    nameInput.style.borderBottomColor = "green";
  }
}

function validateEmail() {
  if (!emailInput.value.trim()) {
    emailInput.style.borderBottomColor = "#094B72";
  } else if (!emailRegex.test(emailInput.value.trim())) {
    isValid.error = true;
    isValid.message = "Please enter a valid email.";
    emailInput.style.color = "red";
    emailInput.style.borderBottomColor = "red";
  } else {
    isValid.error = false;
    emailInput.style.color = "green";
    emailInput.style.borderBottomColor = "green";
  }
}

function validateSubject() {
  if (!subjectInput.value.trim()) {
    subjectInput.style.borderBottomColor = "#094B72";
  } else if (!subjectRegex.test(subjectInput.value.trim())) {
    isValid.error = true;
    isValid.message = "Please enter a valid Subject.";
    subjectInput.style.color = "red";
    subjectInput.style.borderBottomColor = "red";
  } else {
    isValid.error = false;
    subjectInput.style.color = "green";
    subjectInput.style.borderBottomColor = "green";
  }
}

function validateMessage() {
  if (!messageInput.value.trim()) {
    messageInput.style.borderBottomColor = "#094B72";
  } else if (!messageRegex.test(messageInput.value.trim())) {
    isValid.error = true;
    isValid.message = "Please enter a valid message.";
    messageInput.style.color = "red";
    messageInput.style.borderBottomColor = "red";
  } else {
    isValid.error = false;
    messageInput.style.color = "green";
    messageInput.style.borderBottomColor = "green";
  }
}

nameInput?.addEventListener("input", validateName);
emailInput?.addEventListener("input", validateEmail);
subjectInput?.addEventListener("input", validateSubject);
messageInput?.addEventListener("input", validateMessage);
referralInput?.addEventListener("input", validateReferral);

const handleContactFormSubmission = () => {
  form?.addEventListener("submit", async (event: Event) => {
    event.preventDefault();
    if (!isValid.error) {
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
  }
    )
}

document.addEventListener("DOMContentLoaded", handleContactFormSubmission);

const createObscureDiv = () => {
  const div = document.createElement("div") as HTMLDivElement;
  div.classList.add("opacity");
  div.id = "opacity";
  header.appendChild(div);
}

createObscureDiv();
const obscure  = document.getElementById("opacity") as HTMLDivElement;

let searchModalIsOpen: boolean = false;

const handleModalTrigger = (event: Event) => {
  const target = event.target as HTMLElement;
  if (target.tagName.toLowerCase() === "svg") {
    searchModal.classList.add("modal__container--active")
    searchModalIsOpen = true;
  } 
  else {
    modal.classList.add("modal__container--active");
  }
  obscure.classList.add("opacity--active");
  document.body.style.overflow = "hidden";
}

const handleModalClose = (event: Event) => {
  const target = event.target as HTMLElement;
  if ((target.classList.contains("modal__button__footer__close__search") || target.classList.contains("modal__button__close__search") || searchModalIsOpen)) {
    searchModal.classList.remove("modal__container--active")
    searchModalIsOpen = false;
  } else {
    modal.classList.remove("modal__container--active")
  }
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

const serviceNavBtn = document.getElementById("menuservice") as HTMLLIElement;
const serviceNavBtnIcon = document.querySelector(".header__dropdown__svg") as HTMLSpanElement;
const dropdownMenu = document.querySelector(".nav__group__dropdown") as HTMLUListElement;

const handleServiceBtnMouseEnter = () => {
serviceNavBtnIcon.classList.add("header__dropdown__svg--active");
dropdownMenu.style.display = "flex";
setTimeout(() => {
  dropdownMenu.classList.add("nav__group__dropdown--active");
}, 1);
}

const handleServiceBtnMouseLeave = () => {
  serviceNavBtnIcon.classList.remove("header__dropdown__svg--active");
  dropdownMenu.style.display = "none";
    setTimeout(() => {
      dropdownMenu.classList.remove("nav__group__dropdown--active");
    }, 1);
} 

serviceNavBtn?.addEventListener("mouseenter", handleServiceBtnMouseEnter);
serviceNavBtn?.addEventListener("mouseleave", handleServiceBtnMouseLeave);





















