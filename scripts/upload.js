// === Constants ===
const UPLOAD_URL =
	"https://script.google.com/macros/s/AKfycbxYZ8UImeiZsb6n_dTzeDXWNuAcBlrXWylmf-tR58CbJBi5FOfJVTwFXcJMxohzfzls/exec"; // Replace with your actual upload URL

document.getElementById("uploadForm").onsubmit = async (e) => {
	e.preventDefault();
	const file = document.getElementById("fileInput").files[0];
	if (!file) {
		alert("Please select a file first.");
		return;
	}

	// Convert file to Base64 so Apps Script can handle it easily
	const reader = new FileReader();
	reader.onloadend = async () => {
		const base64 = reader.result.split(",")[1];

		const res = await fetch(
			"https://script.google.com/macros/s/AKfycbxYZ8UImeiZsb6n_dTzeDXWNuAcBlrXWylmf-tR58CbJBi5FOfJVTwFXcJMxohzfzls/exec",
			{
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify({
					filename: file.name,
					mimeType: file.type,
					data: base64,
				}),
			}
		);

		const text = await res.text();
		alert("Server response: " + text);
	};
	reader.readAsDataURL(file);
};
