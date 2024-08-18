import Card from "../components/Card";
import { Appbar } from "../components/Appbar";
import { Upper } from "../components/Upper";
import { Footer } from "../components/Footer";
export const PEO = () => {
    return <div className='bg-cyan-50'>
        <Upper />
        <Appbar />
        <div>
        <Card>
            <div>
                <div className='text-3xl font-bold'>
                PEOs, POs and PSOs 

                </div>
                <div className='pt-4 text-2xl font-semibold'>
                    PROGRAM EDUCATIONAL OBJECTIVES:
                </div>
                <div className='text-lg pb-2 mb-2'>
                    <ol className="pl-4 pt-2 list-decimal">
                        <li>To provide graduates with a good foundation in mathematics, sciences and engineering fundamentals required to solve engineering problems that will facilitate them to find employment in industry and / or to pursue postgraduate studies with an appreciation for lifelong learning.</li>
                        <li>To provide graduates with analytical and problem solving skills to design algorithms, other hardware / software systems, and inculcate professional ethics, inter-personal skills to work in a multi-cultural team.</li>
                        <li>To facilitate graduates get familiarized with state of the art software / hardware tools, imbibing creativity and Innovation that would enable them to develop cutting-edge technologies of multi-disciplinary nature for societal development.</li>
                    </ol>
                </div>
                <div className='pt-4 text-2xl font-semibold'>
                    PROGRAMME OUTCOMES:
                </div>
                <div className="text-lg">
                The Program outcomes of B.Tech (CSE) department are being modified with reference to Graduate Attributes given by NBA in June 2015 are as below
                </div>
                <div className='text-lg pb-2 mb-2'>
                    <ol className="pl-4 pt-2 list-decimal">
                        <li>Engineering knowledge: Apply the knowledge of mathematics, science, engineering fundamentals, and an engineering specialization to the solution of complex engineering problems.</li>
                        <li>Problem analysis: Identify, formulate, review research literature, and analyze complex engineering problems reaching substantiated conclusions using first principles of mathematics, natural sciences, and engineering sciences.</li>
                        <li>Design/development of solutions : Design solutions for complex engineering problems and design system components or processes that meet the specified needs with appropriate consideration for the public health and safety, and the cultural, societal, and environmental considerations.</li>
                        <li>Conduct investigations of complex problems: Use research-based knowledge and research methods including design of experiments, analysis and interpretation of data, and synthesis of the information to provide valid conclusions.</li>
                        <li>Modern tool usage: Create, select, and apply appropriate techniques, resources, and modern engineering and IT tools including prediction and modelling to complex engineering activities with an understanding of the limitations.</li>
                        <li>The engineer and society: Apply reasoning informed by the contextual knowledge to assess societal, health, safety, legal and cultural issues and the consequent responsibilities relevant to the professional engineering practice.</li>
                        <li>Environment and sustainability: Understand the impact of the professional engineering solutions in societal and environmental contexts, and demonstrate the knowledge of, and need for sustainable development.</li>
                    </ol>
                </div>
                <div className='pt-4 text-2xl font-semibold'>
                    PROGRAM SPECIFIC OUTCOMES:
                </div>
                <div>
                    <div className="flex">
                        <div className="font-bold">
                            PSO1:
                        </div>
                        <div className="text-lg">
                        Demonstrate competency in Programming and problem solving skills and apply those skills in solving computing problems     
                        </div>
                    </div>
                    <div className="flex">
                        <div className="font-bold">
                            PSO2:
                        </div>
                        <div className="text-lg">
                        Select appropriate programming languages, Data structures and algorithms in combination with modern technologies and apply them in developing innovative solutions
                        </div>


                    </div>
                    <div className='flex'>
                    <div className="font-bold">
                            PSO3:
                        </div>
                        <div className="text-lg">
                        Apply techniques of data modeling, analysis and visualization which include statistical techniques to solve real world problems delivering actionable insights for decision making.                        </div>

                    </div>
                </div>

            </div>
        </Card>
        <Footer />

        </div>
    </div>
}