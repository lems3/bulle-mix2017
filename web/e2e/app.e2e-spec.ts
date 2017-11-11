import { BulleWebUIPage } from './app.po';

describe('bulle-web-ui App', () => {
  let page: BulleWebUIPage;

  beforeEach(() => {
    page = new BulleWebUIPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
