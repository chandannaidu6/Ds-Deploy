import { Appbar } from "../components/Appbar"
import { Upper } from "../components/Upper"
import Card from "../components/Card";
import { Footer } from "../components/Footer";

export const Placements = () => {
    return (
        <div className='bg-cyan-50 flex flex-col min-h-screen'>
            <Upper />
            <Appbar />
            <div className='flex-grow'>
                <Card>
                    <div className='text-3xl font-bold pb-4'>
                        Placements
                    </div>
                    <div className='text-lg'>
                        <ul className='list-disc list-inside'>
                            <li className='flex items-start'> 
                                <span className='mr-2'>•</span> 
                                <div className='whitespace-nowrap flex items-center'>
                                    <div className='text-md font-semibold mr-2'>
                                        CampX                                  
                                    </div>
                                    <div className='font-bold'>
                                         Physical On Campus Recruitment Drive for CSE IT ECE IOT AIML CS and DS 2025 Passouts more details                                        <a 
                                            href="https://drive.google.com/file/d/1lVnSjttc84EfwVBCtE0T6ZhVZfuYKqMK/view?usp=sharing" 
                                            target="_blank" 
                                            rel="noopener noreferrer" 
                                            className='text-blue-500 underline ml-1'
                                        >
                                            Available here
                                        </a>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </Card>
            </div>
            <Footer />
        </div>
    )
}
