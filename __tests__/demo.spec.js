/** Provide longer timeout for Jest async test runs
 *  or Jest will close before Puppeteer can run
 */
const TIMEOUT = 10000

/* DOM Selector Queries */
const SEARCH_FORM = 'form[name="gbqf"]'
const SEARCH_FORM_INPUT = 'input[name="q"]'
const READ_MORE_BUTTON = 'div[jsname="xBmnf"]'

describe('Google Play | PEPapp - PepsiCo', () => {
  test('Load Google Play store', async () => {
    await page.goto(URL, {waitUntil: 'networkidle0'});
    const url = await page.url()
    const title = await page.title()

    expect(url).toMatch('play.google.com/store')
    expect(title).toMatch('Google Play')
  }, TIMEOUT)

  test('Search for "pepapp"', async () => {
    const searchForm = await page.waitForSelector(SEARCH_FORM)
    await expect(searchForm).toFill(SEARCH_FORM_INPUT, 'pepapp', {delay: 100})
    await searchForm.press('Enter')

    await page.waitFor(500)
    await expect(page).toMatch('PEPapp - PepsiCo')
  }, TIMEOUT)

  test('Open PEPapp - PepsiCo details page', async () => {
    await expect(page).toClick('a', {text: /PEPapp/})
    await page.waitFor(500)
    const url = await page.url()

    expect(url).toMatch(/details\?id=br\.com\.eusoupepsico/)
  }, TIMEOUT)

  test('Toggle Read More description', async () => {
    const visible = await page.waitForSelector(READ_MORE_BUTTON, {visible: true})
    await expect(visible).toClick('*')

    await page.waitFor(500)

    const hidden = await page.waitForSelector(READ_MORE_BUTTON, {hidden: true})
    await expect(isVisible(hidden)).rejects.toThrowError(/not visible/)
  }, TIMEOUT)

})

async function isVisible(node) {
  await expect(node).toClick('*')
}
