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
            headless: 'new',
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

        await page.waitForSelector('#main-form > div > header > p')

        //Corre un document query selector

        const subTituloPagina = await getText(
            page,
            '#main-form > div > header > p'
        )

        console.log('SubTitulo de la pagina: ', subTituloPagina)
    }, 350000)

    // jest.setTimeout(10000)

    it('Contar los elementos de una pagina', async () => {
        await page.goto('https://geopolimerossas.com/', {
            waitUntil: 'networkidle0',
        })

        await page.waitForSelector('img')

        const imagenes = await getCount(page, 'img')
        console.log('Estas son las imagenes que hay: ', imagenes)
    }, 350000)
})
