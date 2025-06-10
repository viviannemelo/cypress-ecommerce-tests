import './commands';

Cypress.on('fail', (error, runnable) => {
  const testName = `${runnable.parent.title} -- ${runnable.title}`;
  const screenshotFileName = testName.replace(/[^a-z0-9]/gi, '_').toLowerCase();
  cy.screenshot(screenshotFileName);
  throw error;
});
