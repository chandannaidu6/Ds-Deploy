import Card from "../components/Card";
import { Appbar } from "../components/Appbar";
import { Upper } from "../components/Upper";
import { Footer } from "../components/Footer";
export const Vision = () => {
    return <div className='bg-cyan-50'>
        <Upper />
        <Appbar />
        <div>

        <Card>
            <div className = 'pb-2 text-2xl  font-bold text-center'>
                Vision of the Department
            </div>
            <div className="text-lg">
                To produce globally competent and socially responsible computer science engineers contributing to the advancement of engineering and technology which involves creativity and innovation by providing excellent learning environment with world class facilities.
            </div>

        </Card>
        <Card>
            <div className = 'pb-2 text-2xl  font-bold text-center'>
                Mission of the Department
            </div>
            <div>
                <ol className="text-lg list-decimal pl-2">
                    <li>To be a centre of excellence in instruction, innovation in research and scholarship, and service to the stake holders, the profession, and the public.</li>
                    <li>To prepare graduates to enter a rapidly changing field as a competent computer science engineer.</li>
                    <li>To prepare graduate capable in all phases of software development, possess a firm understanding of hardware technologies, have the strong mathematical background necessary for scientific computing, and be sufficiently well versed in general theory to allow growth within the discipline as it advances.</li>
                    <li>To prepare graduates to assume leadership roles by possessing good communication skills, the ability to work effectively as team members, and an appreciation for their social and ethical responsibility in a global setting</li>
                </ol>
            </div>

        </Card>
        <Footer />
 

        </div>
        


        
    </div>
}