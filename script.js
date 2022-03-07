console.log("script running...");
document.querySelector(".cancel").style.display = "none";
document.querySelector(".hamburger").addEventListener("click", () => {
  document.querySelector(".sidebar").classList.toggle("sidebarGo");
  if (document.querySelector(".sidebar").classList.contains("sidebarGo")) {
    document.querySelector(".hamburger").style.display = "inline";
    document.querySelector(".cancel").style.display = "none";
  } else {
    document.querySelector(".hamburger").style.display = "none";
    document.querySelector(".cancel").style.display = "inline";
  }
});
