from flask import Flask, send_from_directory

app = Flask(__name__)

@app.route('/')
def home():
    return send_from_directory('.', 'index.html')

@app.route('/system')
def systemed():
    return "What do you want to do?"

@app.route('/login')
def logined():
    return "What do you want to do?"

@app.route('/admin')
def admined():
    return "What do you want to do?"

if __name__ == '__main__':
    app.run(port=8080, host="0.0.0.0", debug=False) #you can change
