import FaqDropdown from "./Faqdropdown";

export default function Faq() {
    return (
    
            <div className="mx-auto  bg-slate-300 text-black flex flex-col lg:flex-row justify-center gap-10 py-40 px-12 md:px-32 text-center md:text-left border-y-2 border-neutral-900 ">

                <div className=" w-full lg:w-1/2 flex flex-col  gap-6">
                    <div className="w-full lg:w-2/3 flex flex-col gap-8">
                        <div>

                            <h1 className="text-5xl font-bold">Let me know anything before you try</h1>
                        </div>

                    </div>

                </div>

                <div className=" w-full lg:w-1/2">
                    <FaqDropdown />
                </div>
            </div>
        
    )

}