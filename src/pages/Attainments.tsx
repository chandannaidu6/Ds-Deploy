import { Appbar } from "../components/Appbar";
import Card from "../components/Card";
import { Upper } from "../components/Upper";
import { Footer } from "../components/Footer";

export const Attainments = () => {
    return (
        <div className="flex flex-col min-h-screen bg-black">
            <Upper />
            <Appbar />
            <div className="flex-grow text-white">
                <Card>
                    <div className="pb-2 text-2xl font-bold text-center">
                        CO-PO Attainments
                    </div>
                    <div className="text-xl">
                        The process of identifying the curriculum gaps, establishing the CO-PO matrix for each course, and the procedure for calculating the COs and POs attainments have been modified over these years and are given below.
                    </div>
                    <div className="text-center p-4">
                        <button className="px-4 py-2 bg-blue-500 hover:bg-blue-700 text-white rounded">
                            <a
                                href="https://drive.google.com/drive/folders/1uoqzy97mlkrw6BPBLDh0oMOK1ArBpWFC?usp=sharing"
                                className="block w-full h-full"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Attainments
                            </a>
                        </button>
                    </div>
                </Card>
            </div>
            <Footer />
        </div>
    );
}
