const form = document.querySelector('.moviesForm');
const inputData= document.querySelector('.query');
const div = document.querySelector('.images');
const button = document.querySelector('.submit');
const images= document.querySelectorAll('img');

form.addEventListener('submit' , async function(e){
  e.preventDefault();
  div.classList.toggle('smallCard');
  const inputValue = inputData.value;
  const res= await axios.get('https://api.tvmaze.com/search/shows' , {params : { q : inputValue}} );
  createImage(res.data);
  inputData.value = '';
      for (var i = 0; i < images.length; i++) {
      images[i].classList.add('afterDisplay');
      }
})

button.addEventListener('click' , function(){
  let count = div.childElementCount;
  try{
    for(let i=0;i<10;i++)
  div.removeChild(document.querySelector('a'));
  }
  catch(e){
    console.log('No Element to be deleted')
  }
})
const createImage = function(movies){
  for(movie of movies)
{
    try
    {
    let anchor = document.createElement('A');
    let createImg = document.createElement('IMG');
    createImg.classList.add('sizeIt');
    createImg.src = movie.show.image.original ;
    
    setTimeout(() => {
      anchor.append(createImg);
      div.append(anchor)
    }, 1000);
    
    anchor.href =movie.show.image.original;
    }catch(e)
    {
      console.log('Image URL Missing for', movie);
    }
}}
// Things still left to be done is
//  adding video to the background 
//  optimizing the Headers
// add a loading feature to provide feedback to the user that the page is being loaded
 