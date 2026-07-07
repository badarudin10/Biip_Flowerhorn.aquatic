const SCRIPT_URL = "URL_DEPLOY_ANDA";

async function fetchData(sheetName) {
    try {
        const response = await fetch(`${SCRIPT_URL}?sheet=${sheetName}`);
        return await response.json();
    } catch (error) {
        console.error("Error:", error);
        return [];
    }
}
