
const dataFormat = () => {
    return new Intl.DateTimeFormat("pt-BR").format(new Date())
}
export default dataFormat

const getForm = document.querySelector('#contact-me')

const getEmail = getForm.addEventListener('submit', async (e) => {
    e.preventDefault()
    console.log(e)
    const name = document.getElementById('name').value;
    const celphone = document.getElementById('tel').value;
    const email = document.getElementById('email').value;
    const subject = document.getElementById('subject').value;
    const message = document.getElementById('hist');
    const status = document.getElementById('status')

    if (!name || !celphone || !email || !subject || !message) {
        status.textContent = "Preencha todos os campos!";
        status.style.color = "red";
        return;
    }

    const formData = new FormData();
    formData.append("name", name);
    formData.append("celphone", celphone);
    formData.append("email", email);
    formData.append("subject", subject);
    formData.append("message", message);

    try {
        const response = await fetch("https://formsubmit.co/ddimojulino@gmail.com", {
            method: "POST",
            mode: 'no-cors',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                name: name,
                email: email,
                message: message
            })
        });

        if (response.ok) {
            status.textContent = "Mensagem enviada com sucesso!";
            status.style.color = "green";
            document.getElementById('contact-form').reset();
        } else {
            status.textContent = "Erro ao enviar a mensagem.";
            status.style.color = "red";
        }
    } catch (error) {
        status.textContent = "Falha na conexão. Tente novamente.";
        status.style.color = "red";
    }
})
console.table(getEmail)

