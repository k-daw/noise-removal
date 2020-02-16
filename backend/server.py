from flask import Flask
from flask import request



app = Flask(__name__)

@app.route("/")
def home():
    return "Hellow Noob!"

@app.route('/noise_profile', methods = ["POST"])
def get_noise():
    if request.method == 'POST':
        print('RECEIVED POST REQUEST')
        data = request.files
        print(type(data['file']))
        data['file'].save('file.mp3')



    return 'GOOD BOY'

if __name__ == "__main__":
    app.run(debug=True)