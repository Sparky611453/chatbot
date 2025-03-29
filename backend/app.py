from flask import Flask, request, jsonify

app = Flask(__name__)

@app.route('/')
def home():
    return "Hello, this is the Flux Chatbot Backend!"

@app.route('/chat', methods=['POST'])
def chat():
    data = request.json
    user_message = data.get("message", "")

    # Simple response logic (Replace with your chatbot logic)
    response = {"reply": f"You said: {user_message}"}
    
    return jsonify(response)

if __name__ == '__main__':
    app.run(debug=True)
