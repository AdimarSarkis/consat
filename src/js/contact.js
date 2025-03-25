function contactByWhatsapp(event) {
    event.preventDefault(); // Previne o comportamento padrão do botão

    const numeroTelefone = '68999899039'; // Número de telefone do destinatário
    
    const nome = document.querySelector('#nome').value;
    const email = document.querySelector('#email').value;
    const msg = document.querySelector('#msg').value;

    console.log('Nome:', nome);
    console.log('Email:', email);
    console.log('Mensagem:', msg);

    const mensagem = 
    `Olá! Me chamo ${nome}, gostaria de mais informações. Minhas informações:
    *Nome:* ${nome}
    *Email:* ${email}
    
    ${msg}
    `;


    // Usando a URL padrão do WhatsApp para garantir compatibilidade
    const urlWhatsApp = `https://wa.me/${numeroTelefone}?text=${encodeURIComponent(mensagem)}`;

    console.log('URL WhatsApp:', urlWhatsApp);

    // Abrir a URL do WhatsApp
    window.location.href = urlWhatsApp;
}

const button = document.querySelector("#enviar");

if (button) {
    button.addEventListener("click", contactByWhatsapp);
} else {
    console.error('Botão não encontrado');
}
