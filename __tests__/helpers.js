export async function expectToBeVisible(query) {
  await expect(page.waitForSelector(query, {visible: true})).resolves
}

export async function expectToBeHidden(query) {
  await expect(page.waitForSelector(query, {hidden: true})).resolves
}
