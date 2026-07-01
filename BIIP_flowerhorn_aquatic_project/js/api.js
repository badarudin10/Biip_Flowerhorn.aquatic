const SCRIPT_URL = "URL_APPS_SCRIPT_ANDA_DISINI";

async function fetchFromSheet(sheetName) {
    const response = await fetch(`${SCRIPT_URL}?sheet=${sheetName}`);
    return await response.json();
}

async function sendData(action, payload) {
    await fetch(SCRIPT_URL, {
        method: 'POST',
        body: JSON.stringify({ action: action, ...payload })
    });
}
