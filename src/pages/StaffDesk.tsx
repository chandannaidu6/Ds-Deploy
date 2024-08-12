import Card from "../components/Card";
import { Appbar } from "../components/Appbar";
import { Upper } from "../components/Upper";
import { Footer } from "../components/Footer";
export const StaffDesk = () => {
    return <div className='bg-black'>
        <Upper />
        <Appbar />
        <div className='text-white'>
        <Card>
            <div className = 'pb-4 text-2xl flex justify-center font-bold'>
                Role of Teacher
            </div>
            <div className='text-lg pb-2'>
                Teachers play vital roles in the lives of the students in their classrooms. Teachers are best known for the role of educating the students that are placed in their care. Beyond that, teachers serve many other roles in the classroom. Teachers set the tone of their classrooms, build a warm environment, mentor and nurture students, become role models, and listen and look for signs of trouble.
            </div>
            <div className = 'text-xl  font-bold pb-2'>
                Teaching Knowledge
            </div>
            <div className='text-lg pb-2'>
                The most common role a teacher plays in the classroom is to teach knowledge to children. Teachers are given a curriculum they must follow that meets state guidelines. This curriculum is followed by the teacher so that throughout the year, all pertinent knowledge is dispensed to the students. Teachers teach in many ways including lectures, small group activities and hands-on learning activities.
            </div>
            <div className = 'text-xl  font-bold pb-2'>
               Creating Classroom Environment
            </div>
            <div className="text-lg pb-2">
                Teachers also play an important role in the classroom when it comes to the environment. An environment set by the teacher can be either positive or negative.
            </div>
            <div className = 'text-xl  font-bold pb-2'>
               Role Modelling
            </div>
            <div className="text-lg pb-2">
                Teachers typically do not think of themselves as role models, however, inadvertently they are. Students spend a great deal of time with their teacher and therefore, the teacher becomes a role model to them. This can be a positive or negative effect depending on the teacher. Teachers are there not only to teach the children, but also to love and care for them. Teachers are typically highly respected by people in the community and therefore become a role model to students and parents.
            </div>
            <div className = 'text-xl  font-bold pb-2'>
               Mentoring
            </div>
            <div className="text-lg pb-2">
                Mentoring is a natural role taken on by teachers, whether it is intentional or not. This again can have positive or negative effects on children. Mentoring is a way a teacher encourages students to strive to be the best they can. This also includes encouraging students to enjoy learning. Part of mentoring consists of listening to students. By taking time to listen to what students say, teachers impart to students a sense of ownership in the classroom. This helps build their confidence and helps them want to be successful.
            </div>
            <div className = 'text-xl  font-bold pb-2'>
            The following attributes make the difference between a good teacher and a truly great teacher who becomes an inspiration to their students.

            </div>
 
            <ol className="text-lg list-decimal list-inside">
                <li>Compassion: Compassion is important not only when dealing with the students but also other teachers, other staff, and parents.</li>
                <li> Passion for Learning: Teaching can be incredibly stressful, so great teachers must have a deep passion to keep them going every day.</li>
                <li> Understanding: Teachers need a deep understanding of where their students are coming from  - their backgrounds, their struggles, and their abilities</li>
                <li>Patience: Patience is key. This is very true of teaching, and not just patience with the students! Teachers also need patience in dealing with the education system, bureaucracy, and parents as well.</li>
                <li>Ability to be a Role Model: Teachers must come into work every day knowing their students will soak up their actions like sponges. They must  show how to be a good person not just by telling, but also by being.</li>
                <li>Communication across Generations and Cultures: Teachers need to be able to effectively communicate with students from multiple cultures and generations, as well as teaching staff and superiors with various backgrounds and from other generations.</li>
                <li>Willingness to put in the Effort: If a teacher doesn’t care or doesn’t make the effort, their students won’t either. If a teacher shows students that they do truly care, they’ll do the same.</li>
            </ol>

        </Card>
        <Footer />
        </div>

    </div>
}