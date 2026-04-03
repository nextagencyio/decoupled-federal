import { test, expect } from '@playwright/test'

test.describe('Homepage', () => {
  test('renders hero section with department name', async ({ page }) => {
    await page.goto('/')
    await expect(page).toHaveTitle(/Department of Innovation/)
    // Check for hero content from Drupal
    const body = await page.textContent('body')
    expect(body).toContain('Department')
  })

  test('renders stats section', async ({ page }) => {
    await page.goto('/')
    const body = await page.textContent('body')
    // Stats from imported content
    expect(body).toContain('14,500')
  })

  test('navigation links are present', async ({ page }) => {
    await page.goto('/')
    await expect(page.locator('a[href="/agencies"]').first()).toBeVisible()
    await expect(page.locator('a[href="/programs"]').first()).toBeVisible()
  })
})

test.describe('Agencies', () => {
  test('listing page shows agencies', async ({ page }) => {
    await page.goto('/agencies')
    await expect(page).toHaveTitle(/Agencies/)
    const body = await page.textContent('body')
    expect(body).toContain('Office of Clean Air')
    expect(body).toContain('Bureau of Water Resources')
  })

  test('detail page renders agency content', async ({ page }) => {
    await page.goto('/agencies/office-clean-air')
    const body = await page.textContent('body')
    expect(body).toContain('Office of Clean Air')
  })
})

test.describe('Officials', () => {
  test('listing page shows officials', async ({ page }) => {
    await page.goto('/officials')
    await expect(page).toHaveTitle(/Leadership/)
    const body = await page.textContent('body')
    expect(body).toContain('William Foster')
  })

  test('detail page renders official content', async ({ page }) => {
    await page.goto('/officials/william-foster')
    const body = await page.textContent('body')
    expect(body).toContain('William Foster')
  })
})

test.describe('Programs', () => {
  test('listing page shows programs', async ({ page }) => {
    await page.goto('/programs')
    await expect(page).toHaveTitle(/Programs/)
    const body = await page.textContent('body')
    expect(body).toContain('Clean Water Infrastructure')
  })

  test('detail page renders program content', async ({ page }) => {
    await page.goto('/programs/clean-water-infrastructure-grants')
    const body = await page.textContent('body')
    expect(body).toContain('Clean Water')
  })
})

test.describe('Press Releases', () => {
  test('listing page shows press releases', async ({ page }) => {
    await page.goto('/press')
    await expect(page).toHaveTitle(/Press/)
    const body = await page.textContent('body')
    expect(body).toContain('PFAS')
  })

  test('detail page renders press release content', async ({ page }) => {
    await page.goto('/press/new-pfas-drinking-water-standards')
    const body = await page.textContent('body')
    expect(body).toContain('PFAS')
  })
})

test.describe('Static Pages', () => {
  test('about page renders', async ({ page }) => {
    await page.goto('/about')
    const body = await page.textContent('body')
    expect(body).toContain('About')
  })

  test('contact page renders', async ({ page }) => {
    await page.goto('/contact')
    await expect(page.locator('h1')).toBeVisible()
  })
})
