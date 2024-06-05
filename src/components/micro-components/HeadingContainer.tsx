import { FC } from "react";

interface List {
    list: string;
}

export const HeadingContainer: FC<List> = ({ list }) => {
    return (
        <div className="flex p-0 justify-start">
            {list.split("").map((newel: string, i: number) => (
                <span className="flex justify-start" key={i}>
                    <div className="text p-0 translate-y-5 opacity-0" key={i}>
                        {newel}
                    </div>
                </span>
            ))}
        </div>
    );
};
