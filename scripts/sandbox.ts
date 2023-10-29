//fun typescript practice (╯°□°）╯︵ ┻━┻

import * as config from "../config/config.js";

const navGroupBurgerDiv = document.createElement("div") as HTMLDivElement;
const parentNode: HTMLElement | null = document.querySelector("header");
const navGroupBtn = document.createElement("a") as HTMLAnchorElement;
const navGroup: Element | null = document.querySelector(".nav__group");
const linesArr: Array<HTMLSpanElement> = new Array<HTMLSpanElement>();
const groups = document.querySelectorAll(".faq__column__items__item__group");
const form = document.querySelector("#form") as HTMLFormElement;
const modal = document.querySelector(".modal__container") as HTMLDivElement;
const readBtn = document.querySelector(".readmore") as HTMLAnchorElement;
const closeBtn = document.querySelector(
  ".modal__button__footer__close"
) as HTMLButtonElement;
const header = document.getElementsByTagName("header")[0] as HTMLHeadElement;
const headerCloseBtn = document.querySelector(
  ".modal__button__close"
) as HTMLButtonElement;
const carouselItems = document.querySelectorAll(
  ".testimonial__block"
) as NodeListOf<HTMLDivElement>;
const searchBtn = document.getElementById("search") as HTMLDivElement;
const searchModal = document.querySelector(
  ".modal__container__search"
) as HTMLDivElement;
const closeBtnSearch = document.querySelector(
  ".modal__button__footer__close__search"
) as HTMLButtonElement;
const headerCloseBtnSearch = document.querySelector(
  ".modal__button__close__search"
) as HTMLButtonElement;

const createBurgerMenu = (): HTMLElement => {
  const burgerMenu: HTMLElement = document.createElement("nav");
  const ul: HTMLUListElement = document.createElement("ul");
  let navElementsGroup: Array<HTMLLIElement> = [];

  burgerMenu.classList.add("nav__group--adjusted", "hidden");
  ul.classList.add("nav__group__items--adjusted");
  for (let index = 0; index < navElements.length; index++) {
    if (index === 2) {
      const outerLi = document.createElement("li");
      outerLi.classList.add(
        "nav__group__items__list__item",
        "menuservice",
        "nav__group__items__list__item--adjusted"
      );
      const anchor = document.createElement("a");
      anchor.classList.add("nav__group__items__list__item__link");
      anchor.href = "./service.html";
      anchor.textContent = "Services";
      const span = document.createElement("span");
      span.classList.add("header__dropdown__svg");
      anchor.appendChild(span);
      outerLi.appendChild(anchor);
      const innerUl = document.createElement("ul");
      innerUl.classList.add("nav__group__dropdown");
      const innerLiItems = ["Repair", "Equipment", "Facility", "Other"];
      innerLiItems.forEach((itemText) => {
        const innerLi = document.createElement("li");
        const innerAnchor = document.createElement("a");
        innerAnchor.classList.add(
          "nav__group__items__list__item",
          "nav__group__items__list__item__link"
        );
        innerAnchor.href = "#";
        innerAnchor.textContent = itemText;
        innerLi.appendChild(innerAnchor);
        innerUl.appendChild(innerLi);
        navElementsGroup.push(outerLi);
      });
      outerLi.appendChild(innerUl);
    } else {
      const anchor = document.createElement("a") as HTMLAnchorElement;
      const li = document.createElement("li") as HTMLLIElement;
      anchor.classList.add("nav__group__items__list__item__link--adjusted");
      anchor.href = "./" + navElements[index] + ".html";
      navElements[index] !== "Index"
        ? (anchor.textContent = navElements[index])
        : (anchor.textContent = "Home");
      li.className = "nav__group__items__list__item";
      li.appendChild(anchor);
      navElementsGroup.push(li);
    }
  }
  navElementsGroup.forEach((element: HTMLLIElement) => ul.appendChild(element));
  burgerMenu.appendChild(ul);
  return burgerMenu;
};

