import fs from "fs/promises";
import puppeteer from "puppeteer";

const API_KEY = process.env.API_KEY;
const url =
  "https://apprendre.tv5monde.com/fr/aides/prononciation-les-lettres-de-lalphabet";

async function main() {
  //const response = await fetch(`http://api.scraperapi.com/?api_key=${API_KEY}&url=${URL}&render=true`)
  //const data = await response.text();
  // await fs.writeFile('output.html', data);
  // console.log(data);

  // Lee el archivo HTML
  const data = await fs.readFile("output.html", "utf-8");

  // Lanza un navegador
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  // Establece el contenido de la página
  await page.setContent(data);

  // Extrae el contenido de todos los divs con la clase 'jp-title'
  const titles = await page.evaluate(() => {
    // Selecciona todos los divs con la clase 'jp-title'
    const elements = document.querySelectorAll(".jp-title");
    // Extrae el texto de cada div
    return Array.from(elements).map(
      (element) =>
        "https://apprendre.tv5monde.com/sites/apprendre.tv5monde.com/files/audio/" +
        element.textContent.trim()
    );
  });

  // Imprime los resultados en la consola
  console.log(titles);

  // Escribe los resultados en un archivo JSON
  fs.writeFile("output.json", JSON.stringify(titles, null, 2));

  // Cierra el navegador
  await browser.close();
}

// Ejecuta la función principal
main();
