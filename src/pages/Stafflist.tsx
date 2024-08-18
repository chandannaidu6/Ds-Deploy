import Card from "../components/Card";
import { Appbar } from "../components/Appbar";
import { Upper } from "../components/Upper";
import { Footer } from "../components/Footer";
export const Stafflist = () => {
    return <div className='bg-cyan-50'>
        <Upper />
        <Appbar />
        <div>
        <Card>
    <div className="sm:max-w-3xl lg:max-w-7xl overflow-x-auto">
        <div className='pb-2 text-2xl font-bold text-center'>Faculty and Staff List</div>
        <div>
            <table className='table-auto w-full border-2 border-black'>
                <thead>
                    <tr className='border-2 border-black'>
                        <th className='px-4 py-2 border-2 border-black'>Sl. No.</th>
                        <th className='px-4 py-2 border-2 border-black'>Name of the Staff Member</th>
                        <th className='px-4 py-2 border-2 border-black'>Category</th>
                        <th className='px-4 py-2 border-2 border-black'>Designation</th>
                        <th className='px-4 py-2 border-2 border-black'>UG</th>
                        <th className='px-4 py-2 border-2 border-black'>PG</th>
                        <th className='px-4 py-2 border-2 border-black'>Ph.D</th>
                        <th className='px-4 py-2 border-2 border-black'>Teaching Experience</th>
                        <th className='px-4 py-2 border-2 border-black'>Date of Joining</th>
                        <th className='px-4 py-2 border-2 border-black'>Faculty Registration ID</th>
                        <th className='px-4 py-2 border-2 border-black'>Gender</th>
                        <th className='px-4 py-2 border-2 border-black'>Category.</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className='px-4 py-2 border-2 border-black'>1</td>
                        <td className='px-4 py-2 border-2 border-black'>Dr. L. Kiran Kumar Reddy</td>
                        <td className='px-4 py-2 border-2 border-black'>UG</td>
                        <td className='px-4 py-2 border-2 border-black'>HoD & Associate Professor</td>
                        <td className='px-4 py-2 border-2 border-black'>BE</td>
                        <td className='px-4 py-2 border-2 border-black'>M.Tech. (SE)</td>
                        <td className='px-4 py-2 border-2 border-black'>Ph.D</td>
                        <td className='px-4 py-2 border-2 border-black'>21</td>
                        <td className='px-4 py-2 border-2 border-black'>29.08.2022</td>
                        <td className='px-4 py-2 border-2 border-black'>4612-151217-230709</td>
                        <td className='px-4 py-2 border-2 border-black'>M</td>
                        <td className='px-4 py-2 border-2 border-black'>OC</td>
                    </tr>
                    <tr>
                        <td className='px-4 py-2 border-2 border-black'>2</td>
                        <td className='px-4 py-2 border-2 border-black'>Dr. K. Neeraja</td>
                        <td className='px-4 py-2 border-2 border-black'>UG</td>
                        <td className='px-4 py-2 border-2 border-black'>Professor</td>
                        <td className='px-4 py-2 border-2 border-black'>B.Sc</td>
                        <td className='px-4 py-2 border-2 border-black'>MCA, M.Tech.</td>
                        <td className='px-4 py-2 border-2 border-black'>Ph.D</td>
                        <td className='px-4 py-2 border-2 border-black'>19</td>
                        <td className='px-4 py-2 border-2 border-black'>20.07.2021</td>
                        <td className='px-4 py-2 border-2 border-black'>62150406-101224</td>
                        <td className='px-4 py-2 border-2 border-black'>F</td>
                        <td className='px-4 py-2 border-2 border-black'>BC</td>
                    </tr>
                    <tr>
                        <td className='px-4 py-2 border-2 border-black'>3</td>
                        <td className='px-4 py-2 border-2 border-black'>Dr. K. Ambedkar</td>
                        <td className='px-4 py-2 border-2 border-black'>UG</td>
                        <td className='px-4 py-2 border-2 border-black'>Associate Professor</td>
                        <td className='px-4 py-2 border-2 border-black'>B.Sc</td>
                        <td className='px-4 py-2 border-2 border-black'>M.Tech . (IT)</td>
                        <td className='px-4 py-2 border-2 border-black'>Ph.D</td>
                        <td className='px-4 py-2 border-2 border-black'>6.8</td>
                        <td className='px-4 py-2 border-2 border-black'>22.03.2021</td>
                        <td className='px-4 py-2 border-2 border-black'>3420-191107-161934</td>
                        <td className='px-4 py-2 border-2 border-black'>M</td>
                        <td className='px-4 py-2 border-2 border-black'>SC</td>
                    </tr>
                    <tr>
                        <td className='px-4 py-2 border-2 border-black'>4</td>
                        <td className='px-4 py-2 border-2 border-black'>Dr. A. Venkata Ramana</td>
                        <td className='px-4 py-2 border-2 border-black'>UG</td>
                        <td className='px-4 py-2 border-2 border-black'>Associate Professor</td>
                        <td className='px-4 py-2 border-2 border-black'>B.Sc</td>
                        <td className='px-4 py-2 border-2 border-black'>M.Sc, M.Tech</td>
                        <td className='px-4 py-2 border-2 border-black'>Ph.D</td>
                        <td className='px-4 py-2 border-2 border-black'>25.6</td>
                        <td className='px-4 py-2 border-2 border-black'>18.01.2023</td>
                        <td className='px-4 py-2 border-2 border-black'>4147-150415-121607</td>
                        <td className='px-4 py-2 border-2 border-black'>M</td>
                        <td className='px-4 py-2 border-2 border-black'>OC</td>
                    </tr>
                    <tr>
                        <td className='px-4 py-2 border-2 border-black'>5</td>
                        <td className='px-4 py-2 border-2 border-black'>T. Pandu Ranga</td>
                        <td className='px-4 py-2 border-2 border-black'>UG</td>
                        <td className='px-4 py-2 border-2 border-black'>Associate Professor</td>
                        <td className='px-4 py-2 border-2 border-black'>AME</td>
                        <td className='px-4 py-2 border-2 border-black'>M.Tech. (CSE)</td>
                        <td className='px-4 py-2 border-2 border-black'>-</td>
                        <td className='px-4 py-2 border-2 border-black'>26.4</td>
                        <td className='px-4 py-2 border-2 border-black'>24.02.2022</td>
                        <td className='px-4 py-2 border-2 border-black'>0395-171227-101529</td>
                        <td className='px-4 py-2 border-2 border-black'>M</td>
                        <td className='px-4 py-2 border-2 border-black'>OC</td>
                    </tr>
                    <tr>
                        <td className='px-4 py-2 border-2 border-black'>6</td>
                        <td className='px-4 py-2 border-2 border-black'>S. Tirupathi Rao</td>
                        <td className='px-4 py-2 border-2 border-black'>UG</td>
                        <td className='px-4 py-2 border-2 border-black'>Associate Professor & Coord.-Internships</td>
                        <td className='px-4 py-2 border-2 border-black'>B.E (CE)</td>
                        <td className='px-4 py-2 border-2 border-black'>M.Tech. (CSE)</td>
                        <td className='px-4 py-2 border-2 border-black'>-</td>
                        <td className='px-4 py-2 border-2 border-black'>19.01</td>
                        <td className='px-4 py-2 border-2 border-black'>25.08.2021</td>
                        <td className='px-4 py-2 border-2 border-black'>42150406-160745</td>
                        <td className='px-4 py-2 border-2 border-black'>M</td>
                        <td className='px-4 py-2 border-2 border-black'>OC</td>
                    </tr>
                    <tr>
                        <td className='px-4 py-2 border-2 border-black'>7</td>
                        <td className='px-4 py-2 border-2 border-black'>G. Vijay  Kumar</td>
                        <td className='px-4 py-2 border-2 border-black'>UG</td>
                        <td className='px-4 py-2 border-2 border-black'>Sr. Asst. Prof.</td>
                        <td className='px-4 py-2 border-2 border-black'>B.Tech.</td>
                        <td className='px-4 py-2 border-2 border-black'>M.Tech. (CSE)</td>
                        <td className='px-4 py-2 border-2 border-black'>-</td>
                        <td className='px-4 py-2 border-2 border-black'>16.11</td>
                        <td className='px-4 py-2 border-2 border-black'>19.07.2021</td>
                        <td className='px-4 py-2 border-2 border-black'>20150404-141037</td>
                        <td className='px-4 py-2 border-2 border-black'>M</td>
                        <td className='px-4 py-2 border-2 border-black'>SC</td>
                    </tr>
                    <tr>
                        <td className='px-4 py-2 border-2 border-black'>8</td>
                        <td className='px-4 py-2 border-2 border-black'>M. V. Lavanya</td>
                        <td className='px-4 py-2 border-2 border-black'>UG</td>
                        <td className='px-4 py-2 border-2 border-black'>Asst. Prof.</td>
                        <td className='px-4 py-2 border-2 border-black'>B.Tech. (IT)</td>
                        <td className='px-4 py-2 border-2 border-black'>M.Tech. (SE)</td>
                        <td className='px-4 py-2 border-2 border-black'>-</td>
                        <td className='px-4 py-2 border-2 border-black'>7.4</td>
                        <td className='px-4 py-2 border-2 border-black'>08.03.2021</td>
                        <td className='px-4 py-2 border-2 border-black'>3512-210312-155957</td>
                        <td className='px-4 py-2 border-2 border-black'>F</td>
                        <td className='px-4 py-2 border-2 border-black'>OC</td>
                    </tr>
                    <tr>
                        <td className='px-4 py-2 border-2 border-black'>9</td>
                        <td className='px-4 py-2 border-2 border-black'>P. Sangeetha</td>
                        <td className='px-4 py-2 border-2 border-black'>UG</td>
                        <td className='px-4 py-2 border-2 border-black'>Asst. Prof.</td>
                        <td className='px-4 py-2 border-2 border-black'>B.Tech.</td>
                        <td className='px-4 py-2 border-2 border-black'>M.Tech. (CSE)</td>
                        <td className='px-4 py-2 border-2 border-black'>-</td>
                        <td className='px-4 py-2 border-2 border-black'>4</td>
                        <td className='px-4 py-2 border-2 border-black'>05.07.2021</td>
                        <td className='px-4 py-2 border-2 border-black'>6732-161222-141635</td>
                        <td className='px-4 py-2 border-2 border-black'>F</td>
                        <td className='px-4 py-2 border-2 border-black'>SC-C</td>
                    </tr>
                    <tr>
                        <td className='px-4 py-2 border-2 border-black'>10</td>
                        <td className='px-4 py-2 border-2 border-black'>N. Madhavi</td>
                        <td className='px-4 py-2 border-2 border-black'>UG</td>
                        <td className='px-4 py-2 border-2 border-black'>Asst. Prof.</td>
                        <td className='px-4 py-2 border-2 border-black'>B.Tech. (IT)</td>
                        <td className='px-4 py-2 border-2 border-black'>M.Tech. (CSE)</td>
                        <td className='px-4 py-2 border-2 border-black'>-</td>
                        <td className='px-4 py-2 border-2 border-black'>1.2</td>
                        <td className='px-4 py-2 border-2 border-black'>02.05.2022</td>
                        <td className='px-4 py-2 border-2 border-black'>1642-220530-130955</td>
                        <td className='px-4 py-2 border-2 border-black'>F</td>
                        <td className='px-4 py-2 border-2 border-black'>BC-B</td>
                    </tr>
                    <tr>
                        <td className='px-4 py-2 border-2 border-black'>11</td>
                        <td className='px-4 py-2 border-2 border-black'>G. Rajasri</td>
                        <td className='px-4 py-2 border-2 border-black'>UG</td>
                        <td className='px-4 py-2 border-2 border-black'>Asst. Prof.</td>
                        <td className='px-4 py-2 border-2 border-black'>B.Sc</td>
                        <td className='px-4 py-2 border-2 border-black'>M.Tech., MCA</td>
                        <td className='px-4 py-2 border-2 border-black'>-</td>
                        <td className='px-4 py-2 border-2 border-black'>10.10</td>
                        <td className='px-4 py-2 border-2 border-black'>29.08.2022</td>
                        <td className='px-4 py-2 border-2 border-black'>8982-211206-130127</td>
                        <td className='px-4 py-2 border-2 border-black'>F</td>
                        <td className='px-4 py-2 border-2 border-black'>BC-B</td>
                    </tr>
                    <tr>
                        <td className='px-4 py-2 border-2 border-black'>12</td>
                        <td className='px-4 py-2 border-2 border-black'>B. Venkateswarlu</td>
                        <td className='px-4 py-2 border-2 border-black'>UG</td>
                        <td className='px-4 py-2 border-2 border-black'>Asst. Prof.</td>
                        <td className='px-4 py-2 border-2 border-black'>B.Tech.</td>
                        <td className='px-4 py-2 border-2 border-black'>M.Tech. (CN&IS)</td>
                        <td className='px-4 py-2 border-2 border-black'>-</td>
                        <td className='px-4 py-2 border-2 border-black'>11.08</td>
                        <td className='px-4 py-2 border-2 border-black'>10.10.2022</td>
                        <td className='px-4 py-2 border-2 border-black'>66150402-171228</td>
                        <td className='px-4 py-2 border-2 border-black'>M</td>
                        <td className='px-4 py-2 border-2 border-black'>SC</td>
                    </tr>
                    <tr>
                        <td className='px-4 py-2 border-2 border-black'>13</td>
                        <td className='px-4 py-2 border-2 border-black'>K Srilatha</td>
                        <td className='px-4 py-2 border-2 border-black'>UG</td>
                        <td className='px-4 py-2 border-2 border-black'>Asst. Prof.</td>
                        <td className='px-4 py-2 border-2 border-black'>B.Tech.</td>
                        <td className='px-4 py-2 border-2 border-black'>M.Tech. (SE)</td>
                        <td className='px-4 py-2 border-2 border-black'>-</td>
                        <td className='px-4 py-2 border-2 border-black'>7.06</td>
                        <td className='px-4 py-2 border-2 border-black'>19.12.2022</td>
                        <td className='px-4 py-2 border-2 border-black'>7269-150411-111837</td>
                        <td className='px-4 py-2 border-2 border-black'>F</td>
                        <td className='px-4 py-2 border-2 border-black'>OC</td>
                    </tr>
                    <tr>
                        <td className='px-4 py-2 border-2 border-black'>14</td>
                        <td className='px-4 py-2 border-2 border-black'>K Laxmi</td>
                        <td className='px-4 py-2 border-2 border-black'>UG</td>
                        <td className='px-4 py-2 border-2 border-black'>Asst. Prof.</td>
                        <td className='px-4 py-2 border-2 border-black'>B.Tech.</td>
                        <td className='px-4 py-2 border-2 border-black'>M.Tech. (SE)</td>
                        <td className='px-4 py-2 border-2 border-black'>-</td>
                        <td className='px-4 py-2 border-2 border-black'>15.06</td>
                        <td className='px-4 py-2 border-2 border-black'>31.12.2022</td>
                        <td className='px-4 py-2 border-2 border-black'>9674-160222-100939</td>
                        <td className='px-4 py-2 border-2 border-black'>F</td>
                        <td className='px-4 py-2 border-2 border-black'>BC-D</td>
                    </tr>
                    <tr>
                        <td className='px-4 py-2 border-2 border-black'>15</td>
                        <td className='px-4 py-2 border-2 border-black'>M. Anusha Sri</td>
                        <td className='px-4 py-2 border-2 border-black'>UG</td>
                        <td className='px-4 py-2 border-2 border-black'>Asst. Prof.</td>
                        <td className='px-4 py-2 border-2 border-black'>B.Tech.</td>
                        <td className='px-4 py-2 border-2 border-black'>M.Tech. (SE)</td>
                        <td className='px-4 py-2 border-2 border-black'>-</td>
                        <td className='px-4 py-2 border-2 border-black'>10</td>
                        <td className='px-4 py-2 border-2 border-black'>01.02.2023</td>
                        <td className='px-4 py-2 border-2 border-black'>8208-230202-135509</td>
                        <td className='px-4 py-2 border-2 border-black'>F</td>
                        <td className='px-4 py-2 border-2 border-black'>BC-D</td>
                    </tr>
                    <tr>
                        <td className='px-4 py-2 border-2 border-black'>16</td>
                        <td className='px-4 py-2 border-2 border-black'>A Bixapathi</td>
                        <td className='px-4 py-2 border-2 border-black'>UG</td>
                        <td className='px-4 py-2 border-2 border-black'>Asst. Prof.</td>
                        <td className='px-4 py-2 border-2 border-black'>B.Tech. (IT)</td>
                        <td className='px-4 py-2 border-2 border-black'>M.Tech. (SE)</td>
                        <td className='px-4 py-2 border-2 border-black'>-</td>
                        <td className='px-4 py-2 border-2 border-black'>10.04</td>
                        <td className='px-4 py-2 border-2 border-black'>26.02.2022</td>
                        <td className='px-4 py-2 border-2 border-black'>41150407-152301</td>
                        <td className='px-4 py-2 border-2 border-black'>M</td>
                        <td className='px-4 py-2 border-2 border-black'>SC</td>
                    </tr>
                    <tr>
                        <td className='px-4 py-2 border-2 border-black'>17</td>
                        <td className='px-4 py-2 border-2 border-black'>P. Shambhavi</td>
                        <td className='px-4 py-2 border-2 border-black'>UG</td>
                        <td className='px-4 py-2 border-2 border-black'>Asst. Prof.</td>
                        <td className='px-4 py-2 border-2 border-black'>B.Tech. (CSE)</td>
                        <td className='px-4 py-2 border-2 border-black'>M.Tech. (CSE)</td>
                        <td className='px-4 py-2 border-2 border-black'>-</td>
                        <td className='px-4 py-2 border-2 border-black'>1.2</td>
                        <td className='px-4 py-2 border-2 border-black'>02.05.2022</td>
                        <td className='px-4 py-2 border-2 border-black'>7634-220506-111553</td>
                        <td className='px-4 py-2 border-2 border-black'>F</td>
                        <td className='px-4 py-2 border-2 border-black'>BC-A</td>
                    </tr>
                    <tr>
                        <td className='px-4 py-2 border-2 border-black'>18</td>
                        <td className='px-4 py-2 border-2 border-black'>G . Raga Mounika</td>
                        <td className='px-4 py-2 border-2 border-black'>UG</td>
                        <td className='px-4 py-2 border-2 border-black'>Asst. Prof.</td>
                        <td className='px-4 py-2 border-2 border-black'>B.Tech. (CSE)</td>
                        <td className='px-4 py-2 border-2 border-black'>M.Tech. (CSE)</td>
                        <td className='px-4 py-2 border-2 border-black'>-</td>
                        <td className='px-4 py-2 border-2 border-black'>F</td>
                        <td className='px-4 py-2 border-2 border-black'>20.10.2023</td>
                        <td className='px-4 py-2 border-2 border-black'>0908-231021-102458</td>
                        <td className='px-4 py-2 border-2 border-black'>F</td>
                        <td className='px-4 py-2 border-2 border-black'>OC</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
    </Card>
    <Card>
    <div className='pb-2 text-2xl font-bold text-center'>Teaching</div>
        <div>
            <table className='table-auto w-full border-2 border-black'>
            <thead>
                    <tr className='border-2 border-black'>
                        <th className='px-4 py-2 border-2 border-black'>Dept.</th>
                        <th className='px-4 py-2 border-2 border-black'>Existing</th>
                        <th className='px-4 py-2 border-2 border-black'>Resigned</th>
                        <th className='px-4 py-2 border-2 border-black'>M</th>
                        <th className='px-4 py-2 border-2 border-black'>F</th>
                    </tr>
            </thead>
            <tbody>
                    <tr>
                        <td className='px-4 py-2 border-2 border-black'>DS</td>
                        <td className='px-4 py-2 border-2 border-black'>18</td>
                        <td className='px-4 py-2 border-2 border-black'>-</td>
                        <td className='px-4 py-2 border-2 border-black'>7</td>
                        <td className='px-4 py-2 border-2 border-black'>11</td>
                    </tr>
                    <tr>
                        <td className='px-4 py-2 border-2 border-black'>Total</td>
                        <td className='px-4 py-2 border-2 border-black'>18</td>
                        <td className='px-4 py-2 border-2 border-black'>-</td>
                        <td className='px-4 py-2 border-2 border-black'>7</td>
                        <td className='px-4 py-2 border-2 border-black'>11</td>
                    </tr>

            </tbody>
            </table>
        </div>
    </Card>
        <Footer />
        </div>

</div>
}