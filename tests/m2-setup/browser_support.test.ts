import { test, chromium, webkit, firefox, expect } from "@playwright/test";

test.describe("Testing each browser instance", () => {
  test("Checking three types of browsers launch", async () => {
    
    await test.step("Testing Chromium", async () => {
      console.log(`Browser name ${chromium.name()}!`);
      const chromiumInstance = await chromium.launch();
      const chromiumPage = await chromiumInstance.newPage();
      await chromiumPage.goto(
        "https://www.nexcess.net/web-tools/browser-information/"
      );
      const resultLocator = chromiumPage.locator("#browser-information-name");
      await expect(resultLocator).toBeVisible();
      await expect(resultLocator).not.toHaveText("Loading...");
      await expect(resultLocator).toContainText(/Chrome|Firefox|Safari|Edge/);
      await chromiumPage.screenshot({
        path: `screenshots/pw-${chromium.name()}.png`,
      });
      await chromiumPage.close();
      await chromiumInstance.close();
    });

    await test.step("Testing Webkit", async () => {
      console.log(`Browser name ${webkit.name()}!`);
      const webkitInstance = await webkit.launch();
      const webkitPage = await webkitInstance.newPage();
      await webkitPage.goto(
        "https://www.nexcess.net/web-tools/browser-information/"
      );
      const resultLocator = webkitPage.locator("#browser-information-name");
      await expect(resultLocator).toBeVisible();
      await expect(resultLocator).not.toHaveText("Loading...");
      await expect(resultLocator).toContainText(/Chrome|Firefox|Safari|Edge/);
      await webkitPage.screenshot({
        path: `screenshots/pw-${webkit.name()}.png`,
      });
      await webkitPage.close();
      await webkitInstance.close();
    });

    await test.step("Testing Firefox", async () => {
      console.log(`Browser name ${firefox.name()}!`);
      const firefoxInstance = await firefox.launch();
      const firefoxPage = await firefoxInstance.newPage();
      await firefoxPage.goto(
        "https://www.nexcess.net/web-tools/browser-information/"
      );
      const resultLocator = firefoxPage.locator("#browser-information-name");
      await expect(resultLocator).toBeVisible();
      await expect(resultLocator).not.toHaveText("Loading...");
      await expect(resultLocator).toContainText(/Chrome|Firefox|Safari|Edge/);
      await firefoxPage.screenshot({
        path: `screenshots/pw-${firefox.name()}.png`,
      });
      await firefoxPage.close();
      await firefoxInstance.close();
    });
  });
});
