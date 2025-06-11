const stars = document.querySelectorAll('.star-container__star')
const textContainer = document.querySelector('.text-container')
const starContainer = document.querySelector('.star-container')



const mouseEnter = (e) => {
    // !with stars
    const indexOfStar = Array.from(stars).indexOf(e.target)+1
    // console.log(`Mouse entered ${indexOfStar} star out of ${stars.length}`);
    
    // !with e.target --> (Returns HTML COLLECTION and NOT ARRAY!!)
    // console.log(e.target.parentElement.children); 

    e.target.classList.add('colored')
}

const mouseLeave = (e) => {
    const indexOfStar = Array.from(stars).indexOf(e.target)+1
    // console.log(`Mouse left ${indexOfStar} star out of ${stars.length}`);
    
    // e.target.classList.remove('colored')
    console.log(e.target.parentElement);
    
}


// stars.forEach((star, i) => {
//     star.addEventListener('mouseenter', mouseEnter)
//     star.addEventListener('mouseleave', mouseLeave)
// })


























const handleEnter = (pE) => {
    console.log('enter');
    // console.log(e.target.children);
    const stars = Array.from(pE.target.children)


    stars.forEach((el, i, arr) => {
        console.log(arr);
        el.addEventListener('mouseenter', (e) => {
            // console.log(`star #${i+1} out of ${stars.length}`);
            el.classList.add('colored')
            
           const texts = Array.from(textContainer.children)
           texts.forEach((text, ind) => {
            if(ind === i) {
                text.style.display = 'block'
                text.classList.add('show-text')
            } else {
                text.style.display = 'none'
            }

           })
        })
    })
}

const handleLeave = (pE) => {
    console.log('left');
    const stars = Array.from(pE.target.children)
    stars.forEach((el)=> {
        if(el.classList.contains('colored')) {
            el.classList.remove('colored')
        }
    })
}

starContainer.addEventListener('mouseenter', handleEnter)
starContainer.addEventListener('mouseleave', handleLeave)
