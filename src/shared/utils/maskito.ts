import { Masks } from '@/shared/constants/masks.ts';
import formatWithMask from '@/shared/utils/format-with-masks.ts';

export class Maskito {
  format(text?: string, mask = Masks.phone): string {
    return formatWithMask({ mask, text }).masked;
  }
}

export const maskito = new Maskito();
