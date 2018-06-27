let myFunction = () =>
  document.querySelector('#myDropdown').classList.toggle('show');

window.onclick = event => {
  if (!event.target.matches('.dropbtn')) {
    let dropdowns = document.querySelectorAll('.dropdown-content');
    for (let i = 0; i < dropdowns.length; i++) {
      let openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
};
