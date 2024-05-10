  document.querySelectorAll('.sidenav ').forEach(link => {
    link.addEventListener('click', closeNav);
  });



function openNav() {
  document.getElementById("sidenav").style.width = "250px";
  document.addEventListener('click', closeNavOutside);
}

function closeNav() {
  document.getElementById("sidenav").style.width = "0";
  document.querySelector('.main').style.marginLeft = "0";
  document.removeEventListener('click', closeNavOutside);
}

function closeNavOutside(event) {
  const sidenav = document.getElementById("sidenav");
  const main = document.querySelector('.main');
  if (!sidenav.contains(event.target) && !main.contains(event.target)) {
    closeNav();
  }
}


