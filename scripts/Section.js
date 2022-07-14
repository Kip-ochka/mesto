export default class Section {
  constructor({ data, renderer }, cardContainer ) {
    this._rendererCard = data
    this._renderer = renderer
    this._containerForCards = cardContainer
  }

  renderItems() {
    this._rendererCard.forEach(item => this._renderer(item));
  }

  setItem(element) {
    this._containerForCards.prepend(element);
  }
 }
