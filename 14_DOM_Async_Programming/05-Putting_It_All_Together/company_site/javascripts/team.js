document.addEventListener('DOMContentLoaded', () => {
  let teamList = document.querySelector('.team-list');
  let overlay = document.querySelector('.overlay');

  teamList.addEventListener('click', e => {
    e.preventDefault();

    if (!['A', 'IMG'].includes(e.target.tagName)) return;
    
    let modal = document.querySelector('.modal');
    let teamMemberLink = e.target.closest('a');

    document.querySelector('.modal img').setAttribute('src', teamMemberLink.getAttribute('data-image-source'))
    document.querySelector('.modal h3').textContent = teamMemberLink.dataset.name
    document.querySelector('.modal p').textContent = teamMemberLink.dataset.text

    modal.style.display = 'block';
    overlay.style.display = 'block';
  });

  overlay.addEventListener('click', () => {
    overlay.style.display = 'none';
  });

  document.addEventListener('keydown', e => {
    if (e.key === 'Escape' && overlay.style.display === 'block') {
      overlay.style.display = 'none';
    }
  });
});