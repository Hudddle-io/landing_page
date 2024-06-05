import Checkmark from "../assets/checkmark.svg";
import { convertTextToArray } from "../lib/api/convertTextToString";

export const heroData = [
    { text: "Clear Work Objectives", element: Checkmark },
    { text: "Investment Report Every Month", element: Checkmark },
    { text: "Saving Money For The Future", element: Checkmark },
];

export const heroTitleBeforeSpan = convertTextToArray(
    "Building trust for remote work and"
);
export const heroTitleAfterSpan = convertTextToArray(" in remote workers");
