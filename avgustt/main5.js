const btn = document.getElementById("btn")
 
btn.addEventListener("click", () => {
    document.body.classList.toggle("drak")

    if (document.body.classList.contains("drak")) {
        btn.style.fontSize = "46px"
        btn.textContent = "🌑"
    } else {
        btn.style.fontSize = "46px"
        btn.textContent = "☀️"
    }
})

