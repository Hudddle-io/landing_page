import { useState, useEffect } from "react";
import logo from "../assets/huddle-logo.svg";
import { Link, NavLink } from "react-router-dom";
import { Button } from "./ui/Button";
import { Wrapper } from "./HelperComponents/Wrapper";
import { Container } from "./HelperComponents/Container";
import { Layout } from "./HelperComponents/Layout";
import { navigationLinks } from "../data/navigationLinks";
import NavigationLink from "./ui/NavigationLink";
import gsap from "gsap";
import { useSmoothScroll } from "../hooks/useSmoothscroll"; // Import the custom hook

function Navbar() {
    const [active, setActive] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    useSmoothScroll(); // Use the custom hook

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 200) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const openNavTl = gsap.timeline({ delay: 0.02 });
    const closeNavTl = gsap.timeline({ delay: 0.02 });
    openNavTl.pause();
    closeNavTl.pause();

    // openNav Timeline
    openNavTl.to(".two", {
        x: 180,
        opacity: 0,
        display: "none",
        duration: 0.09,
        ease: "power2.in",
    });
    openNavTl.to(".one", {
        y: 4,
        transform: "rotate(45deg)",
        ease: "none",
        duration: 0.09,
    });
    openNavTl.to(".three", {
        y: -2,
        transform: "rotate(-45deg)",
        ease: "none",
        duration: 0.09,
    });
    openNavTl.to(".child", {
        y: 0,
        ease: "power2.in",
        duration: 0.09,
        onComplete: function () {
            openNavTl.pause();
        },
    });

    // closeNav Timeline
    closeNavTl.to(".child", { y: "-180%", ease: "power2.in" });
    closeNavTl.to(".three", {
        rotate: 0,
        y: 0,
        ease: "none",
        duration: 0.09,
    });
    closeNavTl.to(".one", {
        y: 0,
        transform: "rotate(0deg)",
        ease: "none",
        duration: 0.09,
    });
    closeNavTl.to(".two", {
        x: 0,
        opacity: 1,
        display: "block",
        ease: "power2.in",
        duration: 0.09,
    });

    const Toggle = () => {
        console.log("clicked");
        setActive(!active);
        active ? openNavTl.play() : closeNavTl.play();
    };

    return (
        <nav
            className={`border-b-2 border-gray-200 fixed top-0 left-0 w-full z-50 ${
                scrolled ? "bg-white shadow-lg" : ""
            }`}
        >
            <Wrapper className="cont relative">
                <Container Justify="center" Align="center" spread layout="row">
                    {/* logo */}
                    <Link to="#home">
                        <div>
                            <img
                                className="z-50 relative w-[70px] h-[35px] lg:w-[100px] lg:h-[50px]"
                                src={logo}
                                alt=""
                            />
                        </div>
                    </Link>
                    {/* links */}
                    <Layout
                        className="my-auto hidden lg:flex"
                        array={navigationLinks}
                        element={NavigationLink}
                        direction="row"
                        gap={40}
                    />
                    <NavLink to={"/#home"}>
                        <Button className="hidden lg:flex">
                            Join The Waitlist
                        </Button>
                    </NavLink>
                    <button
                        onClick={Toggle}
                        className="button z-50 relative flex lg:hidden w-[22px] gap-1 flex-col justify-between"
                    >
                        <div className="one w-full h-[2px] rounded-sm bg-[#5C5CE9]"></div>
                        <div className="two w-full h-[2px] rounded-sm bg-[#5C5CE9]"></div>
                        <div className="three w-full h-[2px] rounded-sm bg-[#5C5CE9]"></div>
                    </button>
                    <Container
                        layout="column"
                        Align="start"
                        className="rounded-b-3xl shadow-md child pt-20 -translate-y-[180%] flex lg:hidden absolute w-full h-fit left-0 top-0 bg-white "
                        gap={20}
                    >
                        <Wrapper>
                            <Layout
                                className="my-auto w-full flex lg:hidden"
                                array={navigationLinks}
                                element={NavigationLink}
                                direction="column"
                                gap={2}
                            />
                        </Wrapper>
                    </Container>
                </Container>
            </Wrapper>
        </nav>
    );
}

export default Navbar;
