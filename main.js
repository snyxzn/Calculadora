const display = document.querySelector("#display"); // O QuerySelector retorna o primeiro elemento dentro do documento. # pois é uma id 

const buttons = document.querySelectorAll ("button"); // Retorna uma lista de elementos dentro do documento. sem # pois é um elemento, e se for classe, um ponto.

// JS é case sensitive 

buttons.forEach((btn) => { //para cada botão

btn.addEventListener ("click", () => { //adicionaremos um evento. 

if (btn.id === "=") { //=== se for exatamente igual, irá transormar no valor.
    display.value = eval(display.value); //eval para dizer que é numero, ao invés de adicionar um sinal de igual.

} else if (btn.id === "c") {

    display.value = ""; // para apagar o valor, deixar vazio, valor em branco.
    
} else if (btn.id === "de") {

    display.value = display.value.slice (0,-1); // 
} else{
    display.value += btn.id

}

})

})

