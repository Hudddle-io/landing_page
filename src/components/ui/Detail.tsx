// forgive the naming lol

import { FC } from "react";
import { Text } from "../HelperComponents/Text";

interface DetailProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  element: "string";
  text: string;
}
export const Detail: FC<DetailProps> = ({ element, text }) => {
  return (
    <div className="introCard w-full flex items-center gap-2">
      <img className="scale-0" src={element} alt="" />{" "}
      <Text className="-translate-x-[5%] opacity-0" variant="text-3">
        {text}
      </Text>
    </div>
  );
};
