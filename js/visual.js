const puppeteer = require('puppeteer')
const { toMatchImageSnapshot } = require('jest-image-snapshot')

expect.extend({ toMatchImageSnapshot })

describe('Visual test', () => {
    
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

    test('Snapshot de toda la pagina', async () => {
        await page.waitForSelector('img')

        const screenshot = await page.screenshot()

        expect(screenshot).toMatchImageSnapshot()
    }, 35000)

    test('Snapshot de solo un elemento', async () => {
        const image = await page.waitForSelector('img')

        const screenshot = await image.screenshot()

        expect(screenshot).toMatchImageSnapshot({
            failureThreshold: 0.05,
            failureThresholdType: 'percent',
        })
    }, 35000)

    test('Snapshot a un celular', async () => {
        const Tablet = puppeteer.devices['iPad Mini landscape']
        await page.emulate(Tablet)

        await page.waitForSelector('img')

        const screenshot = await page.screenshot()

        expect(screenshot).toMatchImageSnapshot({
            failureThreshold: 0.05,
            failureThresholdType: 'percent',
        })
    }, 35000)

    test('Remover una imagen antes de crear un snapshot', async () => {
        await page.waitForSelector('img')

        await page.evaluate(() =>
            document.querySelectorAll('img' || []).forEach((img) => img.remove)
        )

        const screenshot = await page.screenshot()

        expect(screenshot).toMatchImageSnapshot({
            failureThreshold: 0.05,
            failureThresholdType: 'percent',
        })
        
    }, 35000)
})
