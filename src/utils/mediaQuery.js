const breakpoints = [320, 375, 480, 768, 1280];
const maxBreakpoints = [480, 769, 1280];

const [smallMobile, mobile, mobilePlus, tablet, desktop] = breakpoints.map(
  (bp) => `@media (min-width: ${bp}px)`
);
const [maxMobile, maxTablet, maxDesktop] = maxBreakpoints.map(
  (bp) => `@media (max-width: ${bp}px)`
);

const mq = {
  smallMobile,
  mobile,
  mobilePlus,
  tablet,
  desktop,
  maxMobile,
  maxTablet,
  maxDesktop,
};

export default mq;
