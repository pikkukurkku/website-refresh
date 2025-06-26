// Test file for use with @storybook/test-runner
// Run with: npx test-storybook

module.exports = {
    async postRender(page, context) {
      const storyContext = context.storyContext;
      
      // Test based on story name
      switch (storyContext.name) {
        case 'Interactive':
          await testInteractiveStory(page);
          break;
        case 'ScrollBehavior':
          await testScrollBehavior(page);
          break;
        case 'AccessibilityTest':
          await testAccessibility(page);
          break;
        default:
          // Basic visibility test for all stories
          await testBasicVisibility(page);
      }
    },
  };
  
  async function testBasicVisibility(page) {
    // Check that header is visible
    const header = page.locator('header');
    await expect(header).toBeVisible();
    
    // Check that logo is present
    const logo = page.locator('img[alt="Logo"]');
    await expect(logo).toBeVisible();
    
    // Check that all tabs are present
    const tabs = page.locator('button[role="tab"]');
    await expect(tabs).toHaveCount(5);
  }
  
  async function testInteractiveStory(page) {
    await testBasicVisibility(page);
    
    // Wait for component to be fully rendered
    await page.waitForTimeout(100);
    
    // Click on Projects tab
    const projectsTab = page.locator('text=PROJEKTE');
    await expect(projectsTab).toBeVisible();
    await projectsTab.click();
    
    // Wait for scroll animation
    await page.waitForTimeout(1000);
    
    // Click on Kunden tab
    const kundenTab = page.locator('text=KUNDEN');
    await expect(kundenTab).toBeVisible();
    await kundenTab.click();
    
    // Wait for scroll animation
    await page.waitForTimeout(1000);
    
    // Verify the tabs are clickable and functional
    const homeTab = page.locator('text=HOME');
    await homeTab.click();
    await page.waitForTimeout(500);
  }
  
  async function testScrollBehavior(page) {
    await testBasicVisibility(page);
    
    // Wait for component to be rendered
    await page.waitForTimeout(100);
    
    // Get initial header position
    const header = page.locator('header');
    await expect(header).toBeVisible();
    
    // Scroll down to trigger hide behavior
    await page.evaluate(() => {
      window.scrollTo({ top: 500, behavior: 'smooth' });
    });
    await page.waitForTimeout(500);
    
/*     // Check if header has hide class (translate-y-[-100%])
    const headerClassList = await header.getAttribute('class');
     */
    // Scroll back up to trigger show behavior
    await page.evaluate(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
    await page.waitForTimeout(500);
    
    // Header should be visible again
    await expect(header).toBeVisible();
  }
  
  async function testAccessibility(page) {
    await testBasicVisibility(page);
    
    // Check that header has proper role
    const header = page.locator('header');
    await expect(header).toHaveAttribute('role', 'banner');
    
    // Check that all tabs have proper role
    const tabs = page.locator('[role="tab"]');
    await expect(tabs).toHaveCount(5);
    
    // Check that logo has alt text
    const logo = page.locator('img[alt="Logo"]');
    await expect(logo).toBeVisible();
    
    // Test keyboard navigation
    const firstTab = tabs.first();
    await firstTab.focus();
    await expect(firstTab).toBeFocused();
    
    // Test tab key navigation
    await page.keyboard.press('Tab');
    const secondTab = tabs.nth(1);
    await expect(secondTab).toBeFocused();
  }
  
/*   // Helper function to add expect if not available
  if (typeof expect === 'undefined') {
    global.expect = require('@playwright/test').expect;
  } */