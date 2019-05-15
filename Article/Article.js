// Because classes are not hoisted you will need to start your code at the bottom of the page.  Look for the comment "START HERE"

class Article {
  constructor(domElement) {

    // assign this.domElement to the passed in domElement
    this.domElement = domElement;

    // create a reference to the ".expandButton" class. 
    this.expandButton = domElement.querySelector('.expandButton');

    // Using your expandButton reference, update the text on your expandButton to say "expand"
    this.expandButton.textContent = "expand";
    
    // Set a click handler on the expandButton reference, calling the expandArticle method.
    this.expandButton.addEventListener('click', this.expandArticle.bind(this));
    // For Stretch:
    // this.expandButton.addEventListener('click', expandArticleTween.bind(this));
    
  }

  expandArticle() {
    // Using our reference to the domElement, toggle a class to expand or hide the article.
    this.domElement.style.transition = "height, 1s";
    this.domElement.classList.toggle('article-open');
    if (this.expandButton.textContent == "expand") {
      this.expandButton.textContent = "collapse";
    } else {this.expandButton.textContent = "expand";}
  }
}

/* START HERE: 

- Select all classes named ".article" and assign that value to the articles variable.  

- With your selection in place, now chain .forEach() on to the articles variable to iterate over the articles NodeList and create a new instance of Article by passing in each article as a parameter to the Article class.

*/

let articles = document.querySelectorAll('.article');

articles.forEach(art => new Article(art))

//===========================STRETCH=================================//




//===========TWEEN ANIMATION FOR ARTICLES===============//

TweenMax.staggerFrom(".article", 1, {
  opacity: 0,
  x: -400,
  delay: 0.5
}, 0.2)



const submitBtn = document.querySelector(".submit");
submitBtn.addEventListener("click", event => {
  const heading = document.querySelector('input');
  const content = document.querySelector('textarea');
  const pArray = content.textContent.split('\n').filter(paragraph => paragraph !== '');

  const newArticle = document.createElement('div');
  newArticle.classList.add('article');

  const h2 = document.createElement('h2');
  h2.textContent = heading.textContent;
  newArticle.appendChild(h2);

  let p;
  pArray.forEach(paragraph => {
    
  })
})