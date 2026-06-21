const whatsapp = document.getElementById("whatsapp");
const agendarBtn = document.getElementById("agendarBtn");

function abrirWhatsapp() {
    const numero = "5500000000000";

    const mensagem =
        "Olá! Gostaria de agendar um horário.";

    const link =
        `https://wa.me/${numero}?text=${encodeURIComponent(mensagem)}`;

    window.open(link, "_blank");
}

whatsapp.addEventListener("click", abrirWhatsapp);
agendarBtn.addEventListener("click", abrirWhatsapp);