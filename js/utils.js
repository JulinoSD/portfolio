
const dataFormat = () => {
    return new Intl.DateTimeFormat("pt-BR").format(new Date())
}
export default dataFormat

const year = document.querySelector('.copyright')

year.innerHTML = `Todos os direitos reservados &COPY; ${new Date().getFullYear()} | Javascript Fullstak`