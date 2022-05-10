x=document.getElementById("inputText").value

document.getElementById("inputText").addEventListener("input", x=>{
    document.querySelector('h1').innerHTML=x
    localStorage.setItem("nome",x)
}
)



// const atualiza = (element) =>{
//     valor=element.value
//     document.querySelector('h1').innerHTML=valor
//     localStorage.setItem('nome',valor)
// }atualiza(this)