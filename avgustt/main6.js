
const btn = document.getElementById('btn')
btn.addEventListener("click", () => {
    document.body.classList.toggle("light")

    if (document.body.classList.contains("light")) {
        btn.textContent = "🌑 Dark Mode"
    } else {
        btn.textContent =  "☀️ Dark Mode"
    }
    
})
