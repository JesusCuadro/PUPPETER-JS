const puppeteer = require('puppeteer')
const fs = require('fs')

describe('Performance', () => {
    let browser
    let page

    beforeEach(async () => {
        browser = await puppeteer.launch({
            headless: false,
            defaultViewport: null,
        })

        page = await browser.newPage()

    })

    afterEach(async () => {
        await browser.close()
    })

    it('Medir el performance de la automatizacion', async () => {
        await page.waitForSelector('img')
        const metrics = await page.metrics()
        console.log(metrics)
    }, 350000)

    it('Medir el performance de la pagina', async () => {
        await page.waitForSelector('img')
        const metrics2 = await page.evaluate(() =>
            JSON.stringify(window.performance)
        )
        console.log(metrics2)
    }, 350000)

    it('Medir el performance del page load', async () => {

        await page.tracing.start({ path: 'profile.json' })

        await page.goto('https://google.com/')

        await page.tracing.stop()

    }, 350000)

    it('Medir el performance del page load con screenshots', async () => {

        await page.tracing.start({ path: 'profile.json', screenshots: true })

        await page.goto('https://google.com/')

        await page.tracing.stop()

    }, 350000)

    it('Medir el performance del page load con screenshots y extrayendolos', async () => {

        await page.tracing.start({ path: 'profile.json', screenshots: true })

        await page.goto('https://google.com/')

        await page.tracing.stop()

        const tracing = JSON.parse(fs.readFileSync('./profile.json', 'utf8'))
        
        //Filtrar en JSON

        const traceScreenShots = tracing.traceEvents.filter(
            (x)=> x.cat === 'disabled-by-default-devtools.screenshot' && 
            x.name === 'Screenshot' && typeof x.args !== 'undefined' &&
            typeof x.args.snapshot !== 'undefined'
        )

        // Iteramos sobre este arreglo para obtener las imagenes

        traceScreenShots.forEach(function (snap, index) {
            fs.writeFile(`trace-screenshot-${index}.png`, snap.args.snapshot, 'base64', function(error){
                if (error) {
                    console.error('No pude crear el achivo', error);
                }
            })
        });

    }, 350000)

})
