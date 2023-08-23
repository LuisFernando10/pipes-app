export enum Color {
  black,
  blue,
  green,
  red,
}

export interface Hero {
  canFly: boolean;
  color: Color;
  name: string;
}
