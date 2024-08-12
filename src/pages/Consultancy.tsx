import Card from "../components/Card";
import { Appbar } from "../components/Appbar";
import { Upper } from "../components/Upper";
import { Footer } from "../components/Footer";
export const Consultancy = () => {
    return <div className='bg-black'>
        <Upper />
        <Appbar />
        <div className='text-white'>
        <Card>
            <img src="https://static.wixstatic.com/media/374af4_8e826481c1b44e2da65f34d98815d36e~mv2.jpg/v1/fill/w_600,h_856,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Research%20Policy.jpg" alt="Research Policy.jpg" width="600" height="856" />
        </Card>
        <Card>
        <img src="https://static.wixstatic.com/media/374af4_15c07fb7edac46b4aa92f11d9b77a95d~mv2.jpg/v1/fill/w_702,h_1001,al_c,q_85,enc_auto/Cons%20Policy.jpg" alt="Cons Policy.jpg" width="600" height="856" />
        </Card>
        <Footer />
        </div>
        </div>
}