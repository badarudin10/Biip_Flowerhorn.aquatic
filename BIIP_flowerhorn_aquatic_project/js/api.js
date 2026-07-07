// Ganti URL di bawah ini dengan URL hasil "Deploy" dari Google Apps Script
const SCRIPT_URL = "https://script.google.com/macros/s/AKfycbwE0BO7Edo-k29UGSxxjNa2QtvXSp61TDwGs1lYTB9ItfNMBsC695l4LMxE-N2I4dHeQA/exec";

async function fetchData(sheetName) {
    try {
        const response = await fetch(`${SCRIPT_URL}?sheet=${sheetName}`);
        return await response.json();
    } catch (error) {
        console.error("Gagal mengambil data:", error);
        return [];
    }
}
