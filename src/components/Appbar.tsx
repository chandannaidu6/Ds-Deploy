import { Dropdown } from "../components/Dropdown"
import { Link } from "react-router-dom"


export const Appbar = () => {
    return (
        <div className='flex justify-center h-full'>
            <div className='border  border-orange-400  rounded sm:max-w-3xl lg:max-w-7xl'>
            <div className='flex justify-start flex-wrap'>
                
                <Dropdown size={3} ButtonName="HOME" Buttons={['Vision and Mission', 'PEOs,POs and PSOs', 'Salient Features of the Department']}  Links={['/vision', '/peo', '/features']} dropdownLink="/" />
                <Dropdown size={2} ButtonName="Staff Desk" Buttons={['Faculty and Staff list', 'Roles and Responsibilities']}   Links={['/stafflist', '/roles']} dropdownLink="/staffdesk" />
                <Dropdown size={1} ButtonName="Student Desk" Buttons={['Instructions']}  Links={['/instructions']} ></Dropdown>  
                <Dropdown size={3} ButtonName="Research" Buttons={['Research and Consultancy Policy', 'Research Activities','Research Intiatives']}  Links={['/consultancy', '/act', '/initiatives']}></Dropdown>  
                <Dropdown size={3} ButtonName="Academics" Buttons={['Regulations and Syllabus','Internships','Industrial Visits']}  Links={['/syllabus','/internship','/industrial']} dropdownLink="/academics" ></Dropdown>  
                <Link to='/tlp'>
                <button  className="py-3 border text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                type="button">
                TLP

                </button>
                </Link>                
                <Link to='/alumni'>
                <button  className="py-3  border text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                type="button">
                Alumni

                </button>
                </Link>
                <Link to = '/iqac'>
                <button className="py-3 border text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                type="button">
                IQAC

                </button>
                </Link>

                <Dropdown size={1} ButtonName="Central Facilities" Buttons={['NSS']}  Links={['/nss']} dropdownLink="/centralfacilities"></Dropdown>  
                <Link to='/attainments'>
                <button className="py-3 border text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                type="button">
                CO-PO Attainments

                </button>
                </Link>

                <Dropdown size={1} ButtonName="More" Buttons={['Contact us']}  Links={['/contact']} ></Dropdown>  
            
            </div>            </div>
        </div>
    );
};

