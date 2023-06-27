import { ILevelConfig } from '../interfaces/level-config';

export const levelsConfig: ILevelConfig[] = [
  {
    answear: 'bento',
    description: 'Select the bento',
    level: [
      {
        tag: 'bento',
      },
      {
        tag: 'plate',
      },
    ],
  },
  {
    answear: 'plate',
    description: 'Select the plates',
    level: [
      {
        tag: 'plate',
      },
      {
        tag: 'bento',
      },
      {
        tag: 'plate',
      },
    ],
  },
  {
    answear: 'plate orange',
    description: 'Select the orange on the plate',
    level: [
      {
        tag: 'plate',
        child: {
          tag: 'orange',
        },
      },
      {
        tag: 'orange',
      },
      {
        tag: 'bento',
      },
    ],
  },
  {
    answear: 'apple',
    description: 'Select the red apple',
    level: [
      {
        tag: 'plate',
      },
      {
        tag: 'orange',
      },
      {
        tag: 'apple',
      },
      {
        tag: 'apple',
        className: 'red',
      },
    ],
  },
];
