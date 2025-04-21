import { X } from "lucide-react";
import {
    FC,
    HTMLAttributes,
    HtmlHTMLAttributes,
    ImgHTMLAttributes,
} from "react";

interface ModalProps extends HtmlHTMLAttributes<HTMLDivElement> {
    showModal: boolean;
    onClose: () => void; // Add this line
}

const Modal: FC<ModalProps> = ({
    children,
    className,
    showModal,
    onClose, // Destructure this prop
    ...props
}) => {
    return (
        <>
            {showModal && (
                <main className="w-full h-full fixed top-0 left-0 bg-[#00000012] backdrop-blur-xl z-50 flex items-center justify-center">
                    <div
                        {...props}
                        className={
                            "min-h-[378px] w-3/4 max-w-[600px] rounded-[15px] bg-white shadow-md p-4 flex flex-col gap-4 " +
                            className
                        }
                    >
                        <header className="w-full h-[15px] flex justify-end">
                            <button
                                className="bg-none outline-none border-none"
                                onClick={onClose}
                            >
                                <X className="stroke-[1px]" />
                            </button>
                        </header>
                        <section className="h-full grid grid-rows-3 grid-cols-1">
                            {children}
                        </section>
                    </div>
                </main>
            )}
        </>
    );
};

// modal image
function ModalImage({
    src,
    alt,
    ...props
}: ImgHTMLAttributes<HTMLImageElement>) {
    return (
        <img
            src={`${src}`}
            alt={alt}
            {...props}
            className="max-w-[300px] max-h-[300px] w-[115px] h-[115px] mx-auto"
        />
    );
}

// modal description
function ModalDescription({
    children,
    className,
    ...props
}: HTMLAttributes<HTMLParagraphElement>) {
    return (
        <article
            {...props}
            className={
                "flex flex-col lg:w-2/4 mx-auto w-full gap-1 " + className
            }
        >
            {children}
        </article>
    );
}

// modal afooter

function ModalFooter({
    children,
    className,
    ...props
}: HTMLAttributes<HTMLDivElement>) {
    return (
        <footer {...props} className={"flex justify-center " + className}>
            {children}
        </footer>
    );
}

export { Modal, ModalImage, ModalDescription, ModalFooter };
