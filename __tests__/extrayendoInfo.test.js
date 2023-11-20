const puppeteer = require('puppeteer')
const { getText, getCount } = require('../lib/helpers')

describe('Extrayendo informacion', () => {
    let browser
    let page

    // beforeEach(async () => {
    //     browser = await puppeteer.launch({
    //         headless: false,
    //         defaultViewport: null,
    //     })

    //     page = await browser.newPage()
    // })

    // afterEach(async () => {
    //     await browser.close()
    // })

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

    // it('Extraer el titulo de la pagina y la url', async () => {
    //     await page.goto('https://devexpress.github.io/testcafe/example/', {
    //         waitUntil: 'networkidle0',
    //     })

    //     const titulo = await page.title()
    //     const url = await page.url()

    //     console.log(titulo, ' + ', url)
    // }, 3500000)

    it('Extraer la informacion de un elemento', async () => {
        await page.goto('https://devexpress.github.io/testcafe/example/', {
            waitUntil: 'networkidle0',
        })

        // Con css selectors

        await page.waitForSelector(
            '#main-form > div > div.form-bottom > fieldset:nth-child(2) > legend'
        )

        //Corre un document query selector

        const nombreLeyenda = await getText(page, '#main-form > div > div.form-bottom > fieldset:nth-child(2) > legend')
        console.log('Leyenda: ', nombreLeyenda)
    }, 350000)

    // jest.setTimeout(10000)

    // it('Contar los elementos de una pagina', async () => {
    //     page.setDefaultTimeout(10000)
    //     page.setDefaultNavigationTimeout(10000)

    //     await page.goto('https://amazon.com/', {
    //         waitUntil: 'networkidle0',
    //     })

    //     //Corre un document query selector all

    //     const imagenes = await page.$$eval('img', (imagenes) => imagenes.length)
    //     console.log('Estas son las imagenes que hayz: ', imagenes)
    // }, 350000)
})
