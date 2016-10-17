import { CodigoQueueMEAN2Page } from './app.po';

describe('codigo-queue-mean2 App', function() {
  let page: CodigoQueueMEAN2Page;

  beforeEach(() => {
    page = new CodigoQueueMEAN2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
