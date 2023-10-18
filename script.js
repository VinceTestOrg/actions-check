const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch();
  
  // Create a new browser context and configure video recording
  const context = await browser.newContext({
    recordVideo: {
      dir: 'videos/',  // the directory to save the video
      size: { width: 1280, height: 720 }  // optional video size
    }
  });

  const page = await context.newPage();

  // Navigate to the web page
  await page.goto('https://labs.dev.vincelive.dev/signin');

  // Fill the email input field
  await page.fill('#email', 'jithin.shah@vince.no');

  // Optional: Wait for a few seconds to capture the filled input in the video
  await page.waitForTimeout(5000);

  await page.close();
  await context.close();
  await browser.close();
})();