//create burger btn
const createBurgerBtn = (): void => {
  navGroupBtn.classList.add("nav__group__btn");
  navGroupBurgerDiv.classList.add("nav__group__burger");
  for (let i = 0; i < 3; i++) {
    const line = document.createElement("span") as HTMLSpanElement;
    line.classList.add("line");
    linesArr.push(line);
  }
  linesArr.forEach((line) => {
    navGroupBtn.appendChild(line);
  });
  navGroupBurgerDiv.appendChild(navGroupBtn);
  navGroup && navGroup.appendChild(navGroupBurgerDiv);
};

createBurgerBtn();

//burger event listener && toggle animation class
const lines = document.querySelectorAll(".line") as NodeListOf<HTMLSpanElement>;
const btn = document.querySelector(".nav__group__btn") as HTMLAnchorElement;
const navElements: Array<string> = ["Index", "About", "Service", "Contact"];
const serviceNavBtn = document.querySelectorAll(
  ".menuservice"
) as NodeListOf<HTMLLIElement>;
const dropdownMenu = document.querySelectorAll(
  ".nav__group__dropdown"
) as NodeListOf<HTMLUListElement>;
const serviceNavBtnIcon = document.querySelectorAll(
  ".header__dropdown__svg"
) as NodeListOf<HTMLSpanElement>;

const handleServiceBtnMouseEnter = (
  serviceNavBtnIcon: HTMLSpanElement,
  dropdownMenu: HTMLUListElement
) => {
  serviceNavBtnIcon.classList.add("header__dropdown__svg--active");
  dropdownMenu.style.display = "flex";
  setTimeout(() => {
    dropdownMenu.classList.add("nav__group__dropdown--active");
  }, 1);
};

const handleServiceBtnMouseLeave = (
  serviceNavBtnIcon: HTMLSpanElement,
  dropdownMenu: HTMLUListElement
) => {
  serviceNavBtnIcon.classList.remove("header__dropdown__svg--active");
  dropdownMenu.style.display = "none";
  setTimeout(() => {
    dropdownMenu.classList.remove("nav__group__dropdown--active");
  }, 1);
};

//create burger menu
const burgerMenu = createBurgerMenu();
btn.addEventListener("click", () => {
  lines.forEach((line: HTMLSpanElement, index: number) => {
    if (index === 0) line.classList.toggle("activefirst");
    if (index === 1) line.classList.toggle("hidden");
    if (index === 2) line.classList.toggle("activelast");
  });
  if (parentNode) {
    if (!parentNode.contains(burgerMenu)) {
      parentNode.appendChild(burgerMenu);
      setTimeout(() => {
        burgerMenu.classList.contains("hidden") &&
          burgerMenu.classList.remove("hidden");
      }, 200);
    } else {
      burgerMenu.classList.add("hidden");
      setTimeout(() => {
        parentNode.removeChild(burgerMenu);
      }, 200);
    }
  }
  const serviceNavBtnIcon = document.querySelectorAll(
    ".header__dropdown__svg"
  ) as NodeListOf<HTMLSpanElement>;
  const serviceNavBtn = document.querySelectorAll(
    ".menuservice"
  ) as NodeListOf<HTMLLIElement>;
  const dropdownMenu = document.querySelectorAll(
    ".nav__group__dropdown"
  ) as NodeListOf<HTMLUListElement>;
  serviceNavBtn[1].addEventListener(
    "mouseenter",
    handleServiceBtnMouseEnter.bind(null, serviceNavBtnIcon[1], dropdownMenu[1])
  );
  serviceNavBtn[1].addEventListener(
    "mouseleave",
    handleServiceBtnMouseLeave.bind(null, serviceNavBtnIcon[1], dropdownMenu[1])
  );
});

//accordion click event
const container = document.querySelector(
  ".faq__column__items"
) as HTMLDivElement;

