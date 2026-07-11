document.getElementById("contact-form").addEventListener("submit", function (e) {

    e.preventDefault();

    const nome = document.getElementById("c-nome").value.trim();
    const endereco = document.getElementById("c-endereco").value.trim();
    const email = document.getElementById("c-email").value.trim();
    const mensagem = document.getElementById("c-msg").value.trim();

    // Validação
    if (nome === "") {
        alert("Informe seu nome.");
        document.getElementById("c-nome").focus();
        return;
    }

    if (email === "") {
        alert("Informe seu e-mail.");
        document.getElementById("c-email").focus();
        return;
    }

    if (mensagem === "") {
        alert("Digite uma mensagem.");
        document.getElementById("c-msg").focus();
        return;
    }

    if (endereco === "") {
        alert("Informe seu endereço.");
        document.getElementById("c-endereco").focus();
        return;
    }

    const texto =
        `Olá! Gostaria de mais informações.

👤 Nome: ${nome}
📞 Endereço: ${endereco}
📧 E-mail: ${email}

💬 Mensagem:
${mensagem}`;

    const url = `https://wa.me/5583996004554?text=${encodeURIComponent(texto)}`;

    window.open(url, "_blank");

});