const puppeteer = require('puppeteer')

describe('Mi primer test en puppeteer', () => {
    it('Debe de abrir y cerrar el navegador', async () => {
        const browser = await puppeteer.launch({
            // headless: 'new' hace que no se habara el navegador y que las pruebas sean
            // más rápidas, el headless: false siempre nos abre el navegador
            headless: false,
            defaultViewport: null, // máximiza el viewport de la página al tamaño de la ventana
        })

        const page = await browser.newPage()
        await page.goto('https://google.com/')
        // await new Promise((resolve) => setTimeout(resolve, 5000))
        // Recargar la pagina
        await page.reload()
        await page.waitForSelector('img')

        //Navegar a otro sitio
        await page.goto('https://github.com/')
        await page.waitForSelector('img')

        await new Promise((resolve) => setTimeout(resolve, 2000))

        //Navegar hacia atras
        await page.goBack()
        // await page.waitForSelector('img')

        // Navegar hacia adelante
        await page.goForward()

        //Abrir otra pagina
        const page2 = await browser.newPage()
        await page2.goto('https://platzi.com/')

        await page.bringToFront()
        await page.waitForSelector('h1')

        await new Promise((resolve) => setTimeout(resolve, 2000))

        await browser.close()
    }, 3500000)
})
