const main = document.querySelector("main");
const boxes = Array.from(document.querySelectorAll(".box-container"));
const stars = Array.from(document.querySelectorAll(".star"));
const textRatings = Array.from(
  document.querySelectorAll(".text-container__text")
);

const handleMouseLeaveMain = (e) => {
  const allBoxes = e.target.children;
  Array.from(allBoxes).forEach((el) => {
    el.classList.remove("colored");
  });

  Array.from(stars).forEach((el) => {
    el.classList.remove("colored-star");
  });
};

// ! Boxes
const handleMouseEnterBox = (e) => {
  const currentBox = e.target;
  //   currentBox.classList.add("colored");
  const currentStar = e.target.children[0];
  currentStar.classList.add("colored-star");
  const currentBoxIndex = boxes.indexOf(currentBox);
  const previousBoxesArr =
    currentBoxIndex !== -1 ? boxes.slice(0, currentBoxIndex) : [];
  //   console.log(previousBoxesArr);
  for (let el of previousBoxesArr) {
    // el.classList.add("colored");

    previousStars = Array.from(el.children);
    previousStars.forEach((star) => {
      star.classList.add("colored-star");
    });
  }

  // text
  for (const [index, text] of Object.entries(textRatings)) {
    if (currentBoxIndex === Number(index)) {
      text.classList.remove("remove-text");
      text.classList.add("show-text");
    }
  }
};

const handleMouseLeaveBox = (e) => {
  const currentBox = e.target;
  const currentBoxIndex = boxes.indexOf(currentBox);
  const leftBorder = e.target.getBoundingClientRect().left;
  const posX = e.clientX;
  const starsInBoxes = e.target.children[0];

  if (posX <= leftBorder) {
    starsInBoxes.classList.remove("colored-star");
  }

  for (const [index, text] of Object.entries(textRatings)) {
    if (currentBoxIndex === Number(index)) {
      text.classList.remove("show-text");
      text.classList.add("remove-text");
    }
  }
};

main.addEventListener("mouseleave", handleMouseLeaveMain);
for (const box of Array.from(boxes)) {
  box.addEventListener("mouseenter", handleMouseEnterBox);
  box.addEventListener("mouseleave", handleMouseLeaveBox);
}

// const testArr = []
// const test = Array.from(main.children).forEach((el) => {
//   const eachStar = el.children[0]
//   testArr.push(eachStar)
// });
// console.log(testArr);
