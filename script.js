document.addEventListener("DOMContentLoaded", function() {
    const form = document.querySelector("form");

    form.addEventListener("submit", function(event) {
        event.preventDefault(); // Impede o envio padrão do formulário

        // Exibe mensagem de confirmação
        const confirmationMessage = document.createElement("p");
        confirmationMessage.textContent = "O formulário foi enviado com sucesso!";
        confirmationMessage.classList.add("confirmation-message"); // Adiciona classe
        form.insertAdjacentElement("afterend", confirmationMessage);

        // Redireciona para a página inicial após 3 segundos
        setTimeout(function() {
            window.location.href = "index.html";
        }, 3000);
    });
});
