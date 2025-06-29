const GEMINI_API_KEY = import.meta.env.VITE_GEMINI_API_KEY;
const GEMINI_API_URL = `${import.meta.env.VITE_GEMINI_API_URL}?key=${GEMINI_API_KEY}`;

console.log("API KEY:", import.meta.env.VITE_GEMINI_API_KEY);
console.log("API url:", import.meta.env.GEMINI_API_URL);



export const GenerateContnet = async (message: string) => {
    if (!GEMINI_API_KEY) {
        throw new Error(" GEMINI_API_KEY is not Defined in ..")
    }

    try {
        const res = await fetch(GEMINI_API_URL, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                contents: [
                    {
                        parts: [
                            {
                                text: message,
                            }
                        ]
                    }
                ]
            })
        })

        if (!res.ok) {
            const errorrText = await res.text()
            console.log(`error response from Gemini API : ${errorrText} `)
            throw new Error(
                `Gemini APi Error : ${res.status} ${res.statusText}`
            );
        }

        const data = await res.json();
        if (!data || !data.candidates || data.candidates.length === 0) {
            throw new Error("no candidates found in the response");
        }
        console.log(data)

        return data.candidates[0].content.parts[0].text;

    } catch (error) {
        console.log("Error grnerating content:", error)
        throw error;
    }
};