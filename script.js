const colorBox = document.getElementById("colorBox");
const colorCode = document.getElementById("colorCode");
const generateButton = document.getElementById("generateButton");

// Gerar cor hexadecimal aleatória
function generateRandomColor() {
    const randomColor = `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, "0")}`;
    return randomColor;
}

//Função para atualizar a cor da caixa e o texto do código
function updateColor() {
    const newColor = generateRandomColor();
    colorBox.style.backgroundColor = newColor;
    colorCode.textContent = newColor;
}

//Evento para botão
generateButton.addEventListener("click", updateColor);

//Gera cor inicial ao carregar a página
updateColor()