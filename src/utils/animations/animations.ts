import {Draggable} from "gsap/all";
import gsap from "gsap";

gsap.registerPlugin(Draggable);

export const dragAndDropAnimation = (target, bounds, ...rest) => {
  Draggable.create(target, {
    type: "x",
    bounds: bounds,
    throwProps: true,
    dragClickables: true,
    ...rest
  });
}