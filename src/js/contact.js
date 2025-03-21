
function contactByWhatsapp() {
    const numeroTelefone = '68999899039';
    
    const nome = document.querySelector('#nome').value;
    const email = document.querySelector('#email').value;
    const msg = document.querySelector('#msg').value;
    
    const mensagem = 
        `Olá! me chamo ${nome}, Gostaria de mais informações!, minhas informações:
            *Nome:* ${nome}
            *email:* ${email}

            ${msg}
        `

    const urlWhatsApp = `https://wa.me/${numeroTelefone}?text=${mensagem}`;

    window.open(urlWhatsApp, '_blank').focus();
}

const button = document.querySelector("#enviar");

button.addEventListener("click", contactByWhatsapp)