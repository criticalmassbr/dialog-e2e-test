// import 'expect-puppeteer';
const timer = 10000

beforeAll(async () => {
  await page.goto(URL, {waitUntil: 'networkidle0'});
}, timer)

describe('Inital failing spec', () => {
  test('Title of the page', async () => {
    const title = await page.title()
    expect(title).toMatch('Google Play');
  }, timer)

  test('Fill search', async () => {
    const input = await page.waitForSelector('form[name="gbqf"] input[name="q"]')
    await input.focus()
    await input.type('pepapp', {delay: 100})
    await input.press('Enter')
  }, timer)

  test('Click app', async () => {
    const div = await page.waitForSelector('div[title*="PEPapp"]')
    await div.click()
  }, timer)

  test('Click read more', async () => {
    const btn = await page.waitForSelector('div[jsname="xBmnf"]')
    await btn.click()
    await page.waitFor(500)
  }, timer)
   
})
