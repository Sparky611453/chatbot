function sendMessage() {
    let userInput = document.getElementById("user-input").value;
    let chatBox = document.getElementById("chat-box");

    if (userInput.trim() === "") return;

    chatBox.innerHTML += `<p><strong>You:</strong> ${userInput}</p>`;

    fetch("https://your-backend-url/chat", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ message: userInput })
    })
    .then(response => response.json())
    .then(data => {
        if (data.reply) {
            chatBox.innerHTML += `<p><strong>Bot:</strong> ${data.reply}</p>`;
        } else {
            chatBox.innerHTML += `<p><strong>Bot:</strong> Error fetching response</p>`;
        }
    });

    document.getElementById("user-input").value = "";
}