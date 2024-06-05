// A function that splits A text string into an array for animation manipulations

import { TextToString } from "../../@types/convertTextToString";

export const convertTextToArray = (text: TextToString): string[] => {
  const brokenText: string[] = text.split(" ");
  return brokenText;
};
