import { NavLink } from "react-router-dom";
import { Container } from "./HelperComponents/Container";
import { Wrapper } from "./HelperComponents/Wrapper";
import logo from "../assets/huddle-logo.svg";
import { Layout } from "./HelperComponents/Layout";
import { navigationLinks } from "../data/navigationLinks";
import { Button } from "./ui/Button";
import { useSmoothScroll } from "../hooks/useSmoothscroll";
import { FooterLinks } from "./ui/FooterLinks";

export const Footer = () => {
    useSmoothScroll();
    return (
        <footer className=" border-b-[2px] border-slate-300 my-10">
            <Wrapper className="w-full">
                <Container
                    className="relative"
                    Justify="center"
                    Align="center"
                    spread
                    layout="row"
                >
                    <NavLink to={"/#home"}>
                        <img src={logo} alt="" />
                    </NavLink>
                    <Layout
                        direction="row"
                        className="absolute lg:relative bottom-0 left-0 translate-y-[130%] lg:translate-y-[0%] flex-col lg:flex-row"
                        gap={40}
                        array={navigationLinks}
                        element={FooterLinks}
                    />
                    <Button>Join the Waitlist</Button>
                </Container>
            </Wrapper>
        </footer>
    );
};
