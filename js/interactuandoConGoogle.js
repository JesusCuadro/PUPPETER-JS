const puppeteer = require('puppeteer')

describe('Interactuando con elementos de google', () => {
    it('Escribir y darle click a el boton de buscar', async () => {
        const browser = await puppeteer.launch({
            // headless: 'new' hace que no se habara el navegador y que las pruebas sean
            // más rápidas, el headless: false siempre nos abre el navegador
            headless: false,
            defaultViewport: null, // máximiza el viewport de la página al tamaño de la ventana
        })

        const page = await browser.newPage()

        await page.goto('https://www.google.com/')

        await page.type('#APjFqb', 'Empresas floricultoras en Madrid, Cundinamarca')

        await page.keyboard.press('Enter');

        await new Promise((resolve) => setTimeout(resolve, 10000))

        //click derecho

        // await page.click('#authentication > span', {button: 'right', delay: 500})

        //doble click

        // await page.click('#authentication > button', {
        //     clickCount: 2,
        //     delay: 500,
        // })

        await browser.close()
    }, 3500000)
})
