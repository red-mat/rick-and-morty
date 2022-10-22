const opacityTransition = time => {
  return {
    time,
    seen: {
      opacity: 1,
      transition: `opacity ${time}ms ease`,
    },
    unseen: {
      opacity: 0,
      transition: `opacity ${time}ms ease`,
    },
  };
};

export default opacityTransition;
