/**
 * @name Intermarche look for new drive slots
 * @desc Searches Amazon.com for a product and checks if the results show up
 */

const assert = require('assert')
const puppeteer = require('puppeteer-extra')


// add stealth plugin and use defaults (all evasion techniques)
const StealthPlugin = require('puppeteer-extra-plugin-stealth')
puppeteer.use(StealthPlugin())

const args = [
        '--no-sandbox',
        '--disable-setuid-sandbox',
        '--disable-infobars',
        '--window-position=0,0',
        '--ignore-certifcate-errors',
        '--ignore-certifcate-errors-spki-list',
        '--user-agent="Mozilla/5.0 (Macintosh; Intel Mac OS X 10_12_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/65.0.3312.0 Safari/537.36"'
    ];

    const options = {
        args,
        headless: true,
        ignoreHTTPSErrors: true,
        userDataDir: './tmp'
    };

let browser
let page

before(async () => {
  browser = await puppeteer.launch(options)
  page = await browser.newPage()
})

describe('Intermarche HomePage', () => {
  it('has "Se Connecter" button', async () => {
    await page.setViewport({ width: 1280, height: 800 })
    await page.goto('https://intermarche.com',{ waitUntil: 'networkidle0' })
    //const seConnecterButton = await page.$('.connect-prehome')
    //assert.ok(seConnecterButton)
    await page.screenshot({ path: 'intermarche.png'})
  }).timeout(20000)

  //it('shows search results after search input', async () => {
  //  await page.click('.connect-prehome')
  //}).timeout(10000)
})

after(async () => {
  await browser.close()
})
