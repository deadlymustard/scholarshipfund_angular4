export class Member {
  name: string;
  email?: string;
  phone?: string;
  shirtSize: ShirtSize;
  isCaptain: boolean
}

export enum ShirtSize {
  S = 'S',
  M = 'M',
  L = 'L',
  XL = 'XL',
  XXL = 'XXL'
}
