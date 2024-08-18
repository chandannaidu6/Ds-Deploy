import { Appbar } from "../components/Appbar"
import Card from "../components/Card"
import { Upper } from "../components/Upper"
import { Footer } from "../components/Footer"
export const Industrial = () => {

    return <div className='bg-cyan-50'>
        <Upper />
        <Appbar />
        <div>
        <Card>
        <div className='pb-4 text-2xl font-bold text-center border-b '>Industrial Visits</div>
            <div className='text-xl pt-2 pb-4'> 
            Industrial visits have their own importance in a career of a student who is pursuing a professional degree. Objectives of industrial visit are to provide students an insight regarding internal working of companies. Theoretical knowledge is not enough for making a good professional career. With an aim to go beyond academics, industrial visits provide students a practical perspective on the world of work. It provides students with an opportunity to learn practically through interaction, working methods and employment practices.
            </div>
            <div className='text-xl font-semibold'>
                 Click on the concerned academic year  to Download the details of Industrial visits:

            </div>
            <div className='text-center p-4'>
            <a
                            href="https://docs.google.com/document/d/1AO4-v67tWwppcLIoaL6TFVPSEIhFpaQTCpnVSbDBiNA/edit?usp=sharing"
                           className='text-xl underline'
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            2022-2023
                        </a>
            </div>

        </Card>
        <Footer />
        </div>
        </div>
}