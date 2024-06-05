import { Container } from "./HelperComponents/Container";
import { Heading } from "./HelperComponents/Heading";
import { Text } from "./HelperComponents/Text";
import { Wrapper } from "./HelperComponents/Wrapper";

const Roadmap = () => {
    return (
        <Wrapper className="overflow-x-hidden bg-white p-8 rounded-lg">
            <Container sectionId="product-roadmap" layout="column" gap={50}>
                <Container layout="column" gap={40}>
                    <Heading variant="introduction">Our Project</Heading>
                    <Heading variant="sub-heading">Project Timeline</Heading>
                    <Text variant="text-1" color="dark-3">
                        A Comprehensive roadmap of Hudddle
                    </Text>
                </Container>

                <Container
                    layout="row"
                    className="overflow-x-scroll no-scrollbar"
                >
                    <table className="w-full border-collapse ">
                        <thead>
                            <tr>
                                <th className="border-l border-r p-8">Phase</th>
                                <th className="border-l border-r p-4">
                                    Coming soon
                                </th>
                                <th className="border-l border-r p-4">
                                    Coming soon
                                </th>
                                <th className="border-l border-r p-4">
                                    Coming soon
                                </th>
                                <th className="border-l border-r p-4">
                                    Coming soon
                                </th>
                                <th className="border-l border-r p-4">
                                    Coming soon
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="border p-8">Phase 1</td>
                                <td className="border p-4 bg-gray-100">
                                    MVP 1 Release
                                </td>
                                <td className="border p-4"></td>
                                <td className="border p-4"></td>
                                <td className="border p-4"></td>
                                <td className="border p-4"></td>
                            </tr>
                            <tr>
                                <td className="border p-8">Phase 2</td>
                                <td className="border p-4"></td>
                                <td className="border p-4 bg-gray-100">
                                    MVP 2 Release
                                </td>
                                <td className="border p-4"></td>
                                <td className="border p-4"></td>
                                <td className="border p-4"></td>
                            </tr>
                            <tr>
                                <td className="border p-8">Phase 3</td>
                                <td className="border p-4"></td>
                                <td className="border p-4"></td>
                                <td className="border p-4 bg-gray-100">
                                    Launch
                                </td>
                                <td className="border p-4"></td>
                                <td className="border p-4"></td>
                            </tr>
                            <tr>
                                <td className="border p-8">Phase 4</td>
                                <td className="border p-4"></td>
                                <td className="border p-4"></td>
                                <td className="border p-4"></td>
                                <td className="border p-4 bg-gray-100">
                                    Pre-launch Prototype Test
                                </td>
                                <td className="border p-4"></td>
                            </tr>
                            <tr>
                                <td className="border p-8">Phase 4</td>
                                <td className="border p-4"></td>
                                <td className="border p-4"></td>
                                <td className="border p-4"></td>
                                <td className="border p-4"></td>
                                <td className="border p-4 bg-gray-100">
                                    Beta Release
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </Container>
            </Container>
        </Wrapper>
    );
};

export default Roadmap;
