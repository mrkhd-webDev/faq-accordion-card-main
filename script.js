const faqTitleH2 = document.getElementsByTagName("h2");
const faqParagraf = document.getElementsByTagName("p");
const faqArrow = document.getElementsByClassName("arrow");

for (let i = 0; i < faqTitleH2.length; i++) {
  faqTitleH2[i].addEventListener("click", expandFAQ);
}

for (let i = 0; i < faqArrow.length; i++) {
  faqArrow[i].addEventListener("click", expandFAQ);
}

function expandFAQ(i) {
  const target = i.target;
  const dataId = target.getAttribute("data-id");

  faqTitleH2[dataId].classList == ""
    ? faqTitleH2[dataId].classList.add("clicked")
    : faqTitleH2[dataId].classList.remove("clicked");

  faqParagraf[dataId].classList == "d-none"
    ? faqParagraf[dataId].classList.add("d-block")
    : faqParagraf[dataId].classList.remove("d-block");

  faqArrow[dataId].classList == "arrow"
    ? faqArrow[dataId].classList.add("arrow-up")
    : faqArrow[dataId].classList.remove("arrow-up");
}
