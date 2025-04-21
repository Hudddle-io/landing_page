import gsap from "gsap";
import { Container } from "../components/HelperComponents/Container";
import { Heading } from "../components/HelperComponents/Heading";
import { Layout } from "../components/HelperComponents/Layout";
import { Text } from "../components/HelperComponents/Text";
import { Wrapper } from "../components/HelperComponents/Wrapper";
import { HeadingContainer } from "../components/micro-components/HeadingContainer";
import { Detail } from "../components/ui/Detail";
import { heroData, heroTitleBeforeSpan } from "../data/heroData";
import { useGSAP } from "@gsap/react";
import { Link } from "react-router-dom";
import { Input } from "../components/ui/Input";
import { Checkbox } from "../components/ui/Checkbox";
import logo from "../assets/huddle-logo.svg";
import trophies from "../assets/tropies.svg";
import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { CircleAlert } from "lucide-react";
import {
    Modal,
    ModalDescription,
    ModalFooter,
    ModalImage,
} from "../components/ui/Modal";
import success from "../assets/success-56EqqIzm6f.svg";
import { Button } from "../components/ui/Button";
import { useState } from "react";
// import axios from "axios";

// Define the schema
const schema = z.object({
    first_name: z.string().nonempty("First Name is required"),
    last_name: z.string(),
    email: z.string().email("Invalid email address"),
    agree_terms: z.boolean().default(true),
    agree_marketing: z.boolean().optional(),
});

type FormFields = z.infer<typeof schema>;

