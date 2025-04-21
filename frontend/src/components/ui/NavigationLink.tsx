import { FC } from "react";
import { NavLink } from "react-router-dom";
import { NavigationLinkProps } from "../../@types/NavigationLink";
import { Text } from "../HelperComponents/Text";

const NavigationLink: FC<NavigationLinkProps> = ({ title, url }) => {
    return (
        <NavLink
            className={`w-full lg:py-0 lg:w-fit border-b-[1px] border-slate-200 lg:border-none h-[34px] lg:h-fit`}
            to={url}
        >
            <Text color="dark-3" variant="text-3">
                {title}
            </Text>
        </NavLink>
    );
};

export default NavigationLink;
