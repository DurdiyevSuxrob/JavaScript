const div1 = document.getElementById('div1')
div1.addEventListener("click", () => {
    console.log("Sichqonchani chap tarafni bir marta bosdingiz !");
    div1.style.backgroundColor = "red"
    div1.style.width = "600px"
    div1.style.height = "200px"
    div1.style.transition = "1s"
    div1.innerHTML =`
    <button style = "width: 100px; height: 60px; border: none; background-color: green; color: white;">Send</button>

    `
})
const div2 = document.getElementById('div2')
div2.addEventListener("dblclick", () => {
     console.log("Sichqonchani chap tarafni ikki marta bosdingiz !");
})

const button1 = document.getElementById('button1')
const arr = document.getElementById('add')
button1.addEventListener("click", () => {
    console.log("ishladi");
    
    button1.innerHTML = `
    <button style = "
    width: 300px;
    height: 70px;
    background-color: green;
    border-radius: 10px;
    font-size: 25px;
    transition: 1s;
    border: none;
    ">✅ Tolov Qilindi!</button>
    
    `
    arr.play()
})