const Register = () => {
    const {
        register,
        handleSubmit,
        reset,
        setError,
        formState: { errors, isSubmitting, submitCount },
    } = useForm<FormFields>({
        resolver: zodResolver(schema),
        defaultValues: {
            agree_terms: true,
            agree_marketing: true,
        },
    });

    const [modal, setModal] = useState(false);

    const openModal = () => {
        console.log(submitCount);
        setModal(!modal);
    };
    const closeModal = () => {
        setModal(false);
    };

    const api_endpoint = "https://landing-page-ruxa.onrender.com/register/";

    const onSubmit: SubmitHandler<FormFields> = async (reqData) => {
        console.log(reqData);
        try {
            const response = await fetch(api_endpoint, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(reqData),
            });

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            const data = (await response.json()) as FormFields;

            // Handle the response data
            openModal();
            console.log(data);

            // Reset the form fields
            reset();
        } catch (error) {
            console.error("Error:", error);
            setError("root", {
                message: "server error occurred",
            });
            // Handle the error (e.g., display an error message to the user)
        }
    };

    const handleFormSubmit = (e: React.BaseSyntheticEvent) => {
        void handleSubmit(onSubmit)(e);
    };

    useGSAP(() => {
        const introCard = document.querySelectorAll(".introCard");
        const introTl = gsap.timeline({ delay: 0.02 });

        introTl.to(".text", {
            opacity: 1,
            y: 0,
            delay: 0.02,
            duration: 0.1,
            stagger: 0.02,
            ease: "power4.in",
        });
        introTl.to(".prd", {
            opacity: 1,
            y: 0,
            delay: 0.1,
            duration: 0.29,
            ease: "power2.in",
        });
        introTl.to(".prdTwo", {
            opacity: 1,
            duration: 0.2,
            delay: 0.1,
            ease: "power2.in",
        });
        introTl.to(".prd", {
            x: "120%",
            delay: 0.1,
            duration: 0.5,
            ease: "power2.out",
        });
        introTl.to(".heroTwo", {
            y: 0,
            opacity: 1,
            delay: 0.05,
            duration: 0.2,
            ease: "power2.inOut",
        });
        introCard.forEach((child) => {
            introTl.to(child.firstChild, {
                scale: 1,
                duration: 0.3,
                stagger: 0.01,
                ease: "bounce.inOut(0.15)",
            });
            introTl.to(child.lastChild, {
                x: 0,
                opacity: 1,
                stagger: 0.01,
                ease: "power2.in",
            });
            introTl.to(".hero-btn", {
                opacity: 1,
            });
        });
    });

    return (
        <Wrapper className="min-h-screen overflow-hidden">
            <Modal onClose={closeModal} showModal={modal}>
                <ModalImage src={success} alt="success image" />
                <ModalDescription>
                    <p className="text-center font-bold text-[14px] leading-[24px] text-[#4D4D4D]">
                        Thank you for joining our waitlist. Don’t mind receiving
                        updates from us, do ya?
                    </p>
                </ModalDescription>
                <ModalFooter>
                    <Button onClick={() => closeModal()}>Okay, great!</Button>
                </ModalFooter>
            </Modal>
            <header className="w-full h-20 flex items-end mb-20">
                <Link to={"/"}>
                    <img src={logo} alt="logo" />
                </Link>
            </header>
            <Container
                className="h-full flex-col md:flex-row mt-40 lg:mt-0"
                Align="center"
                layout="row"
                gap={20}
            >
                <Container
                    className="mb-20 lg:mb-0 md:w-30% lg:w-full mr-0 lg:mr-20"
                    layout="column"
                    gap={24}
                >
                    <Heading
                        className="overflow-hidden inline-flex gap-2 flex-wrap"
                        variant="heading"
                    >
                        {heroTitleBeforeSpan.map((el) => (
                            <HeadingContainer list={el} />
                        ))}
                        <span className="relative overflow-hidden bg-[#956FD6] text-transparent bg-clip-text">
                            <div className="prd absolute translate-y-10 opacity-0 bg-[#956FD6] w-full h-full left-0 right-0"></div>
                            {""}
                            <div className="prdTwo opacity-0">
                                The future of work is play.
                            </div>
                        </span>{" "}
                    </Heading>
                    <Text
                        className="lg:pr-14 heroTwo opacity-0 translate-y-10"
                        color="dark-3"
                        variant="text-1"
                    >
                        We’re building a remote work tool that helps remote
                        teams build collaboration using gamified task tracking
                        and social comparison. We’re making work fun.
                    </Text>
                    <Layout
                        className=""
                        array={heroData}
                        direction="column"
                        gap={16}
                        element={Detail}
                    />
                </Container>
                <Container
                    layout="row"
                    className="effect relative w-full max-w-[539px] h-3/4 rounded-lg ring-1"
                >
                    <img
                        src={trophies}
                        alt=""
                        className="animate-float-One lg:w-[635px] lg:h-[634px] w-[196px] h-[196px] absolute -top-[20%] -right-[20%] lg:top-[60%] lg:right-[80%] translate-x-20 z-20 imgtask"
                    />
                    <form
                        onSubmit={handleFormSubmit}
                        className="flex flex-col items-center justify-start p-[24px] lg:p-[40px] gap-[14px] mx-auto"
                    >
                        <Heading variant="sub-heading">Register</Heading>
                        <Input
                            register={register("first_name")}
                            name="first_name"
                            placeholder="Enter First Name"
                            type="text"
                            label="First name"
                        >
                            {errors.first_name && (
                                <div className="err z-40 text-red-500 absolute top-1 right-0 text-xs flex items-center gap-1">
                                    <CircleAlert width={15} height={15} />
                                    {errors.first_name.message}
                                </div>
                            )}
                        </Input>
                        <Input
                            register={register("last_name")}
                            name="last_name"
                            placeholder="Enter Last Name"
                            type="text"
                            label="Last name"
                        >
                            {errors.last_name && (
                                <div className="err z-40 text-red-500 absolute top-1 right-0 text-xs flex items-center gap-1">
                                    <CircleAlert width={15} height={15} />
                                    {errors.last_name.message}
                                </div>
                            )}
                        </Input>
                        <Input
                            register={register("email")}
                            name="email"
                            placeholder="johndoe@gmail.com"
                            type="email"
                            label="Email Address"
                        >
                            {errors.email && (
                                <div className="err z-40 text-red-500 absolute top-1 right-0 text-xs flex items-center gap-1">
                                    <CircleAlert width={15} height={15} />
                                    {errors.email.message}
                                </div>
                            )}
                        </Input>

                        <Checkbox 
                            register={register("agree_terms")}
                            name="agree_terms"
                            required
                            className="z-30"
                        >
                            {" "}
                            I agree to the{" "}
                            <Link to={"#"} className="text-[#2684FF]">
                                terms of service
                            </Link>
                        </Checkbox>
                        <Checkbox 
                            register={register("agree_marketing")}
                            name="agree_marketing"
                            required
                            className="z-30"
                        >
                            {" "}
                            I agree to receive marketing updates from Huddle
                        </Checkbox>

                        <button
                            disabled={isSubmitting}
                            type="submit"
                            className="bg-[#5C5CE9] disabled:cursor-not-allowed disabled:bg-[#5c5ce9a5] text-white h-[52px] w-[85%] px-6 py-3 mt-3 rounded-lg lg:mt-5"
                        >
                            {isSubmitting ? "Submitting..." : "Register"}
                        </button>
                        {errors.root && (
                            <div className="text-red-500">
                                An error occurred
                            </div>
                        )}
                    </form>
                </Container>
            </Container>
        </Wrapper>
    );
};

export default Register;
