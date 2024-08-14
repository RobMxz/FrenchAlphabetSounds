import requests
import json
import os

def download_audio(url, filename):
    response = requests.get(url)
    if response.status_code == 200:
        with open(filename, 'wb') as file:
            file.write(response.content)
        print(f'Archivo descargado y guardado como {filename}')
    else:
        print(f'Error al descargar {url}: {response.status_code}')

# Crear la carpeta "Sounds" si no existe
output_dir = 'Sounds'
os.makedirs(output_dir, exist_ok=True)

# Cargar los enlaces desde el archivo JSON
with open('output.json', 'r') as file:
    audio_urls = json.load(file)

# Descargar cada archivo de audio
for url in audio_urls:
    # Obtener el nombre del archivo a partir de la URL
    filename = os.path.basename(url)
    # Crear la ruta completa del archivo en la carpeta "Audios"
    filepath = os.path.join(output_dir, filename)
    # Llamar a la función para descargar el archivo
    download_audio(url, filepath)
