const puppeteer = require('puppeteer')

describe('Geolocalizacion', () => {
    
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

    test('Cambio de la geolocalizacion', async () => {

        const context = browser.defaultBrowserContext()

        await context.overridePermissions('https://chercher.tech/practice/geo-location.html', [
            'geolocation'
        ])

        await page.setGeolocation({
            latitude: 90,
            longitude: 20,
        })

        await page.goto('https://chercher.tech/practice/geo-location.html')

        await new Promise((resolve) => setTimeout(resolve, 6000))

        await page.setGeolocation({
            latitude: 4.7765947,
            longitude: -74.1379082,
        })

        await page.goto('https://chercher.tech/practice/geo-location.html')

        await new Promise((resolve) => setTimeout(resolve, 6000))

    }, 35000)

})
