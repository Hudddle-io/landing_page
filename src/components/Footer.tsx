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
        <footer className="w-full border-b-[2px] border-slate-300 my-10 absolute bottom-0 left-0 z-50">
            <Wrapper className="w-full">
                <Container
                    className="relative flex-col lg:flex-row items-start lg:items-center justify-start lg:justify-between gap-[7px] lg:gap-[40px]"
                    spread
                    layout="row"
                >
                    <NavLink to={"/#home"} className="mb-[14px] self-start">
                        <img src={logo} alt="" className="w-[100px] h-[40px]" />
                    </NavLink>
                    <Layout
                        direction="row"
                        className="w-full lg:w-[500px] flex-col lg:flex-row gap-[10px] lg:justify-between lg:gap-[100px]"
                        array={navigationLinks}
                        element={FooterLinks}
                    />
                    <NavLink to={"/register"}>
                        <Button>Join the Waitlist</Button>
                    </NavLink>
                </Container>
            </Wrapper>
        </footer>
    );
};
