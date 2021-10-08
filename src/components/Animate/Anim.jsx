export const PageAnim = {
  hidden: {
    opacity: 0,
    y: 300,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      when: "beforeChildren",
      staggerChildren: 0.25,
    },
  },
  exit: {
    opacity: 0,

    transition: { duration: 0.5 },
  },
};
export const titleAnim = {
  hidden: { opacity: 0, y: 200 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.75, ease: "easeOut" },
  },
};
export const fade = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { ease: "easeOut", duration: 0.75 } },
};

export const imageAnim = {
  hidden: { scale: 1.5, opacity: 0 },
  show: {
    scale: 1,
    opacity: 1,
    transition: { ease: "easeOut", duration: 0.75 },
  },
};
export const waveAni = {
  hidden: { pathLength: 0, pathOffset: 1 },
  show: { pathLength: 1, pathOffset: 0, transition: { duration: 1 } },
};

export const lineAni = {
  hidden: { width: "0%" },
  show: { width: "100%", transition: { ease: "easeOut", duration: 0.75 } },
};
