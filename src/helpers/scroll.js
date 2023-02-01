import { animateScroll } from "react-scroll";
export const scrollWithOut = (id) => {
  animateScroll.scrollToBottom({ containerId: id, duration: 0, offset: 200 });
};

export const animateScrollToBottom = (id) => {
  animateScroll.scrollToBottom({
    containerId: id,
    duration: 200,
  });
};
