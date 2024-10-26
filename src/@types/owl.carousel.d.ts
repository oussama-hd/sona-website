import 'jquery';

declare module 'jquery' {
  interface JQuery {
    owlCarousel(options?: any): JQuery;
  }
}