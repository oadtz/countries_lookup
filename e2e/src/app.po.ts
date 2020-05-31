import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo(): Promise<unknown> {
    return browser.get(browser.baseUrl) as Promise<unknown>;
  }

  getLogoAlt(): Promise<string> {
    return element(by.css('app-root img.logo')).getAttribute('alt') as Promise<string>;
  }

  getSearchBoxValue(): Promise<string> {
    return element(by.css('app-root input.filter-text')).getAttribute('value') as Promise<string>;
  }

  getSearchBoxPlaceHolder(): Promise<string> {
    return element(by.css('app-root input.filter-text')).getAttribute('placeholder') as Promise<string>;
  }

  countCountries(): Promise<number> {
    return element.all(by.css('app-root .country')).count() as Promise<number>;
  }

  setFilterText(value: string): void {
    element(by.css('app-root input.filter-text')).sendKeys(value);
  }
}
