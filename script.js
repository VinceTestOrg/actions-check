const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();

  // Start video recording
  await page.startVideo({ path: 'video.mp4' });

  // Navigate to the web page
  await page.goto('https://labs.dev.vincelive.dev/signin');

  // Fill the email input field
  await page.fill('#email', 'jithin.shah@vince.no');

  // Optional: Wait for a few seconds to capture the filled input in the video
  await page.waitForTimeout(5000);

  // Stop video recording
  await page.stopVideo();

  await browser.close();
})();
