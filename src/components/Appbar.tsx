import { Dropdown } from "../components/Dropdown";
import { Link } from "react-router-dom";

export const Appbar = () => {
    return (
        <div className='flex justify-center h-full'>
            <div className='border border-orange-400 rounded w-full max-w-7xl'>
                <div className='flex justify-start flex-wrap'>
                    <Dropdown size={3} ButtonName="HOME" Buttons={['Vision and Mission', 'PEOs,POs and PSOs', 'Salient Features of the Department']} Links={['/vision', '/peo', '/features']} dropdownLink="/" />
                    <Dropdown size={2} ButtonName="Staff Desk" Buttons={['Faculty and Staff list', 'Roles and Responsibilities']} Links={['/stafflist', '/roles']} dropdownLink="/staffdesk" />
                    <Dropdown size={1} ButtonName="Student Desk" Buttons={['Instructions']} Links={['/instructions']} />
                    <Dropdown size={3} ButtonName="Research" Buttons={['Research and Consultancy Policy', 'Research Activities','Research Intiatives']} Links={['/consultancy', '/act', '/initiatives']} />
                    <Dropdown size={3} ButtonName="Academics" Buttons={['Regulations and Syllabus','Internships','Industrial Visits']} Links={['/syllabus','/internship','/industrial']} dropdownLink="/academics" />

                    <Link to='/tlp' className="flex-grow">
                        <button className="flex justify-center items-center py-3 w-full border text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                            TLP
                        </button>
                    </Link>
                    
                    <Link to='/alumni' className="flex-grow">
                        <button className="flex justify-center items-center py-3 w-full border text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                            Alumni
                        </button>
                    </Link>
                    
                    <Link to = '/iqac' className="flex-grow">
                        <button className="flex justify-center items-center py-3 w-full border text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                            IQAC
                        </button>
                    </Link>

                    <Dropdown size={1} ButtonName="Central Facilities" Buttons={['NSS']} Links={['/nss']} dropdownLink="/centralfacilities" />
                    
                    <Link to='/attainments' className="flex-grow">
                        <button className="flex justify-center items-center py-3 w-full border text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                            CO-PO Attainments
                        </button>
                    </Link>
                    
                    <Link to='/placements' className="flex-grow">
                        <button className="flex justify-center items-center py-3 w-full border text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                            Placements
                        </button>
                    </Link>
                    <Link to='/dsclub' className="flex-grow">
                        <button className="flex justify-center items-center py-3 w-full border text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                            DS CLUB
                        </button>
                    </Link>

                    <Dropdown size={1} ButtonName="More" Buttons={['Contact us']} Links={['/contact']} />
                </div>
            </div>
        </div>
    );
};
