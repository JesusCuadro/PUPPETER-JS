const puppeteer = require('puppeteer')

describe('Tomar capturas de pantalla en PDF', () => {
    let browser
    let page

    beforeAll(async () => {
        browser = await puppeteer.launch({
            headless: false,
            defaultViewport: null,
        })

        const context = await browser.createIncognitoBrowserContext()

        page = await context.newPage()

        await page.goto('https://google.com')
    })

    afterAll(async () => {
        await browser.close()
    })

    test('PDF de pantalla completa', async () => {
        let pdfCSS = []

        pdfCSS.push('<style>')
        pdfCSS.push('h1{ font-size: 10px; margin-left:30px; }')
        pdfCSS.push('</style>')

        const css = pdfCSS.join('')

        await page.pdf({
            path: './google.pdf',
            format: 'A4',
            printBackground: true,
            displayHeaderFooter: true,
            headerTemplate:
                css +
                '<h1>' +
                'Hola mundo, este es mi primer PDF con Puppeteer' +
                '</h1>',
            footerTemplate:
                '<h1> Pagina <span class="pageNumber"></span> de un total de <span class="totalPages"></span> </h1>',
            margin: {
                top: '100px',
                bottom: '200px',
                right: '30px',
                left: '30px',
            },
        })

        await new Promise((resolve) => setTimeout(resolve, 6000))
    }, 30000)

    test('PDF de pantalla completa en modo landscape', async () => {
        let pdfCSS = []

        pdfCSS.push('<style>')
        pdfCSS.push('h1{ font-size: 10px; margin-left:30px; }')
        pdfCSS.push('</style>')

        const css = pdfCSS.join('')

        await page.pdf({
            path: './googleLandscape.pdf',
            format: 'A4',
            printBackground: true,
            displayHeaderFooter: true,
            headerTemplate:
                css +
                '<h1>' +
                'Hola mundo, este es mi primer PDF con Puppeteer' +
                '</h1>',
            footerTemplate:
                '<h1> Pagina <span class="pageNumber"></span> de un total de <span class="totalPages"></span> </h1>',
            margin: {
                top: '100px',
                bottom: '200px',
                right: '30px',
                left: '30px',
            },
            landscape: true
        })

        await new Promise((resolve) => setTimeout(resolve, 6000))
    }, 30000)

})
