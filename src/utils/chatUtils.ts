export const getRandomResponse = () => {
    const botResponses = [
        "I understand your Question. Let me think about that...",
        "Thats an Interesting Point! Heres what I Know ",
        "Based on my knowledge , i can tell you than...",
        "I,d be Happy to help with that!",
        "Great Question! The Answer depends on several factors...",
    ]

    return botResponses[Math.floor(Math.random() * botResponses.length)];

};



export const formatTime = (date: Date) => {
    return date.toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
    });
};