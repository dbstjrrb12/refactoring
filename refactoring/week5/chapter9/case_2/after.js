class Organization {
  constructor(data) {
    this._title = data.title;
    this._country = data.country;
  }
  get title() {
    return this._title;
  }
  set title(value) {
    this._title = value;
  }
  get country() {
    return this._country;
  }
  set country(value) {
    this._country = value;
  }
}
const organization = new Organization({
  title: '드림코딩',
  country: '대한민국',
});
