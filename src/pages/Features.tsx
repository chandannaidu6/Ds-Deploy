import { Appbar } from "../components/Appbar"
import Card from "../components/Card"
import { Upper } from "../components/Upper"
import { Footer } from "../components/Footer"
export const Features = () => {

    return <div className='bg-black'>
        <Upper />
        <Appbar />
        <div className='text-white'>
        <Card>
            <div className='pb-2 text-2xl font-bold text-center px-3'>Salient Features of the Department</div>
            <div className='text-justify text-lg pb-2'>
                B.Tech (Computer Science and Engineering) Emerging Areas are established with four programs, namely, - B.Tech. "Computer Science and Engineering - Artificial Intelligence and Machine Learning" (CSE-AI&ML), B.Tech. "Computer Science and Engineering - Data Science" (CSE-DS), B.Tech. "Computer Science and Engineering - Cyber Security" (CSE-CS) and B.Tech. "Computer Science and Engineering - Internet of Things" (CSE-IoT), each with an intake of 60 in the academic year 2020-21. Subsequently, intake in B.Tech. (CSE-AI&ML) are increased to 180 in the academic year 2021-22, 240 in the academic year 2023-24, intake in B.Tech. (CSE-CS) are increased to 180 in the academic year 2023-24, intake in B.Tech. (CSE-DS) are increased to 180 in the academic year 2023-24.
            </div>
            <div className='text-lg block  pb-2'>
                The Department is chaired by Dr. L. Venkateswarlu, he has a total experience of 26 years in Teaching and Research, an accomplished teacher and researcher demonstrating consistent success. He is also an able administrator and communicates effectively. He has good organizational and negotiation skills. Establishes reachable goals, meticulously plans to ensure participation by all and reaches consensus to attain desirable dreams.
            </div>
            <div className="text-lg block">    
                Department has 3 Professors, 18 Associate Professors, and 45 Assistant Professors. Among these, 10 doctorates in the department. The department has a supporting staff to assist and maintain the computer laboratories.
                There are 2 Professors, 2 Associate Professors, and 11 Assistant Professors and 15 doctorates in the department. The department has a Programmer and 5 System Administrators to assist and maintain the computer laboratories. All the faculty members are encouraged to participate in Faculty Development Programmes, Conferences, Workshops, Publication of Research Papers and active involvement in R & D activity.


            </div>
        </Card>
        <Footer />

        </div>
        </div>
}