const sender = document.querySelector('.whatsapp')
sender.addEventListener('click', function () {
    console.log(sender)
})
const dataFormat = () => {
    return new Intl.DateTimeFormat("pt-BR").format(new Date())
}
export default dataFormat
