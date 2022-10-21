document.addEventListener('DOMContentLoaded', () => {
  let heroImg = document.querySelector('figure img');
  let thumbnails = document.querySelectorAll('ul img');


  function activateImg(e) {
    thumbnails.forEach(thumbnail => thumbnail.classList.remove('active'));
    e.target.classList.add('active');

    let src = e.target.getAttribute('src');

    heroImg.src = src;

  }


  thumbnails.forEach(thumbnail => {
    thumbnail.addEventListener('click', activateImg);
  })

  console.log(thumbnails);
})