// Because classes are not hoisted you will need to start your code at the bottom of the page.  Look for the comment "START HERE"

class Article {
  constructor(domElement) {

    // assign this.domElement to the passed in domElement
    this.domElement = domElement;

    // create a reference to the ".expandButton" class. 
    this.expandButton = domElement.querySelector('.expandButton');

    // Using your expandButton reference, update the text on your expandButton to say "expand"
    this.expandButton.textContent = "Click to Expand";
    this.expandButton.style.backgroundColor = "rgba(0, 0, 0, 0)";
    
    // Set a click handler on the expandButton reference, calling the expandArticle method.
    this.expandButton.addEventListener('click', this.expandArticle.bind(this));
    // For Stretch:
    // this.expandButton.addEventListener('click', expandArticleTween.bind(this));
    
  }

  expandArticle() {
    // Using our reference to the domElement, toggle a class to expand or hide the article.
    this.domElement.style.transition = "height 1s";
    this.domElement.classList.toggle('article-open');
    if (this.expandButton.textContent == "Click to Expand") {
      this.expandButton.textContent = "Click to Collapse";
    } else {this.expandButton.textContent = "Click to Expand";}
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
}, 0.6)


//======================SUBMIT FORM===============================//
const submitBtn = document.querySelector(".submit");
submitBtn.addEventListener("click", event => {
  event.preventDefault(); //Prevents loading of page


  //Assigning some values from the form
  const heading = document.querySelector('input');
  const content = document.querySelector('textarea');
  const pArray = content.value.split('\n').filter(paragraph => paragraph !== '');


  // If there is no text in both forms, then the form should not run (WIP)
  if (!heading.value || !content.value) {
    alert("Please fill out both pieces to the form.");

    // Otherwise, make the new article!
  } else {


    //Creating new article div
    const newArticle = document.createElement('div');
    newArticle.classList.add('article');


    //Creating header and applying text
    const h2 = document.createElement('h2');
    h2.textContent = String(heading.value);
    newArticle.appendChild(h2);


    //Creating date with proper formatting
    const date = document.createElement('p');
    date.setAttribute('class', 'date')
    const options = {month: "long", day: "numeric", year: "numeric"};
    date.textContent = new Date().toLocaleDateString("en-US", options);
    newArticle.appendChild(date);


    //Creating paragraphs and applying text
    let p;
    pArray.forEach(paragraph => {
      p = document.createElement('p');
      p.textContent = paragraph;
      newArticle.appendChild(p);
    });


    //Creating empty span (will receive text after passing through constructor)
    const button = document.createElement('span');
    button.setAttribute('class', 'expandButton');
    newArticle.appendChild(button);


    //Appending the new article into the full 'articles' div, and running the article through the constructor
    const allArticles = document.querySelector('.articles');
    allArticles.appendChild(newArticle);
    new Article(newArticle);
  }
})