function handleAccordionClickEvent(event: Event) {
  const target = event.target as HTMLElement;
  const isAccordion =
    target.classList.contains("faq__column__items__item__group") ||
    target.closest('[data-accordion="true"]');
  if (isAccordion) {
    const accordion = target.closest(
      ".faq__column__items__item__group"
    ) as HTMLDivElement;
    if (accordion) {
      accordion.classList.toggle("faq__column__items__item__group--active");
      if (accordion.lastElementChild) {
        accordion.lastElementChild.classList.toggle(
          "faq__column__items__item__btn--active"
        );
        accordion.nextElementSibling &&
          accordion.nextElementSibling.classList.toggle(
            "faq__column__items__item__description--active"
          );
        //close open accordion items
        for (let group of groups) {
          if (
            !group.nextElementSibling?.classList.contains(
              "faq__column__items__item__description--active"
            ) &&
            group !== accordion
          ) {
            group.nextElementSibling?.classList.add(
              "faq__column__items__item__description--active"
            );
            group.lastElementChild?.classList.remove(
              "faq__column__items__item__btn--active"
            );
          }
        }
      }
    }
  }
}

if (container) container.addEventListener("click", handleAccordionClickEvent);

const handleBlurEffect = (event: Event) => {
  groups.forEach((group) => {
    if (
      group.classList.contains("faq__column__items__item__group--active") &&
      event.target !== group &&
      !group.contains(event.target as Node)
    ) {
      group.classList.remove("faq__column__items__item__group--active");
    }
  });
};

document.addEventListener("click", handleBlurEffect);

//form validation
const isValid: { error: boolean; message: string } = {
  error: true,
  message: "",
};

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
};

function validateInput(input: HTMLInputElement, regex: RegExp) {
  const errorContainer = createErrorContainer() as HTMLDivElement;
  if (!input.value.trim()) {
    input.style.borderBottomColor = "#094B72";
    if (input.nextElementSibling?.classList.contains("form__error__container"))
      input.nextSibling?.remove();
  } else if (!regex.test(input.value.trim())) {
    isValid.error = true;
    switch (input.id) {
      case "name":
        input.value.trim().length > 50
          ? (isValid.message = "Name cannot exceed 50 charracters")
          : (isValid.message = "Please Enter a valid name");
        break;
      case "email":
        isValid.message = "Please Enter a valid email";
        break;
      case "subject":
        input.value.trim().length > 100
          ? (isValid.message = "subject cannot exceed 100 charracters")
          : (isValid.message = "Please Enter a valid subject");
        break;
      case "message":
        input.value.trim().length > 250
          ? (isValid.message = "message cannot exceed 250 charracters")
          : (isValid.message = "Please Enter a valid message");
        break;
      case "referral":
        input.value.trim().length > 60
          ? (isValid.message = "referral cannot exceed 60 charracters")
          : (isValid.message = "Please Enter a valid referral");
        break;
      default:
        isValid.message = "Please enter a valid input value";
        break;
    }
    input.style.borderBottomColor = "red";
    errorContainer.textContent = isValid.message;
    if (
      input.parentNode?.querySelectorAll(".form__error__container").length === 0
    ) {
      if (input.nextSibling) {
        input.parentNode?.insertBefore(errorContainer, input.nextSibling);
      } else {
        input.parentNode?.appendChild(errorContainer);
      }
    }
  } else {
    if (input.nextElementSibling?.classList.contains("form__error__container"))
      isValid.error = false;
    input.nextSibling?.remove();
    input.style.borderBottomColor = "green";
  }
}

nameInput?.addEventListener(
  "input",
  validateInput.bind(null, nameInput, nameRegex)
);
emailInput?.addEventListener(
  "input",
  validateInput.bind(null, emailInput, emailRegex)
);
subjectInput?.addEventListener(
  "input",
  validateInput.bind(null, subjectInput, subjectRegex)
);
messageInput?.addEventListener(
  "input",
  validateInput.bind(null, messageInput, messageRegex)
);
referralInput?.addEventListener(
  "input",
  validateInput.bind(null, referralInput, referralRegex)
);

const inputs = document.getElementsByTagName(
  "input"
) as HTMLCollectionOf<HTMLInputElement>;
const terms = inputs[inputs.length - 1] as HTMLInputElement;

