import Card from "../components/Card";
import { Appbar } from "../components/Appbar";
import { Upper } from "../components/Upper";
import { Footer } from "../components/Footer";
export const TLP = () => {
    return <div className='bg-cyan-50'>
        <Upper />
        <Appbar />
        <div>
        <Card>
            <div className = 'text-2xl flex justify-center font-bold'>
                Teaching - Learning Process
            </div>
            <div className='text-lg text-justify'>
                Teaching involves planning and implementation of instructional activities and experiences to meet intended learning outcomes according to a specific teaching plan. Learning is a change in an individual behavior (Knowledge, Skill or Attitude) that can occur to a learner (student) as a result of teaching. Therefore the Teaching-Learning-Process is the most powerful instrument of education to bring about the desired changes in students. The program curriculum which is designed by the university is followed by our institution/ department as an affiliating body to the university, is an outcome based education that facilitates the students to acquire or possess a pre-defined set of graduating attributes described in the form of POs and PSOs. The Teaching-Learning-Process plays a pivotal role in allowing the students to attain these graduating attributes
            </div>
            <div className = 'pt-4 text-2xl flex justify-center font-bold'>
                Teaching Learning Process - Handbook
            </div>
            <div className='flex justify-center'>
              <img src="https://static.wixstatic.com/media/374af4_80eb76024f244c28a9c1e604db2a6846~mv2.jpeg/v1/fill/w_735,h_951,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Teaching-Learning-Process.jpeg" alt="Teaching-Learning-Process.jpeg" width="588" height="761" />
            </div>



        </Card>
        <Footer />
        </div>
    </div>
}