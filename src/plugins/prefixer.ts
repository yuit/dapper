import * as prefix from 'inline-style-prefixer/static';

import { Style } from '../types';

export default function prefixer(style: Style) {
  return prefix(style);
}