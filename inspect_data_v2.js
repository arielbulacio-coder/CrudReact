
const urlToTest = "https://693c10ecb762a4f15c3f4d4e.mockapi.io/product";

console.log("Fetching from:", urlToTest);

fetch(urlToTest)
    .then(res => {
        if (!res.ok) throw new Error(`Status: ${res.status}`);
        return res.json();
    })
    .then(data => {
        if (Array.isArray(data) && data.length > 0) {
            console.log("First item keys:", Object.keys(data[0]));
            console.log("First item structure:", JSON.stringify(data[0], null, 2));
        } else {
            console.log("Data is empty or not an array:", data);
        }
    })
    .catch(err => console.error("Error:", err.message));
