const puppeteer = require('puppeteer')
const { click, typeText, doubleClick, select } = require('../lib/helpers')

describe('Interactuando con elementos', () => {
    it('Debe darle click a el boton', async () => {
        const browser = await puppeteer.launch({
            // headless: 'new' hace que no se habara el navegador y que las pruebas sean
            // más rápidas, el headless: false siempre nos abre el navegador
            headless: false,
            defaultViewport: null, // máximiza el viewport de la página al tamaño de la ventana
        })

        const page = await browser.newPage()

        await page.goto('https://devexpress.github.io/testcafe/example/')

        await typeText(page, '#developer-name', 'Jesus', { delay: 100 })

        await click(page, '#remote-testing')

        await click(page, '#tried-test-cafe')

        await click(page, '#macos')

        await select(page, '#preferred-interface', 'Both')

        const selector = '#slider > span'

        await page.evaluate((selector) => {
            const elemento = document.querySelector(selector)
            if (elemento) {
                elemento.style.left = '66.6666%'
            }
        }, selector)

        await typeText(page, '#comments', '"Lorem ipsum"', { delay: 100 })

        await click(page, '#submit-button')

        await new Promise((resolve) => setTimeout(resolve, 8000))

        //click derecho

        // await click(page, '#authentication > span')

        //doble click

        // await doubleClick(page, '#authentication > button')

        await browser.close()
    }, 3500000)
})
