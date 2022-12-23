import { vars } from '../../values';
import { ButtonColor } from './ButtonColor';

export function getBgColor(color: ButtonColor) {
  switch (color) {
    case 'green':
      return vars.blue;
    case 'red':
      return vars.dark;
    case 'blue':
      return vars.blue;
    case 'white':
      return vars.blue;
    case 'black':
      return vars.black;
    case 'gray':
      return vars.gray;
    case 'outline':
      return vars.white;
    default:
      return 'transparent';
  }
}
