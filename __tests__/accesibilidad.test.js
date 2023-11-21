const puppeteer = require('puppeteer')
const { AxePuppeteer } = require('@axe-core/puppeteer')

describe('Accesibilidad', () => {
    let browser
    let page

    beforeAll(async () => {
        browser = await puppeteer.launch({
            headless: false,
            defaultViewport: null,
        })

        page = await browser.newPage()
    })

    afterAll(async () => {
        await browser.close()
    })

    test('Imprimir un objeto con los datos de la accesibilidad del sitio', async () => {

        await page.goto('https://platzi.com/')

        await page.waitForSelector('img')

        const snapshot = await page.accessibility.snapshot()

        console.log(snapshot)

        await new Promise((resolve) => setTimeout(resolve, 6000))
    }, 35000)

    test('Probar la accesibilidad con axe', async () => {

        await page.setBypassCSP(true)
        await page.goto('https://platzi.com/')
        await page.waitForSelector('img')

        const result = await new AxePuppeteer(page).analyze()

        console.log(result.violations[0].nodes[0]);

        await new Promise((resolve) => setTimeout(resolve, 6000))
    }, 35000)
})
