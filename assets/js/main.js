const bars = document.querySelector(".bars")
const overlay = document.querySelector(".overlay")
const menu = document.querySelector(".headerRight ul")



bars.addEventListener("click", () => {
    overlay.classList.add("active")
    menu.classList.add("active")
})
overlay.addEventListener("click", () => {
    overlay.classList.remove("active")
    menu.classList.remove("active")
})