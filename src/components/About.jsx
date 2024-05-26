import DisplayCard from "./DisplayCard";
import Intro from "./Intro";
import { FaDotCircle } from "react-icons/fa";


export default function Hero() {
    return (
        <div className="mx-auto bg-black text-white flex flex-col justify-center gap-16 lg:gap-40 pt-40 pb-24 px-12 md:px-32 text-center md:text-left">
            <div className="flex flex-col bg-white text-black md:flex-row gap-8 py-8">
                <div className="text-left">
                    <div className="flex justify-center">
                        <h1 className="text-3xl font-bold text-center " style={{ whiteSpace: 'nowrap' }}>ABOUT THE CAR</h1>
                    </div>
                </div>
                <div className="flex justify-center">
                    <p className="w-[80%] lg:w-[60%] xl:w-[40%] text-center">
                        I'm an experienced designer collaborating with companies with a primary focus on brand assets within the digital space, such as logo and web design, social media content & more.
                    </p>
                </div>
            </div>
            <div className="bg-black text-white rounded-2xl"> 
                <div className="text-white flex gap-4">
                    <h1 className="text-bold">EVERY FEATURE YOU MIGHT<br></br> FALL IN LOVE</h1>
                    <p>Here are several features of tesla y thst inform you before thst excites you.</p>

                </div>


                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 rounded">
                    <DisplayCard image="./CAR1.png" title="Sport & Strong Car Body" details="The mode y is based ona huge role in customers' first impressions. I can make sure your brand design represents your values properly & looks professional." />
                    <DisplayCard image="./CAR2.png" title="Hi-Tech Car System" details="You have a great looking brand. Awesome! Time to show people through social media and promotions. Let's make some great-looking and effective designs!" />
                    <DisplayCard image="./car3.png" title="Solid Body Design" details="Having a website for your brand is the baseline, but without proper structure and design principles it won't work well. I will help you stand out in the digital space." />
                </div>
            </div>
            <div>
                <Intro />
            </div>
        </div>
    )
}