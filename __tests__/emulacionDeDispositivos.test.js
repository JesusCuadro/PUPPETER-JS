// const puppeteer = require('puppeteer')

// describe('Emular dispositivos', () => {
//     let browser
//     let page

//     beforeAll(async () => {
//         browser = await puppeteer.launch({
//             headless: false,
//             defaultViewport: null,
//         })

//         const context = await browser.createIncognitoBrowserContext()

//         page = await context.newPage()

//         await page.goto('https://google.com')
//     })

//     afterAll(async () => {
//         await browser.close()
//     })

//     // Emular los dispositivos de forma manual

//     test('Emulando dispositivos de forma manual', async () => {
//         await page.emulate({
//             name: 'Dispositivo',
//             viewport: {
//                 width: 375,
//                 height: 667,
//                 deviceScaleFactor: 2,
//                 isMobile: true,
//                 hasTouch: true,
//                 isLandscape: false,
//             },
//             userAgent:
//                 'Mozilla/5.0 (Linux; Android 10; SAMSUNG SM-J600G) AppleWebKit/537.36 (KHTML, like Gecko) SamsungBrowser/10.1 Chrome/71.0.3578.99 Mobile Safari/537.36',
//         })

//         await new Promise((resolve) => setTimeout(resolve, 6000))
//     }, 35000)

//     //Emulando los sitios comos si fuesen de escritorio

//     test('Emulando un sitio de escritorio', async () => {
//         await page.setViewport({
//             width: 1500,
//             height: 800,
//         })

//         await new Promise((resolve) => setTimeout(resolve, 6000))
//     }, 35000)

//     //Emulando tablets de forma horizontal

//     test('Emulando un en una tablet en modo horizontal', async () => {
//         const Tablet = puppeteer.devices['iPad Mini landscape']

//         await page.emulate(Tablet)

//         await new Promise((resolve) => setTimeout(resolve, 6000))
//     }, 35000)

//     //Emulando un celular

//     test('Emulando un sitio en un celular', async () => {
//         const iPhone = puppeteer.devices['Pixel 3']

//         await page.emulate(iPhone)

//         await new Promise((resolve) => setTimeout(resolve, 6000))
//     }, 35000)
// })
