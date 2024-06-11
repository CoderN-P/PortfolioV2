from flask import Flask, request, jsonify, render_template
from waitress import serve

app = Flask(__name__, template_folder='templates')


@app.route('/')
def home():
    return render_template('index.html')


if __name__ == '__main__':
    serve(app, listen='localhost:8080', url_scheme='https')


