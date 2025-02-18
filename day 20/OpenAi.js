async function fetchGPTResponse() {
    try {
        const apiKey = "Your-Key"; // Replace with your actual API key
        const response = await fetch(
            "https://api.openai.com/v1/chat/completions",
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${apiKey}`,
                },
                body: JSON.stringify({
                    model: "gpt-3.5-turbo",
                    messages: [
                        {
                            role: "user",
                            content: "Give me 10 Random js project Ideas",
                        },
                    ],
                    temperature: 0.7,
                }),
            }
        );

        const data = await response.json();
    } catch (e) {
        console.log("Error", e);
    }
}

fetchGPTResponse();
