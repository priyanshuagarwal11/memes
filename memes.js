async function generateMeme() {
    const response = await fetch("https://meme-api.com/gimme");
    const data = await response.json();

    document.getElementById("memeImg").src = data.url;
    document.getElementById("memeTitle").innerText = data.title;
}

// Load first meme automatically
generateMeme();
