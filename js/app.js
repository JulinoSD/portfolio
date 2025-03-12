import { person } from "../js/data.js";
import fetchSites from "./fetch.js";
import dataFormat from "./utils.js";

const siteList = document.querySelector('.sites')
const init = async () => {
    const sites = await fetchSites()
    if (!sites) {
        siteList.innerHTML = "<h1>Loading</h1>"
    } else {
        siteList.innerHTML = sites.map((item) => {
            const {
                screenshot_url: image,
                name: site_name, url: site_url,
                updated_at: refresh,
                account_slug: owner,
                prerender: server,
                build_settings,
                admin_url,
                published_deploy: deploy,
            } = item
            console.log(item)
            const linkSite = deploy.links.alias
            const provide = build_settings?.provider
            return `
            <li>
            <a href="${linkSite}" target="blank">
                <figure>
                    <img src="${image ? image : '../src/images/neblina_aurja.jpg'}" alt="${site_name}" />
                </figure>
                <div>
                    <h3>${site_name}</h3>
                    <a href="${build_settings.repo_url}" target="blank">
                    ${provide}
                    </a>
                    <p>por: ${owner}</p>
                    <a href="${admin_url}" target="blank">
                    ${server ? server : 'Netlify'}
                    </a>
                    <p>${dataFormat(refresh)}</p>
                </div>
            </a>
            </li>
        `
        }).join(' ')
    }

}
init()
const me = document.querySelector('.me')
me.innerHTML = person.map((item) => {
    const { name, description, image, role, education } = item
    return `
        <article class="info-card">
            <div>
                <figure>
                    <img src="${image}" alt = "${name}" />
                </figure>
                <h4>${name}</h4>
                <h5>${role}</h5>
            </div>
            <section>
            ${education.map(({ university, degree, master }) => `<h5>${university}</h5>
            <ul>
            <li>${degree} & ${master}</li>
            </ul>
            `).join(' ')}
            <p>Descrição: ${description}</p>
            </section>
        </article>
    `
}).join(' ')

window.addEventListener('load', init)