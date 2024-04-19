const profileName = document.getElementById("profile-name");
const menu = document.getElementById("menu");

profileName.addEventListener("click", () => {
  menu.classList.toggle("active");
});


// const links = document.querySelectorAll('nav a');

// links.forEach(link => {
//     if (link.href === window.location.href) {
//         link.classList.add('active');
//     }

//     link.addEventListener('click', function() {
//         links.forEach(otherLink => {
//             otherLink.classList.remove('active');
//         });
//         this.classList.add('active');
//     });
// });

