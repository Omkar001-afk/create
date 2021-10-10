import { useInView } from "react-intersection-observer";
import { useAnimation } from "framer-motion";
export const useScroll = () => {
  const controls = useAnimation();
  const [element, view] = useInView({ threshold: 0.3 }); //useinview returns ele,view view returns boolean value, element used as reference
  if (view) {
    controls.start("show");
  } else {
    controls.start("hidden");
  }
  return [element, controls];
};
