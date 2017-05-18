import { RepoPullPage } from './app.po';

describe('repo-pull App', () => {
  let page: RepoPullPage;

  beforeEach(() => {
    page = new RepoPullPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
