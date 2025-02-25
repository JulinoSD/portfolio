const accessToken = "nfp_zjh59RMtLT2AiVVgMm52BJzntKsuRHiK0467"
const url = `https://api.netlify.com/api/v1/sites`

const fetchSites = async () => {
    try {
        const response = await fetch(url, {
            method: "GET",
            headers: {
                "Authorization": `Bearer ${accessToken}`,
                "Content-Type": "application/json"
            }
        });

        if (!response.ok) {
            throw new Error(`Erro: ${response.statusText}`);
        }

        const data = await response.json();
        return data
    } catch (error) {
        console.error("Erro ao buscar sites:", error);
        return []
    }
};

fetchSites();

export default fetchSites
