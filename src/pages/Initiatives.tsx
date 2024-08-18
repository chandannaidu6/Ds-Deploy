import { Appbar } from "../components/Appbar";
import Card from "../components/Card";
import { Upper } from "../components/Upper";
import { Footer } from "../components/Footer";

export const Initiatives = () => {
    return (
        <div className="flex flex-col min-h-screen bg-cyan-50">
            <Upper />
            <Appbar />
            <div className="flex-grow">
                <Card>
                    <div className="pb-2 text-2xl font-bold text-center px-3">
                        Research Proposals Submitted for Funding
                    </div>
                    <div className="flex justify-center">
                    <a
                        href="https://docs.google.com/spreadsheets/d/1Zd-28Ta83TmJ6RTEWrYKHrWCPEKXWXFanCqMSgCJFWQ/edit"
                        target="_blank"
                        rel="noopener noreferrer">
                            <button
                                className="py-3 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                                type="button"
                            >
                                Click here for details
                            </button>
                        </a>
                    </div>
                </Card>
                <Card>
                    <div className="pb-2 text-2xl font-bold text-center px-20">
                        Faculty Peer Learning Sessions
                    </div>
                    <div className="flex justify-center">
                    <a
                        href="https://docs.google.com/spreadsheets/d/1Zd-28Ta83TmJ6RTEWrYKHrWCPEKXWXFanCqMSgCJFWQ/edit"
                        target="_blank"
                        rel="noopener noreferrer">
                            <button
                                className="py-3 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                                type="button"
                            >
                                Click here for details
                            </button>
                        </a>
                    </div>
                </Card>
            </div>
            <Footer />
        </div>
    );
}
