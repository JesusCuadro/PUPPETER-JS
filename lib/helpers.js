module.exports = {
    click: async function (page, selector, opts = {}) {
        try {
            await page.waitForSelector(selector)
            await page.click(selector, opts)
        } catch (error) {
            throw new Error(`Error al dar click en el selector ${selector}`)
        }
    },

    doubleClick: async function (page, selector) {
        try {
            await page.waitForSelector(selector)
            await page.click(selector, { clickCount: 2 })
        } catch (error) {
            throw new Error(
                `Error al dar doble click en el selector ${selector}`
            )
        }
    },

    getText: async function (page, selector) {
        try {
            await page.waitForSelector(selector)
            return await page.$eval(
                selector,
                (elemento) => elemento.textContent
            )
        } catch (error) {
            throw new Error(
                `Error al obtener el texto del selector ${selector}`
            )
        }
    },

    typeText: async function (page, selector, text, opts = {}) {
        try {
            await page.waitForSelector(selector)
            await page.type(selector, text, opts)
        } catch (error) {
            throw new Error(`Error al escribir en el selector ${selector}`)
        }
    },

    getCount: async function (page, selector) {
        try {
            await page.waitForSelector(selector)
            return await page.$$eval(selector, (elementos) => elementos.length)
        } catch (error) {
            throw new Error(`Error al contar los elementos ${selector}`)
        }
    },

    select: async function (page, selector, opts) {
        try {
            await page.waitForSelector(selector)
            return await page.select(selector, opts)
        } catch (error) {
            throw new Error(
                `Error al seleccionar la opcion con el selector ${selector}`
            )
        }
    },
}
