export interface IPopmotionConfig {
  stiffness: number;
  damping: number;
  mass: number;
  velocity: number;
  duration: number;
  bounce: number;
}

export const DefaultPopmotionConfig: IPopmotionConfig = {
  stiffness: 700,
  damping: 10,
  mass: 1,
  velocity: 1000,
  duration: 1000,
  bounce: 0,
};

export const PopmotionSliderSettings = {
  stiffness: {
    min: 0,
    max: 1000,
    step: 1,
  },
  damping: {
    min: 0,
    max: 100,
    step: 1,
  },
  mass: {
    min: 1,
    max: 10,
    step: 0.1,
  },
  velocity: {
    min: 0,
    max: 1000,
    step: 1,
  },
  duration: {
    min: 0,
    max: 1000,
    step: 1,
  },
  bounce: {
    min: 0,
    max: 1,
    step: 0.1,
  },
};
