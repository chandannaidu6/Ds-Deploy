import Card from "../components/Card";
import { Appbar } from "../components/Appbar";
import { Upper } from "../components/Upper";
import { Footer } from "../components/Footer";
import techTalks from '../assets/techtalks.jpg'
export const DsClub = () =>{
    return <div className='bg-cyan-50'>
        <Upper />
        <Appbar />
        <Card>
            <div className = 'pb-4 text-2xl flex justify-center font-bold'>
                DS CLUB 
            </div>
            <div className = 'pb-2 text-xl  font-bold'>
               1. BIZ TECH SUMMIT
            </div>
            <div className='flex justify-center pb-4'>
                <img data-original-height="2800" data-original-width="6000" height="149" src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgYx_bNbsfTv3EiqOuh3bcFCsNU1vRifVj8ZnnMmAmdNy3PFpyIPElVcUcif7xuXJ9yzgqdvGaI-EORLTGq1Gz89UgGT_6BkWZCX8Xl94z96TuOak5Tg0x35nTTW5p6Nro_R8kshWymqq5ugW_vPwe_uVXCP7JQIdjnRURR3K_shmH03NX8kCV0NG4_Gq9z/s320/_DSC0283.jpg" width="320" />
            </div>
            <div className='text-lg pb-4 text-justify'>
                Biz-Tech Summit 2.0 is a 2-day summit conducted by the Data Science Club (Datum Decoders) of the Data Science Department (GCET). It was an interactive event aimed at providing basic knowledge to data science and business enthusiasts. The event provides the right platform to students who can come up with innovative technical solutions that can solve the majorly prevailing societal problems and concerns. This event simulates the real time business world where companies try to acquire projects and complete them within a stipulated budget. The Biz Tech Summit, by its name, tells us that it is a fusion of an entrepreneurial and a technical summit where representatives of various companies and ministries gather to discuss about significant problems prevailing in various ministerial departments that seek optimal solutions. The solutions have to be pitched by the company representatives and the problem statements will be described by the ministry representatives.
            </div>
            <div className = 'pb-2 text-xl  font-bold'>
               2. TECH TALK EXPO
            </div>
            <div className='flex justify-center pb-4'>
                <img data-original-height="2800" data-original-width="6000" height="149" src={techTalks} alt="TECH TALKS" width="320" />
            </div>
            <div className='text-lg pb-4 text-justify'>
                Tech Talk Expo is a 1-day expo conducted by the Data Science Club (Datum Decoders) of the Data Science Department (GCET). It was an interactive event aimed at providing basic knowledge to data science and business enthusiasts. The expo facilitates networking among students, faculty, industry professionals, and fellow enthusiasts. It fosters collaboration, knowledge exchange, and potential partnerships or career opportunities within the data science community. Attendees gain insights into emerging trends, challenges, and advancements in data science through discussions and panels led by students and invited experts. These insights contribute to a deeper understanding of the field's impact and potential future directions. Overall, a Tech Expo conducted by Data Science Department students serves as a platform for showcasing innovation, fostering learning, and promoting the practical application of data science principles in academic and professional contexts. It underscores the department's commitment to preparing students for careers in data-driven fields while contributing to the broader advancement of data science knowledge.             
            </div>
        </Card>
        <Footer />
    </div>
}