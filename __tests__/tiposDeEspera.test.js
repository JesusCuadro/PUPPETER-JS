// const puppeteer = require('puppeteer')

// describe('Tipos de espera', () => {
//     it('Mostrar todos los diferentes tipos de espera', async () => {
//         const browser = await puppeteer.launch({
//             // headless: 'new' hace que no se habara el navegador y que las pruebas sean
//             // más rápidas, el headless: false siempre nos abre el navegador
//             headless: false,
//             defaultViewport: null, // máximiza el viewport de la página al tamaño de la ventana
//         })

//         const page = await browser.newPage()
//         await page.goto('https://devexpress.github.io/testcafe/example/', {waitUntil: 'networkidle0'})

//         // //Espera explicita

//         // await new Promise((resolve) => setTimeout(resolve, 5000))

//         // //Espera por un selector

//         // await page.waitForSelector('img')

//         // //Espera por un Xpath

//         // await page.waitForXPath('/html/body/div[1]/div[2]/div/img')

//         // Espera por funciones

//         await page.waitForFunction(() => document.querySelector('#main-form > div > header > h1').innerText === 'Example')

//         // Ejemplo para observar el viewport

//         const observaResize = page.waitForFunction('window.innerWidth < 100')

//         await page.setViewport({ width: 500, height: 500 })

//         await observaResize

//         await page.click('#populate')

// await page.waitForFunction(
//     () =>
//         !document.querySelector('#main-form > div > header > h1').innerText ===
//         'Example',
//     {timeout:30000}
// )

//         await browser.close()
//     }, 3500000)
// })
