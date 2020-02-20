console.log('%c HI', 'color: firebrick')

document.addEventListener("DOMContentLoaded", function() {
    fetch("https://dog.ceo/api/breeds/image/random/4")
    .then((response) => {
        return response.json();
    })
    .then((myJson) => {
        console.log(myJson);
    });
  });