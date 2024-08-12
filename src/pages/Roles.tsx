import Card from "../components/Card";
import { Appbar } from "../components/Appbar";
import { Upper } from "../components/Upper";
import { Footer } from "../components/Footer";

export const Roles = () => {
    return (
        <div className="flex flex-col min-h-screen bg-black">
            <Upper />
            <Appbar />
            <div className="flex-grow text-white">
                <Card>
                    <div className="text-2xl flex justify-center font-bold">
                        Roles and Responsibilities
                    </div>
                    <div className="pt-4 text-lg">
                        Roles and Responsibilities of faculty members occupying various administrative positions in the institution are well defined as indicated below:
                    </div>
                    <div className="pt-6 text-center text-lg font-bold underline underline-offset">
                    <a
                            href="https://drive.google.com/file/d/1FVROz85xrsbumzMXE6IrRCWzi2ZXPuEq/view?usp=sharing"
                           className='text-xl underline'
                            target="_blank"
                            rel="noopener noreferrer">Roles and Responsibilities</a>
                    </div>
                </Card>
            </div>
            <Footer />
        </div>
    );
}