const handleTermsChange = () => {
  if (
    terms.checked &&
    terms.nextElementSibling?.classList.contains("form__error__container")
  ) {
    isValid.error = false;
    terms.nextSibling?.remove();
  }
};

terms.addEventListener("change", handleTermsChange);

const submitButton = document.querySelector(
  'button[type="submit"]'
) as HTMLButtonElement;

const toggleSpinner = () => {
  const loader = document.querySelector(".loader") as HTMLSpanElement;
  const svg = submitButton.querySelector("svg") as SVGSVGElement;
  svg && svg.classList.add("hidden--accordion");
  if (loader) loader.classList.toggle("hidden--accordion");
};

const disableSubmitButton = () => {
  if (submitButton) {
    submitButton.disabled = true;
    submitButton.style.backgroundColor = "grey";
  }
};

const toast = document.querySelector(".contact__toast") as HTMLDivElement;
const toastBtn = document.querySelector(
  ".contact__toast__button"
) as HTMLButtonElement;

const handleToastBtn = (event: MouseEvent) => {
  event.type === "mouseenter"
    ? toastBtn?.classList.add("contact__toast__btn--show")
    : toastBtn.classList.remove("contact__toast__btn--show");
};
toast.addEventListener("mouseleave", handleToastBtn);
toast.addEventListener("mouseenter", handleToastBtn);

const handleToastBtnClick = () => {
  const toastHeight = toast.offsetHeight;
  toast.style.transform = `translateY(${toastHeight + 20}px)`;
};

window.addEventListener("click", (event: MouseEvent) => {
  const target = event.target as HTMLElement;
  if (
    toast.classList.contains("contact__toast--active") &&
    target !== toast &&
    !toast.contains(target)
  )
    handleToastBtnClick();
});

toastBtn.addEventListener("click", handleToastBtnClick);

const displayToast = (data: JSON) => {
  const toastContent = document.querySelector(
    ".toast__content__code"
  ) as HTMLElement;
  toast.classList.add("contact__toast--active");
  const displayData: string = JSON.stringify(data, null, 2);
  toastContent.textContent = displayData;
};

const handleContactFormSubmission = () => {
  form?.addEventListener("submit", async (event: Event) => {
    event.preventDefault();
    if (!terms.checked) {
      isValid.error = true;
      const errorContainer = createErrorContainer() as HTMLDivElement;
      errorContainer.textContent = terms.id + " are required";
      errorContainer.style.top = "3.5rem";
      if (
        terms.parentNode?.querySelectorAll(".form__error__container").length ===
        0
      ) {
        if (terms.nextSibling) {
          terms.parentNode?.insertBefore(errorContainer, terms.nextSibling);
        } else {
          errorContainer.textContent = terms.id + " are required";
          terms.parentNode?.appendChild(errorContainer);
        }
      }
    }
    validateInput(nameInput, nameRegex);
    validateInput(emailInput, emailRegex);
    validateInput(subjectInput, subjectRegex);
    validateInput(messageInput, messageRegex);
    validateInput(referralInput, referralRegex);
    for (let i = 1; i < inputs.length - 2; i++) {
      if (inputs[i].value === "") {
        isValid.error = true;
        const errorContainer = createErrorContainer() as HTMLDivElement;
        errorContainer.textContent = inputs[i].id + " is required";
        if (i === inputs.length - 1) errorContainer.style.top = "3.5rem";
        if (i !== inputs.length - 1) inputs[i].style.borderBottomColor = "red";
        if (
          inputs[i].parentNode?.querySelectorAll(".form__error__container")
            .length === 0
        ) {
          if (inputs[i].nextSibling) {
            inputs[i].parentNode?.insertBefore(
              errorContainer,
              inputs[i].nextSibling
            );
          } else {
            errorContainer.textContent = inputs[i].id + " is required";
            inputs[i].parentNode?.appendChild(errorContainer);
          }
        }
      }
    }
    if (!isValid.error) {
      toggleSpinner();
      disableSubmitButton();
      const formData = new FormData(form);
      const jsonData: { [key: string]: any } = {};
      formData.forEach((value, key) => {
        jsonData[key] = value;
      });
      const jsonString: string = JSON.stringify(jsonData);
      try {
        const response: Response = await fetch(config.ENDPOINT, {
          method: "POST",
          body: jsonString,
        });
        if (response.ok) {
          const responseData: JSON = await response.json();
          displayToast(responseData);
        } else {
          console.error("there was an error");
        }
      } catch (error) {
        throw new Error("an error has occured " + error);
      }
      toggleSpinner();
      submitButton.textContent = "Message sent";
    }
  });
};

