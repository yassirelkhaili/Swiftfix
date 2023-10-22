//fun typescript practice (╯°□°）╯︵ ┻━┻
 
const navGroupBurgerDiv = document.createElement('div') as HTMLDivElement;
const parentNode: HTMLElement | null = document.querySelector("header");
const navGroupBtn = document.createElement('a') as HTMLAnchorElement;
const navChild: HTMLElement | null = document.getElementById("search");
const navGroup: Element | null = document.querySelector(".nav__group");
const linesArr: Array<HTMLSpanElement> = new Array <HTMLSpanElement>;
const groups = document.querySelectorAll(".faq__column__items__item__group");
const form = document.querySelector("form") as HTMLFormElement;

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

container.addEventListener("click", handleAccordionClickEvent);

const handleBlurEffect = (event: Event) => {
    groups.forEach((group) => {
      if (group.classList.contains("faq__column__items__item__group--active") && event.target !== group && !group.contains(event.target as Node)) {
        group.classList.remove("faq__column__items__item__group--active");
      }
    })
}

document.addEventListener("click", handleBlurEffect);











