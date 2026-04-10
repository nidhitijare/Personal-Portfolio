from flask import Flask, request

app = Flask(__name__)

@app.route("/contact", methods=["POST"])
def contact():
    data = request.json
    print(data)
    return {"message": "Received"}

app.run(debug=True)