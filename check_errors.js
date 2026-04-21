const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  
  const errors = [];
  const consoleErrors = [];

  page.on('console', msg => {
    if (msg.type() === 'error') consoleErrors.push(msg.text());
  });

  page.on('pageerror', err => {
    errors.push(err.message);
  });

  page.on('requestfailed', request => {
    errors.push(`Request failed: ${request.url()} (${request.failure().errorText})`);
  });

  try {
    console.log('Visiting http://127.0.0.1:7916/ ...');
    await page.goto('http://127.0.0.1:7916/', { waitUntil: 'networkidle' });
    
    console.log('\n--- Console Errors ---');
    if (consoleErrors.length === 0) console.log('None.');
    else consoleErrors.forEach(err => console.log(`- ${err}`));

    console.log('\n--- Page/Network Errors ---');
    if (errors.length === 0) console.log('None.');
    else errors.forEach(err => console.log(`- ${err}`));

    if (consoleErrors.length > 0 || errors.length > 0) {
      process.exit(1);
    } else {
      console.log('\nPASS: No errors detected.');
    }
  } catch (err) {
    console.error('Failed to connect to the server:', err.message);
    process.exit(1);
  } finally {
    await browser.close();
  }
})();
