from flask import Flask
from flask import request, jsonify



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
        data['file'].save('noise.mp3')
    return jsonify({'success': 'true'})

@app.route('/sound_input', methods = ["POST"])
def sound_input():
    if request.method == 'POST':
        print('RECEIVED POST REQUEST')
        data = request.files
        data['file'].save('sound.mp3')
    return jsonify({'success': 'true'})



if __name__ == "__main__":
    app.run(debug=True)