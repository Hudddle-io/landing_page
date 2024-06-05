import { useRef } from "react";
import { gsap } from "gsap";

// gsap.registerPlugin(Flip);
export const Playground = () => {
  const div1 = useRef(null);
  const div2 = useRef(null);
  const div3 = useRef(null);

  const flip = () => {
    div3.current.appendChild(div2.current);
  };
  return (
    <div className="flex w-full h-screen items-center justify-center gap-10">
      <div ref={div1} className="w-[300px] h-[300px] rotate-[180deg] ring-1">
        <div ref={div2} className="w-[80px] h-[80px] bg-red-500"></div>
      </div>
      <div
        ref={div3}
        className="w-[300px] h-[300px] rotate-[180deg] ring-1"
      ></div>
      <button onClick={flip}>flip</button>
    </div>
  );
};
