import { person } from "../js/data.js";
import fetchSites from "./fetch.js";
import dataFormat from "./utils.js";

const siteList = document.querySelector('.sites')
console.log(siteList)
const init = async () => {
    const sites = await fetchSites()
    console.log('Devolvendo sites', sites)
    siteList.innerHTML = sites.map(({screenshot_url:image, name:site_name, url:site_url, updated_at:refresh, account_slug:owner, prerender:server, build_settings, admin_url})=>{
        const provide = build_settings?.provider
        const path = build_settings?.repo_path
        return`
            <li>
                <figure>
                    <img src="${image}" alt="${site_name}" />
                </figure>
                <div>
                    <h3>${site_name}</h3>
                    <a href="${build_settings.repo_url}">${provide}</a>
                    <p>propietário: ${owner}</p>
                    <a href="${admin_url}">${server}</a>
                    <p>${dataFormat(refresh)}</p>
                </div>
            </li>
        `
    })

}
init()
const me = document.querySelector('.me')
me.innerHTML = person.map((item)=>{
    const {name, description, image, role, education} = item
    return `
        <article class="info-card">
            <figure>
                <img src="${image}" alt = "${name}" />
            </figure>
            <h4>${name}</h4>
            <p>${role} e Fullstack aspirante</p>
            <p>Descrição: ${description}</p>
            <section>${education.map(({university, degree, master})=>`<h4>Estudante na ${university} nos cursos de: </h4>
            <ul>
            <li>Graduação: ${degree}</li>
            <li>Mestrado: ${master}</li>
            </ul>
            `)}
            </section>
        </article>

    `
})

window.addEventListener('load', init)