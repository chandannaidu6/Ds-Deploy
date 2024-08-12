import Card from "../components/Card";
import { Appbar } from "../components/Appbar";
import { Upper } from "../components/Upper";
import { Footer } from "../components/Footer";

export const IQAC = () => {
    return (
        <div className="flex flex-col min-h-screen bg-black">
            <Upper />
            <Appbar />
            <div className="flex-grow text-white">
                <Card>
                    <div className="text-2xl flex justify-center font-bold">
                        Internal Quality Assurance Cell - IQAC
                    </div>
                    <div className="text-lg">
                        In the context of Autonomous Status that has been conferred to the college, Internal Quality Assurance Cell (IQAC) of the college gains paramount importance to ensure quality in all aspects. Therefore, IQAC activities play a significant role in providing quality learning experience to students, enrichment of teaching satisfaction to faculty and staff.
                    </div>
                    <div className="text-lg underline underline-offset-1">
                        <a
                            href="https://drive.google.com/file/d/1v841sfLIqYN82KG5EOWR0bxstCmESiXF/view"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Academic Audit Process
                        </a>
                    </div>
                </Card>
            </div>
            <Footer />
        </div>
    );
}
