import { Appbar } from "../components/Appbar";
import Card from "../components/Card";
import { Upper } from "../components/Upper";
import { Footer } from "../components/Footer";

export const Syllabus = () => {
    return (
        <div className="flex flex-col min-h-screen bg-cyan-50">
            <Upper />
            <Appbar />
            <div className="flex-grow p-4">
                <Card>
                    <div className="pb-2 text-2xl font-bold text-center">
                        Academic Regulations and Syllabus
                    </div>
                    <div className="text-lg flex items-center border-b">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="size-6"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="m8.25 4.5 7.5 7.5-7.5 7.5"
                            />
                        </svg>
                        <span className="ml-2">
                            <a
                                href="https://www.geethanjaliinstitutions.com/engineering/img/downloads/Revised%20AR22%20&%20AR20%20Regulations.pdf"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Revised AR22 & AR20 Regulations
                            </a>
                        </span>
                    </div>
                    <div className="pt-2 text-lg flex items-center border-b">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="size-6"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="m8.25 4.5 7.5 7.5-7.5 7.5"
                            />
                        </svg>
                        <span className="ml-2">
                            <a
                                href="https://www.geethanjaliinstitutions.com/engineering/syllabus/AR22-CSE(DS)-SYLLABUS%202023-24.pdf"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                B.Tech CSE(DS) AR22 Syllabus (2023-24)
                            </a>
                        </span>
                    </div>
                    <div className="pt-2 text-lg flex items-center border-b">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="size-6"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="m8.25 4.5 7.5 7.5-7.5 7.5"
                            />
                        </svg>
                        <span className="ml-2">
                            <a
                                href="https://www.geethanjaliinstitutions.com/engineering/syllabus/AR22_CSEDS_1234.pdf"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                B.Tech CSE(DS) AR22 Syllabus (2022-23)
                            </a>
                        </span>
                    </div>
                    <div className="pt-2 text-lg flex items-center border-b">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="size-6"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="m8.25 4.5 7.5 7.5-7.5 7.5"
                            />
                        </svg>
                        <span className="ml-2">
                            <a
                                href="https://www.geethanjaliinstitutions.com/engineering/syllabus/AR20%20CSEDS%204%20Years.pdf"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                B.Tech CSE(DS) AR20 Syllabus, 2021-22 Admitted Students
                            </a>
                        </span>
                    </div>
                    <div className="pt-2 text-lg flex items-center border-b">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="size-6"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="m8.25 4.5 7.5 7.5-7.5 7.5"
                            />
                        </svg>
                        <span className="ml-2">
                            <a
                                href="https://www.geethanjaliinstitutions.com/engineering/syllabus/AR20%20syllabus%201234_CSEDS.pdf"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                B.Tech CSE(DS) AR20 Syllabus
                            </a>
                        </span>
                    </div>
                </Card>
            </div>
            <Footer />
        </div>
    );
};
