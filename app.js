const main = document.querySelector("main");
const boxes = Array.from(document.querySelectorAll(".box-container"));
const stars = Array.from(document.querySelectorAll(".star"));
const textRatings = Array.from(
  document.querySelectorAll(".text-container__text")
);
const textContainer = document.querySelector(".text-container");

let isNotClicked = true;
console.log(isNotClicked);

function stateChecker() {
  if (isNotClicked) {
    console.log("keep executing");
  } else {
    console.log("stopped!!");
    return;
  }
}

// stateChecker()

const test = () => {
  if (isNotClicked) {
    console.log("keep executing");
  } else {
    console.log("stopped!!");
    return;
  }
};

const handleMouseClickBox = (e) => {
  if (isNotClicked) {
    const currentTarget = e.target;
    // !ANOTHER APPROACH --> Start
    if (currentTarget.classList.contains("box-container")) {
      e.target.children[0].classList.add("clicked-star");
      const currentTargetIndex = boxes.indexOf(currentTarget);
      for (const [index, text] of Object.entries(textRatings)) {
        if (currentTargetIndex === Number(index)) {
          text.classList.remove("show-text");
          text.classList.add("chosen-text");
        }
      }
      isNotClicked = false;
    }

    if (currentTarget.classList.contains("star")) {
      currentTarget.classList.add("clicked-star");
      const currentTargetIndex = stars.indexOf(currentTarget);
      for (const [index, text] of Object.entries(textRatings)) {
        if (currentTargetIndex === Number(index)) {
          text.classList.remove("show-text");
          text.classList.add("chosen-text");
        }
      }
      isNotClicked = false;
    }
  }
  // !ANOTHER APPROACH --> End

  // if (e.target.children[0]) {
  // e.target.children[0].classList.add("clicked-star");
  // console.log(e.target.children[0]);
  //   isNotClicked = false;
  // console.log(stateChecker());

  //   const currentBox = e.target;
  //   const currentBoxIndex = boxes.indexOf(currentBox);
  //   for (const [index, text] of Object.entries(textRatings)) {
  //     if (currentBoxIndex === Number(index)) {
  //       text.classList.remove("show-text");
  //       //   text.classList.remove("remove-text");
  //       text.classList.add("chosen-text");
  //     }
  //   }

  //   if (e.target.classList.contains("star")) {
  //       e.target.classList.add("clicked-star");
  //     }
  // }
  //   }
};

// ! Boxes
const handleMouseEnterBox = (e) => {
  if (isNotClicked) {
    const currentBox = e.target;
    //   currentBox.classList.add("colored");
    const currentStar = e.target.children[0];
    currentStar.classList.add("colored-star");
    const currentBoxIndex = boxes.indexOf(currentBox);
    const previousBoxesArr =
      currentBoxIndex !== -1 ? boxes.slice(0, currentBoxIndex) : [];
    for (let el of previousBoxesArr) {
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
  }
};

// console.log(handleMouseEnterBox());

const handleMouseLeaveBox = (e) => {
  if (isNotClicked) {
    const currentBox = e.target;
    const currentBoxIndex = boxes.indexOf(currentBox);
    const leftBorder = e.target.getBoundingClientRect().left;
    const posX = e.clientX;
    const starsInBoxes = e.target.children[0];

    if (posX <= leftBorder) {
      starsInBoxes.classList.remove("colored-star");
    }

    //   text
    for (const [index, text] of Object.entries(textRatings)) {
      if (currentBoxIndex === Number(index)) {
        text.classList.remove("show-text");
        text.classList.add("remove-text");
      }
    }
  }
};

const handleMouseLeaveMain = (e) => {
  if (isNotClicked) {
    const allBoxes = e.target.children;
    Array.from(allBoxes).forEach((el) => {
      el.classList.remove("colored");
    });

    Array.from(stars).forEach((el) => {
      el.classList.remove("colored-star");
    });
  }
};

main.addEventListener("mouseleave", handleMouseLeaveMain);

for (const box of Array.from(boxes)) {
  box.addEventListener("mouseenter", handleMouseEnterBox);
  box.addEventListener("mouseleave", handleMouseLeaveBox);
  box.addEventListener("click", handleMouseClickBox);
}
// const testArr = []
// const test = Array.from(main.children).forEach((el) => {
//   const eachStar = el.children[0]
//   testArr.push(eachStar)
// });
// console.log(testArr);