document.addEventListener("DOMContentLoaded", handleContactFormSubmission);

const createObscureDiv = () => {
  const div = document.createElement("div") as HTMLDivElement;
  div.classList.add("opacity");
  div.id = "opacity";
  header.appendChild(div);
};

createObscureDiv();
const obscure = document.getElementById("opacity") as HTMLDivElement;

let searchModalIsOpen: boolean = false;

const handleModalTrigger = (event: Event) => {
  const target = event.target as HTMLElement;
  if (target.tagName.toLowerCase() === "svg") {
    searchModal.classList.add("modal__container--active");
    searchModalIsOpen = true;
  } else {
    modal.classList.add("modal__container--active");
  }
  obscure.classList.add("opacity--active");
  document.body.style.overflow = "hidden";
};

const handleModalClose = (event: Event) => {
  const target = event.target as HTMLElement;
  if (
    target.classList.contains("modal__button__footer__close__search") ||
    target.classList.contains("modal__button__close__search") ||
    searchModalIsOpen
  ) {
    searchModal.classList.remove("modal__container--active");
    searchModalIsOpen = false;
  } else {
    modal.classList.remove("modal__container--active");
  }
  obscure.classList.remove("opacity--active");
  document.body.style.overflow = "visible";
};

if (modal && readBtn) {
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
    const buttonContainer = document.querySelector(
      ".testimonial__carousel__buttons"
    ) as HTMLDivElement;
    btn.classList.add("testimonial__carousel__button");
    buttonContainer.appendChild(btn);
  };
  let itemCount: number = carouselItems.length;
  while (itemCount > 0) {
    createCarouselBtn();
    itemCount--;
  }
};

document.addEventListener("DOMContentLoaded", generateCarouselButtons);

let currentSlide: number = 0;
const showItem = (index: number) => {
  const spanButtons = document.querySelectorAll(
    ".testimonial__carousel__button"
  ) as NodeListOf<HTMLSpanElement>;
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
  const spanButtons = document.querySelectorAll(
    ".testimonial__carousel__button"
  ) as NodeListOf<HTMLSpanElement>;
  spanButtons.forEach((span: HTMLSpanElement, index: number) => {
    span.addEventListener("click", () => showItem(index));
  });
};

document.addEventListener("DOMContentLoaded", handleCarousel);

if (modal && searchBtn) {
  searchBtn.addEventListener("click", handleModalTrigger);
  closeBtnSearch.addEventListener("click", handleModalClose);
  obscure.addEventListener("click", handleModalClose);
  headerCloseBtnSearch.addEventListener("click", handleModalClose);
}

serviceNavBtn[0]?.addEventListener(
  "mouseenter",
  handleServiceBtnMouseEnter.bind(null, serviceNavBtnIcon[0], dropdownMenu[0])
);
serviceNavBtn[0]?.addEventListener(
  "mouseleave",
  handleServiceBtnMouseLeave.bind(null, serviceNavBtnIcon[0], dropdownMenu[0])
);

const handleWindowResize = (): void => {
  if (window.innerWidth >= 800 && parentNode?.contains(burgerMenu)) {
    lines.forEach((line: HTMLSpanElement, index: number) => {
      if (index === 0) line.classList.remove("activefirst");
      if (index === 1) line.classList.remove("hidden");
      if (index === 2) line.classList.remove("activelast");
    });
    burgerMenu.classList.add("hidden");
    setTimeout(() => {
      parentNode.removeChild(burgerMenu);
    }, 200);
  }
};

window.addEventListener("resize", handleWindowResize);
