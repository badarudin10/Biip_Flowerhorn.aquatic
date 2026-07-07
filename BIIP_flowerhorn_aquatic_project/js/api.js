// Ganti URL di bawah ini dengan URL hasil "Deploy" dari Google Apps Script
const SCRIPT_URL = "https://script.google.com/macros/s/AKfycbzfBiMc0E1TTgailOt3cW5f_Ve3-PviB18vvvnjWatSwiviU2pHVXrI9gjyVEpH8Rcjdg/exec";

async function fetchData(sheetName) {
    try {
        const response = await fetch(`${SCRIPT_URL}?sheet=${sheetName}`);
        return await response.json();
    } catch (error) {
        console.error("Gagal mengambil data:", error);
        return [];
    }
}
