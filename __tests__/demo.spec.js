// import 'expect-puppeteer';

beforeAll(async () => {
  await page.goto(URL, {waitUntil: 'domcontentloaded'});
})

describe('Inital failing spec', () => {
  test('Title of the page', async () => {
    const title = await page.title()
    expect(title).toMatch('foobar');
  })
})
