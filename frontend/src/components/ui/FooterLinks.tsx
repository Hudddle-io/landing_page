import { FC } from "react";
import { NavLink } from "react-router-dom";
import { Text } from "../HelperComponents/Text";
import { FooterLinkProps } from "../../@types/FooterLink";

export const FooterLinks: FC<FooterLinkProps> = ({ title, url }) => {
    return (
        <NavLink
            className={`w-full lg:py-0 lg:w-fit lg:border-none h-[34px] lg:h-fit text-white`}
            to={url}
        >
            <Text color="dark-3" variant="text-3">
                {title}
            </Text>
        </NavLink>
    );
};
