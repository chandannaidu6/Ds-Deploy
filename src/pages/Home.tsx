import { Appbar } from "../components/Appbar"
import Card from "../components/Card"
import { ImageSlider } from "../components/ImageSlider"
import { Upper } from "../components/Upper"
import { Footer } from "../components/Footer"
export const Home = () => {

    return <div className='bg-black'>
        <Upper />

        <Appbar />
        <Card>
        <div className='text-white'>
            <div className='text-2xl font-semibold pb-4'>
                Announcements
            </div>
            <div className='whitespace-nowrap' style={{ display: 'flex', alignItems: 'center' }}>
                <div className='text-md font-semibold'>
                    11/07: 
                </div>
            <div className='font-bold'>
                B.Tech 3.2 CBT Exam Fee Notification - 
                <a 
                    href="https://drive.google.com/file/d/1hHcdmjzlaWnRDuSI3Wf2HWtyZh9E6evL/preview" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className='text-blue-500 underline'
                >
                    Available here
                </a>
                </div>
            </div>
        </div>


        </Card>
        <Card>
            <ImageSlider />
            <div className='mt-2 flex justify-start justify-between'>
            <button className="border text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                type="button">
                <a
                    href="https://www.geethanjaliinstitutions.com/engineering/img/downloads/GCET%20brochure.pdf"
                    target="_blank"
                    rel="noopener noreferrer">Brochure</a>


            </button>
            <button className="border text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                type="button">
                <a
                    href="https://www.youtube.com/watch?v=9NEnZESNoHI&t=219s"
                    target="_blank"
                    rel="noopener noreferrer">Video Prospectus</a>

            </button>
            <button className="border text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                type="button">
                <a
                    href="https://www.geethanjaliinstitutions.com/"
                    target="_blank"
                    rel="noopener noreferrer">College Website</a>

            </button>

            </div>
        </Card>
        <Card>
            <div className='text-white'>
                <div className='pb-4 text-center text-2xl font-semibold'>
                    WELCOME TO THE DEPARTMENT OF EA(DATA SCIENCE) 

                </div>
                <div className='text-justify pb-2 mb-2 text-lg'>
                    Geethanjali College of Engineering and Technology (GCET) was established in the year 2005 under the aegis of Teja Educational Society constituted by a group of academicians and intellectuals. It became an autonomous institution in the year 2016. In the year 2017, the institution was accredited by NAAC with 'A' Grade and with a score of 3.36 on a scale of 4, it was the highest by any institution in AP and Telangana that went for accreditation for first time. In 2022, the institution is re-accredited by NAAC with A+ grade. 
                </div>
                <div className='text-lg block pb-2 mb-2'>

                    Presently the college is offering Undergraduate programs in 10 disciplines namely CE, ME, ECE, EEE, IT, CSE, CSE(IoT), CSE(Cyber Security), CSE(AI&ML), CSE(Data Science) and Postgraduate programs in CSE & MBA. The college which is regarded as one of the premier institutions in and around Telangana  state has been carrying forward the legacy of quality education, guiding thousands of students in shaping their future and moulding them into responsible engineers that the country would be proud of.
                </div>
                <div className='text-lg block'>
​                   The Department of Data Science was started in the year 2020 with an initial intake of 60 students. Right from its inception it is continuously striving to impart quality education and promoting competitive spirit among students for academic excellence. The intake was enhanced to 240 w.e.f 2022-23 academic year. The department has well equipped laboratories, good infrastructure, highly qualified and experienced faculty. A good number of research papers are published by the faculty in National/International conference proceedings/Journals. The department has signed MOUs with various organizations to provide real time training to the students.
                </div>
            </div>
        </Card>

        <Footer />

    </div>
}