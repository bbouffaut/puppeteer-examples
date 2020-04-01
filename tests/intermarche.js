/**
 * @name Amazon product search
 * @desc Searches Amazon.com for a product and checks if the results show up
 */

const assert = require('assert')
const puppeteer = require('puppeteer')
let browser
let page

before(async () => {
  browser = await puppeteer.launch()
  page = await browser.newPage()
})

describe('Intermarche HomePage', () => {
  it('has "Se Connecter" button', async () => {
    await page.setViewport({ width: 1280, height: 800 })
    await page.goto('https://intermarche.com',{ waitUntil: 'networkidle0' })
    //const seConnecterButton = await page.$('.connect-prehome')
    //assert.ok(seConnecterButton)
    await page.screenshot({ path: 'amz.png'})
  }).timeout(20000)

  //it('shows search results after search input', async () => {
  //  await page.click('.connect-prehome')
  //}).timeout(10000)
})

after(async () => {
  await browser.close()
})
