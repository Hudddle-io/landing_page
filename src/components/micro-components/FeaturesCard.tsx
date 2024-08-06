import { FC } from "react";
import { FeaturesCardProps } from "../../@types/FeaturesCard";
import { Container } from "../HelperComponents/Container";
import { Heading } from "../HelperComponents/Heading";
import { Text } from "../HelperComponents/Text";

export const FeaturesCard: FC<FeaturesCardProps> = ({
    image,
    description,
    title,
}) => {
    return (
        <Container
            className="features items-start opacity-0"
            layout="row"
            gap={32}
        >
            <img src={image} alt="" className="w-[50px] h-[50px]" />
            <Container layout="column" gap={12}>
                <Heading variant="title" className="text-[#EEAE05]">
                    {title}
                </Heading>
                <Text variant="text-3" color="dark-3">
                    {description}
                </Text>
            </Container>
        </Container>
    );
};
