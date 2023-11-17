// // const puppeteer = require('puppeteer')

// // describe('Interactuando con elementos', () => {
// //     it('Debe darle click a el boton', async () => {
//         const browser = await puppeteer.launch({
//             // headless: 'new' hace que no se habara el navegador y que las pruebas sean
//             // más rápidas, el headless: false siempre nos abre el navegador
//             headless: false,
//             defaultViewport: null, // máximiza el viewport de la página al tamaño de la ventana
//         })

//         const page = await browser.newPage()

//         await page.goto('https://devexpress.github.io/testcafe/example/')

//         await page.type('#developer-name', 'Jesus', { delay: 100 })

//         await page.click('#remote-testing')

//         await page.click('#tried-test-cafe')

//         await page.click('#macos')

//         await page.select('#preferred-interface', 'Both')

//         const selector = '#slider > span'

//         await page.evaluate((selector) => {
//             const elemento = document.querySelector(selector)
//             if (elemento) {
//                 elemento.style.left = '66.6666%'
//             }
//         }, selector)

//         await page.type(
//             '#comments',
//             '"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."',
//             { delay: 100 }
//         )

//         await page.click('#submit-button')

//         await new Promise((resolve) => setTimeout(resolve, 8000))

//         //click derecho

//         await page.click('#authentication > span', {button: 'right', delay: 500})

//         //doble click

//         await page.click('#authentication > button', {
//             clickCount: 2,
//             delay: 500,
//         })

//         await browser.close()
// //     }, 3500000)
// // })
