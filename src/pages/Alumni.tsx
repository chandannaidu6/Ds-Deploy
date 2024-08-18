import Card from "../components/Card";
import { Appbar } from "../components/Appbar";
import { Upper } from "../components/Upper";
import { Footer } from "../components/Footer";
export const Alumni = () =>{
    return <div className='bg-cyan-50'>
        <Upper />
        <Appbar />
        <div>
        <Card>
            <div className = 'text-2xl flex justify-center font-bold'>
                Geethanjali Alumni Association
            </div>
            <div className = 'text-xl  font-semibold'>
                Welcome
            </div>
            <div className="text-lg">
                 Welcome to Geethanjali alumni page. This is an attempt to bring together all the Alumni of GCET, Hyderabad. The Geethanjali Alumni Association is a voluntary organization formed with the following aims and objectives.
            </div>
            <div className = 'text-xl  font-semibold'>
                Aims
            </div>
            <ul className='list-disk text-lg ml-3'>
                <li>Increase the number of alumni who participate in the Geethanjali alumni lifelong community (both face-to-face and electronic).</li>
                <li>Develop student recognition of the Geethanjali alumni lifelong community by engaging them during their campus experience.</li>
                <li>Strengthen the presence of the Alumni Association within the College community.</li>
                <li>Build an educational culture that facilitates alumni lifelong learning.</li>
            </ul>
            <div className = 'text-xl  font-semibold'>
                Objectives
            </div>
            <div className='text-lg'>
                Geethanjali's thriving alumni communities provide a wide range of opportunities for socializing, networking and community service, and contribute significantly to the rich alumni experience that defines Geethanjali.  
            </div>
            <ul className='list-disc ml-3 text-lg'>
                <li>To interact with students, staff, faculty and with one another.</li>
                <li>To strengthen the professional networking among alumni.</li>
                <li>To maintain a database of Geethanjali Alumni, enabling them to reconnect with their friends.</li>
                <li>To provide a forum for discussion of common-interest issues.</li>
            </ul>
            <div className="text-center p-4">
                <button className="px-4 py-2 bg-blue-500 hover:bg-blue-700 text-white rounded">
                        <a
                            href="https://drive.google.com/drive/folders/15Vioy7gHDyIkUSdBoEkWVyq92S_ef4yO?usp=sharing"
                            className="block w-full h-full"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Alumni Information
                        </a>
                </button>
            </div>



        </Card>
        <Footer />

        </div>
    </div>

}