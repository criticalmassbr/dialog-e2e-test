// import 'expect-puppeteer';
const timeout = 10000

beforeAll(async () => {
  await page.goto(URL, {waitUntil: 'networkidle0'});
})

describe('Inital failing spec', () => {
  test('Title of the page', async () => {
    const title = await page.title()
    expect(title).toMatch('Google Play');
  })

  test('Fill search', async () => {
    const input = await page.waitForSelector('form[name="gbqf"] input[name="q"]')
    await input.focus()
    await input.type('pepapp', {delay: 100})
    await input.press('Enter')
  })

  /*
  test('Click app', async () => {
    // const [targetElement] = await page.$x('//a[contain]')
    const div = await page.waitForSelector('div[title*="PEPapp"]').parentNode
    await div.parentNode.click()
  }, timeout)
  */
})
