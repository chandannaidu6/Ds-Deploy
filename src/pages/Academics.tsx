import Card from "../components/Card";
import { Appbar } from "../components/Appbar";
import { Upper } from "../components/Upper";
import { Footer } from "../components/Footer";
export const Academics = () => {
    return <div className='bg-cyan-50'>
        <Upper />
        <Appbar />
        <div>
        <Card>
        <div className = 'pb-4 text-2xl flex justify-center font-bold'>
            Academic and Planning
        </div>
        <div className = 'pb-2 text-xl  font-bold'>
            Work Load Allocation and Time Tables:  
        </div>
        <ul className="pb-2 text-lg list-disc ml-3">
            <li>Allocation of workload will be completed in department at least two weeks before the conclusion of the current semester</li>
            <li>The best teachers in the respective dept. to be allocated second year classes and then for third year classes.</li>
            <li>The best teachers should take the first period or first two periods every day. This would automatically force students to be in college on time to a very large extent.</li>
            <li>Two faculty members may be made available for tutorial sessions</li>
            <li>All teachers are requested to continue their class until the next teacher arrives except the period leading to the break.</li>
            <li>For third year students, twelve periods per week  will be kept for "Finishing School", any four days in the afternoon from Monday to Saturday</li>
            <li>Time-table for 2nd year and 3rd classes may include two periods each per week for vocabulary classes and BEC classes respectively.</li>
            <li>One period per week be allocated for Mentoring/Sports/Library </li>
        </ul>
        <div className = 'pt-2 text-xl  font-bold'>
            Administrative activities in the department:
        </div>
        <ul className="text-lg list-disc ml-3">
            <li>Head of the department conducts faculty meeting at regular intervals during the semester.</li>
            <li>Group Heads shall conduct meetings with the respective mentee faculty regularly.</li>
        </ul>
        <div className = 'pt-2 text-xl  font-bold'>
            Course Files, Lab Manuals, Lecture Notes and Text / Reference books.
        </div>
        <ul className='list-disc ml-3 text-lg'>
            <li>Course Files and lab manuals will be made available two weeks before the commencement of the semester.</li>
            <li>The Text books / Reference books being recommended by faculty be sent to library for purchase two weeks </li>
        </ul>
        <div className = 'text-xl pt-2  font-bold'>
            Lab Courses:    
        </div>
        <ul className='list-disc ml-3 text-lg'>
            <li>Counselors/Mentors list along with the student list will be prepared at least one week before the commencement of the semester.</li>
        </ul>
        <div className = 'pt-2 text-xl  font-bold'>
            Guest Lectures and industrial Visits  
        </div>
        <ul className='list-disc ml-3 text-lg'>
            <li>Course coordinator shall arrange Guest lectures depending upon the requirements.</li>
            <li>Industrial visits, at least one per section per semester be arranged positively. </li>
        </ul>
        </Card>
        <Footer />
        </div>
    </div>
}