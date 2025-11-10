// Smooth scroll for anchor links
document.addEventListener('click', function(e){
  if(e.target.matches('a[href^="#"]')){
    e.preventDefault();
    document.querySelector(e.target.getAttribute('href')).scrollIntoView({behavior:'smooth'});
  }
});
