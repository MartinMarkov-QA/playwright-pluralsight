import { chromium } from "@playwright/test";

(async function firstScript() {
  const chrome = await chromium.launch(); 
  await chrome.close();
  console.log("we reached this line");
})();