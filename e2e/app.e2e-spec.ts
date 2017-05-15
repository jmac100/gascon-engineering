import { GasconPage } from './app.po';

describe('gascon App', () => {
  let page: GasconPage;

  beforeEach(() => {
    page = new GasconPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
