import { PccBookshelfPage } from './app.po';

describe('pcc-bookshelf App', () => {
  let page: PccBookshelfPage;

  beforeEach(() => {
    page = new PccBookshelfPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
