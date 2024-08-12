import { Appbar } from "../components/Appbar"
import Card from "../components/Card"
import { Upper } from "../components/Upper"
import { Footer } from "../components/Footer"
export const NSS = () => {

    return <div className='bg-black'>
        <Upper />
        <Appbar />
        <div className='text-white'>
        <Card>
            <div className='flex justify-center items-center pb-10'>
                <img src="https://static.wixstatic.com/media/374af4_f5f2ec3a25dd45cb9dd822e2d64bacec~mv2.jpeg/v1/fill/w_134,h_134,al_c,lg_1,q_80,enc_auto/NSSlogo.jpeg" alt="NSSlogo.jpeg" width="107" height="107" />
                
                <div className='pb-2 text-2xl font-bold text-center'>National Service Scheme (NSS)</div>
            </div>
            <div className='flex justify-end pb-4 font-semibold text-2xl'>
                    Program officer - R. Odaiah, Associate Professor
            </div>
            <div className='text-xl'>
                
The National Service Scheme (NSS) is an Indian government-sponsored public service program conducted by the Ministry of Youth Affairs and Sports of the Government of India. Popularly known as NSS, the scheme was launched in Gandhiji's Centenary year in 1969. Aimed at developing student's personality through community service, NSS is a voluntary association of young people in Colleges, Universities and at +2 level working for a campus-community (esp. Villages) linkage.
            </div>
            <div className='text-center p-4'>
            <a
                            href="https://docs.google.com/document/d/1SbyXxzfLD65DUDBMxyHgQHpLc16pNNwG/edit?usp=sharing&ouid=106780119802873164960&rtpof=true&sd=true"
                           className='text-xl underline'
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            2023-2024
                        </a>
            </div>


        </Card>
        <Footer />
        </div>
        </div>
}