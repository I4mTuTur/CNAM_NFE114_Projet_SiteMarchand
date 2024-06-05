function openNav() {
  document.getElementById("mypanel").style.width = "250px";
  document.getElementById("content").style.marginLeft = "250px";
}

function closeNav() {
  document.getElementById("mypanel").style.width = "0";
  document.getElementById("content").style.marginLeft = "0";
}

// Add event listeners to all mainTitle elements
document.querySelectorAll('.mainTitle > a').forEach(function(element) {
  element.addEventListener('click', function() {
      let secTitle = this.nextElementSibling;
      if (secTitle && secTitle.classList.contains('secTitle')) {
          secTitle.style.display = secTitle.style.display === 'block' ? 'none' : 'block';
      }
  });
});
