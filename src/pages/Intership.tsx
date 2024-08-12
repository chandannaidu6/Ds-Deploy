import Card from "../components/Card";
import { Appbar } from "../components/Appbar";
import { Upper } from "../components/Upper";
import { Footer } from "../components/Footer";

export const Internship = () => {
    return (
        <div className="flex flex-col min-h-screen bg-black">
            <Upper />
            <Appbar />
            <div className="flex-grow text-white p-4">
                <Card>
                    <div className="pb-2 text-2xl font-bold text-center">
                        Internships
                    </div>
                    <div className="text-lg mb-4">
                        Internship provides an experiential learning for students. It facilitates students to work on live projects using sophisticated equipment. Students get exposed to industrial culture.
                    </div>
                    <div className="text-lg mb-4">
                        Internship is made mandatory under AR18 Regulations. A student shall be deemed to have satisfied the academic requirements and earned the credits allotted to Internship, if the student secures not less than 40% of the total marks allocated for the course. The student is deemed to have failed if they do not submit a report on their Internship, do not make a presentation of the same before the Departmental Evaluation Committee as per schedule, or secure less than 40% of marks in Internship evaluation.
                    </div>
                    <div className='text-center p-4'>
                     <a
                            href="https://docs.google.com/spreadsheets/d/1X7TlSOU4sfcGE_YZy7G3wNM6vBUuvtkt/edit?usp=sharing&ouid=106780119802873164960&rtpof=true&sd=true"
                           className='text-xl underline'
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                        2022-2023
                    </a>
                    </div>
                </Card>
            </div>
            <Footer />
        </div>
    );
};
