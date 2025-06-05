function myFunction() {
  var x = document.getElementById('myLinks');
  if (x.style.display === 'block') {
    x.style.display = 'none';
  } else {
    x.style.display = 'block';
  }
}

document.addEventListener('DOMContentLoaded', function () {
  var menu = document.getElementById('myLinks');
  //Select all links in the topnav except the hamburger icon
  var allLinks = document.querySelectorAll('.topnav a:not(.icon)');
  allLinks.forEach(function (item) {
    item.addEventListener('click', function () {
      menu.style.display = 'none';
    });
  });
});
