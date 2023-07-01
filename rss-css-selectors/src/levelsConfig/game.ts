import { ILevelConfig } from '../interfaces/level-config';

export const levelsConfig: ILevelConfig[] = [
  {
    answear: ['bento'],
    description: 'Select the bento',
    level: [
      {
        tag: 'bento',
        right: 'right',
      },
      {
        tag: 'plate',
      },
    ],
  },
  {
    answear: ['plate'],
    description: 'Select the plates',
    level: [
      {
        tag: 'plate',
        right: 'right',
      },
      {
        tag: 'bento',
      },
      {
        tag: 'plate',
        right: 'right',
      },
    ],
  },
  {
    answear: ['plate orange'],
    description: 'Select the orange on the plate',
    level: [
      {
        tag: 'plate',
        child: {
          tag: 'orange',
          right: 'right',
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
    answear: ['\\.red', 'apple\\.red'],
    description: 'Select the red apple',
    level: [
      {
        tag: 'apple',
      },
      {
        tag: 'orange',
      },
      {
        tag: 'plate',
      },
      {
        tag: 'apple',
        className: 'red',
        right: 'right',
      },
    ],
  },
  {
    answear: ['#colorful apple'],
    description: 'Select the apple on the colorful plate',
    level: [
      {
        tag: 'plate',
        child: {
          tag: 'apple',
        },
      },
      {
        tag: 'plate',
        id: 'colorful',
        child: {
          tag: 'apple',
          right: 'right',
        },
      },
      {
        tag: 'orange',
      },
    ],
  },
  {
    answear: ['\\*'],
    description: 'Select all the things',
    level: [
      {
        tag: 'bento',
        right: 'right',
      },
      {
        tag: 'plate',
        id: 'colorful',
        right: 'right',
      },
      {
        tag: 'apple',
        right: 'right',
      },
      {
        tag: 'bento',
        child: {
          tag: 'orange',
        },
        className: 'violet',
        right: 'right',
      },
    ],
  },
  {
    answear: ['apple, ?orange', 'orange, ?apple'],
    description: 'Select all the fruits',
    level: [
      {
        tag: 'apple',
        className: 'red',
        right: 'right',
      },
      {
        tag: 'plate',
        id: 'colorful',
      },
      {
        tag: 'bento',
        child: {
          tag: 'orange',
          right: 'right',
        },
      },
      {
        tag: 'orange',
        right: 'right',
      },
    ],
  },
  {
    answear: ['plate \\*'],
    description: 'Select everything on a plate',
    level: [
      {
        tag: 'bento',
        child: {
          tag: 'orange',
        },
      },
      {
        tag: 'plate',
        id: 'colorful',
        child: {
          tag: 'apple',
          className: 'red',
        },
        right: 'right',
      },
      {
        tag: 'plate',
        child: {
          tag: 'orange',
        },
        right: 'right',
      },
      {
        tag: 'apple',
      },
    ],
  },
  {
    answear: ['bento ?apple, bento ?orange', 'bento ?orange, bento ?apple', 'bento \\*'],
    description: 'Select the apple and the orange in the bento',
    level: [
      {
        tag: 'bento',
        child: {
          tag: 'apple',
          right: 'right',
        },
        className: 'violet',
      },
      {
        tag: 'bento',
      },
      {
        tag: 'bento',
        child: {
          tag: 'orange',
          right: 'right',
        },
      },
      {
        tag: 'plate',
        child: {
          tag: 'orange',
        },
      },
    ],
  },
  {
    answear: ['bento \\+'],
    description: 'Select every orange that`s next to a bento',
    level: [
      {
        tag: 'plate',
        child: {
          tag: 'orange',
        },
      },
      {
        tag: 'bento',
      },
      {
        tag: 'orange',
        right: 'right',
      },
      {
        tag: 'bento',
        child: {
          tag: 'orange',
        },
      },
      {
        tag: 'orange',
        right: 'right',
      },
    ],
  },
];
