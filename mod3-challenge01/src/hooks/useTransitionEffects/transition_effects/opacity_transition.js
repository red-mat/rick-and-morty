const opacity_transition = (time) => {
  return {
    time: time,
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

export default opacity_transition;
