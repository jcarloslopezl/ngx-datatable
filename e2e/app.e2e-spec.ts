import { NgxDatatablePage } from './app.po';

describe('ngx-datatable App', () => {
  let page: NgxDatatablePage;

  beforeEach(() => {
    page = new NgxDatatablePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
