import { Appbar } from "../components/Appbar"
import Card from "../components/Card"
import { Upper } from "../components/Upper"
import { Footer } from "../components/Footer"
export const Act = () => {
    return <div className='bg-black'>
        <Upper/>

        <Appbar />
        <div className='text-white'>
        <Card>
    <div className='pb-2 text-2xl font-bold text-center'>Publications</div>
        <div className='overflow-x-auto'>
            <table className='table-auto w-full border-2 border-black'>
            <thead>
                    <tr className='bg-black border-2 border-black whitespace-normal'>
                        <th className='px-4 py-2 border-2 border-black whitespace-normal'>S.No</th>
                        <th className='px-4 py-2 border-2 border-black whitespace-normal'>Name of the author/s</th>
                        <th className='px-4 py-2 border-2 border-black whitespace-normal'>Title of Paper</th>
                        <th className='px-4 py-2 border-2 border-black whitespace-normal'>Name of Journal</th>
                        <th className='px-4 py-2 border-2 border-black whitespace-normal'>Year of Publication</th>
                        <th className='px-4 py-2 border-2 border-black whitespace-normal'>ISSN Number</th>
                        <th className='px-4 py-2 border-2 border-black whitespace-normal'>Link to the Recognition in UGC Enlistment of the Journal</th>

                    </tr>
            </thead>
            <tbody>
                    <tr>
                        <td className='px-4 py-2 border-2 border-black whitespace-normal'>1</td>
                        <td className='px-4 py-2 border-2 border-black whitespace-normal'>Ambedkar Kanapala, Suresh Dara, Jinka Sreedhar, Ankit Vidyarthi, Deepak Gupta, Punit Gupta</td>
                        <td className='px-4 py-2 border-2 border-black whitespace-normal'>Recommendation of Electronic Mobile Gadgets Using Infused Decision Score with Mobile Radiation and Federated Sentiment Score</td>
                        <td className='px-4 py-2 border-2 border-black whitespace-normal'>IEEE TRANSACTIONS ON CONSUMER ELECTRONICS</td>
                        <td className='px-4 py-2 border-2 border-black whitespace-normal'>01-01-2024</td>
                        <td className='px-4 py-2 border-2 border-black whitespace-normal'>0098-3063</td>
                        <td className='px-4 py-2 border-2 border-black whitespace-normal'>                     
                            <a
                            href="https://ieeexplore.ieee.org/abstract/document/10382180"
                           className='text-blue-500 underline'
                            target="_blank"
                            rel="noopener noreferrer"
                        >https://ieeexplore.ieee.org/abstract/document/10382180</a></td>

                    </tr>
                    <tr>
                        <td className='px-4 py-2 border-2 border-black whitespace-normal'>2</td>
                        <td className='px-4 py-2 border-2 border-black whitespace-normal'>Mr. Suresh Chimkode, Dr. Milind Singh</td>
                        <td className='px-4 py-2 border-2 border-black whitespace-normal'>A Study on Automatic Based Database Schema Description from Shapeless Necessities Document</td>
                        <td className='px-4 py-2 border-2 border-black whitespace-normal'>Journal of Systems Engineering and Electronics</td>
                        <td className='px-4 py-2 border-2 border-black whitespace-normal'>01-02-2024</td>
                        <td className='px-4 py-2 border-2 border-black whitespace-normal'>1671-1793 & Vol 34, Issue 3, Page no 128-147</td>
                        <td className='px-4 py-2 border-2 border-black whitespace-normal'>             <a
                            href="https://jseepublisher.com/volume-34-issue-3-2024/"
                           className='text-blue-500 underline'
                            target="_blank"
                            rel="noopener noreferrer"
                        >https://jseepublisher.com/volume-34-issue-3-2024/</a></td>

                    </tr>
                    <tr>
                        <td className='px-4 py-2 border-2 border-black whitespace-normal'>3</td>
                        <td className='px-4 py-2 border-2 border-black whitespace-normal'>G Soma Sekhar, Shubhangi Mahadik, Attili Venkata Ramana, Pundru Chandra Shaker Reddy, N Pughazendi and S Asif</td>
                        <td className='px-4 py-2 border-2 border-black whitespace-normal'>Prediction of Traffic Accidents Using Deep Learning Ensemble Model</td>
                        <td className='px-4 py-2 border-2 border-black whitespace-normal'>Publisher: IEEE 2023 International Conference on Innovative Computing, Intelligent Communication and Smart Electrical Systems (ICSES)</td>
                        <td className='px-4 py-2 border-2 border-black whitespace-normal'>Date of Conference: 14-15 December 2023</td>
                        <td className='px-4 py-2 border-2 border-black whitespace-normal'>Electronic ISBN:979-8-3503-1920-0 DOI: 10.1109/ICSES60034.2023.10465425</td>
                        <td className='px-4 py-2 border-2 border-black whitespace-normal'></td>

                    </tr>

            </tbody>
            </table>
        </div>
    </Card>
    <Footer />
        </div>
        </div>
}