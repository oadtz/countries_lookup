import { AppPage } from './app.po';
import { browser, logging } from 'protractor';

describe('workspace-project App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
    page.navigateTo();
  });

  it('should show logo', () => {
    expect(page.getLogoAlt()).toEqual('Logo');
  });

  it('should show form input', () => {
    expect(page.getSearchBoxValue()).toEqual('');
    expect(page.getSearchBoxPlaceHolder()).toEqual('Search country...');
  });

  it('filter text and return none', () => {
    page.setFilterText('xxxxxxxxxxx');

    expect(page.countCountries()).toEqual(0);
  });

  it('filter exact text and return a country', () => {
    page.setFilterText('thailand');

    expect(page.countCountries()).toEqual(1);
  });

  it('filter part of country and return multiple countries', () => {
    page.setFilterText('korea');

    expect(page.countCountries()).toEqual(2);
  });

  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE,
    } as logging.Entry));
  });
});
