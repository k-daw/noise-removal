from scipy.io import wavfile
import noisereduce as nr
import wavio
import soundfile as sf
from noisereduce.generate_noise import band_limited_noise
import matplotlib.pyplot as plt
import urllib.request
import numpy as np
import io


input_sound = wavio.read("/Users/DAW/Desktop/sound_input_with_noise.wav")
input_noise = wavio.read("/Users/DAW/Desktop/noise.wav")
sound = input_sound.data.astype(float).flatten()
noise = input_noise.data.astype(float).flatten()
reduced_noise = nr.reduce_noise(audio_clip=sound, noise_clip=noise, verbose=True)
wavio.write('noise_reduced.wav', reduced_noise, input_sound.rate, sampwidth=3  )

print('Done')