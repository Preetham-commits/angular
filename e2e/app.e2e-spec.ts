import { MyCollegeTaskTemplatePage } from './app.po';

describe('MyCollegeTask App', function() {
  let page: MyCollegeTaskTemplatePage;

  beforeEach(() => {
    page = new MyCollegeTaskTemplatePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
