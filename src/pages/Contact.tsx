import { Appbar } from "../components/Appbar"
import Card from "../components/Card"
import { Upper } from "../components/Upper"
import { Footer } from "../components/Footer"
export const Contact = () => {

    return <div className='bg-cyan-50'>
        <Upper />
        <Appbar />
        <div>
        <Card>
            <div>
                <div className="grid grid-cols-2 gap-4">
                    <div>
                        <div className='border-b pb-2 text-2xl font-bold text-center'>CONTACT US</div>
                        <div className='pt-2 text-lg font-semibold'>ADDRESS</div>
                        <div className='text-lg'>
                            
                            Geethanjali College of Engineering and Technology
                            Cheeryala(V), Keesara(M), Medchal Dist.
                            Telangana, INDIA, Pin Code-501301.
                        </div>
                        <div className='pt-2 text-lg font-semibold'>Website:</div>
                        <div>
                        <a
                            href="www.geethanjaliinstitutions.com/engineering"
                            className="text-lg block w-full h-full"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            www.geethanjaliinstitutions.com/engineering
                        </a>
                        </div>
                        <div className='pb-4 pt-4 text-lg text-center font-semibold'>IMPORTANT PHONE NUMBERS</div>
                        <div className="text-xl">
                            Principal's Office:                9182058187              


                        </div>
                        <div className="text-xl">
                            Head, Dept. of DS:             9866546763
                        </div>
                        <div className="text-xl">
                            Academic Section:              9182058194
                        </div>
                        <div className="text-xl">
                            Account Section:                 9182058192
                        </div>
                        <div className="text-xl">
                            Transport Section:              9182058186
                        </div>
                        <div className='text-xl flex'>
                            <div>
                            For website related information -
                            </div>
                            <div>
                            <a
                            href="web.gcetece@gmail.com"
                            className="text-lg block w-full h-full"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            web.gcetece@gmail.com
                        </a>
                                
                            </div>
                        </div>

                    </div>
                    <div>
                        <div className='border-b pb-2 text-2xl font-bold text-center'>ROUTE MAP</div>
                        <div id="comp-kc0b6bps" className="comp-kc0b6bps _xg6_p w-full h-96">
                        <div className="SMuTIa w-full h-full">
                            <iframe
                            className="wuksD5 w-full h-full"
                            title="Embedded Content"
                            name="htmlComp-iframe"
                            data-src=""
                            src="https://www-gcetece-org.filesusr.com/html/374af4_4727d6c83b888ee1d9e72e1e589feb34.html"
                            ></iframe>
                        </div>
                        </div>

                    </div>
                </div>
            </div>
        </Card>
        <Footer />
        </div>
        </div>
}