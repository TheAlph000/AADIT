let menu = document.querySelector(".wrapper-menu");
let sidebar = document.querySelector(".sidebar");
let chatTextArea = document.querySelector("#chat-text-area");

menu.addEventListener("click", function () {
  menu.classList.toggle("open");
  if (sidebar.style.left === "30%") {
    sidebar.style.left = "100%";
  } else if (sidebar.style.left === "50%") {
    sidebar.style.left = "100%";
  } else sidebar.style.left = "50%";
});
