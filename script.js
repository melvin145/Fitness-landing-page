const Navbar = document.getElementById("navbar");
const bar = document.getElementById("bar");
const close = document.getElementById("close");
bar.addEventListener("click", () => {
  Navbar.style.display = "flex";
  bar.style.display = "none";
  close.style.display = "block";
});

close.addEventListener("click", () => {
  Navbar.style.display = "none";
  bar.style.display = "block";
  close.style.display = "none";
});
