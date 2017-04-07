import Keyword from './Keyword';
import * as _ from 'lodash';

export default class Description extends Keyword {
  constructor(value) {
    super();
    this.value = arguments.length > 1 ? Array.prototype.slice.call(arguments) : value;
  }

  set value(value) {
    if (typeof value != 'string') {
      throw new Error('value must be a string');
    }
    this._value = value;
  }

  get value() {
    return this._value;
  }

  json(context) {
    context = context || {};
    context.description = this.value;
    return context;
  }
}
