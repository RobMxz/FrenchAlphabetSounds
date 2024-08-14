# 📥 FrenchAplhabetSounds

Este proyecto consta de dos scripts en JavaScript y Python para extraer y descargar archivos de audio desde una página web.

## 🚀 **1. Extraer URLs de Audio desde HTML**

Este script utiliza Puppeteer para leer un archivo HTML, extraer URLs de archivos de audio, y guardarlas en un archivo JSON.

### 📄 **Archivo**: `index.js`

#### 🛠 **Requisitos**

- Node.js
- Puppeteer

#### 🔧 **Cómo Usar**

1. Instala las dependencias:
   ```bash
   npm install puppeteer
   ```
2. Asegúrate de tener un archivo output.html en el mismo directorio que `index.js`.

3. Ejecuta el script:
   ```
   node index.js
   ```
4. Los enlaces a los archivos de audio se guardarán en output.json.

## 🎵 **2. Descargar Archivos de Audio**

Este script en Python descarga los archivos de audio desde las URLs extraídas y las guarda en una carpeta.

### 📄 **Archivo**: `main.py`

#### 🛠 **Requisitos**

- Python 3
- Requests

#### 🔧 **Cómo Usar**

1. Instala las dependencias:
   ```bash
   pip install requests
   ```
2. Asegúrate de tener el archivo `output.json` en el mismo directorio que `main.py`.

3. Ejecuta el script:

   ```
   python main.py
   ```

4. Los archivos de audio se guardarán en la carpeta Sounds.

## 💡 **Notas Adicionales**

- **API_KEY**: Si deseas utilizar una API para obtener el HTML dinámicamente, asegúrate de definir `API_KEY` en tus variables de entorno.
- **Estructura de Carpetas**: El script Python crea automáticamente una carpeta llamada `Sounds` para almacenar los archivos descargados.

## 📋 **Licencia**

Este proyecto es libre para usar y modificar. ¡Siéntete libre de contribuir o hacer preguntas!

---

¡Gracias por utilizar estos scripts! 🚀🎧
