import '../assets/css/index.css'

const Profil = () => {
    return (
        <>
            <div className="">
                <div className="max-w-[413px] h-[685px] min-w-[356px] bg-white  rounded-[12px] p-[22px] ">

                    <div className=" max-w-[351px] max-h-[343px]  rounded-lg mx-auto ">
                    <svg xmlns="http://www.w3.org/2000/svg" className='w-full h-full' viewBox="0 0 48 48"><g fill="none"><g clip-path="url(#healthiconsUiUserProfileNegative0)"><path fill="#4f4f4f" fill-rule="evenodd" d="M0 0h48v48H0V0Zm11 35.63c0 .34.057.675.166.991A17.942 17.942 0 0 1 6 24c0-9.941 8.059-18 18-18s18 8.059 18 18a17.94 17.94 0 0 1-5.181 12.636a2.99 2.99 0 0 0-2.498-4.002c-7.758-.803-12.836-.88-20.632-.018A3.028 3.028 0 0 0 11 35.631ZM4 24c0 10.772 8.517 19.556 19.184 19.984a10.295 10.295 0 0 0 .678.015L24 44c11.046 0 20-8.954 20-20S35.046 4 24 4S4 12.954 4 24Zm20 4a8 8 0 1 0 0-16a8 8 0 0 0 0 16Z" clip-rule="evenodd"/></g><defs><clipPath id="healthiconsUiUserProfileNegative0"><path d="M0 0h48v48H0z"/></clipPath></defs></g></svg> 
                    </div>

                    <div className=" font-montserrat mt-[23px] ">
                        <div className="">
                            <p className=" text-[24px] text-[#4F4F4F] font-semibold leading-[29.26px]  ">Sileye Kounou</p>
                            <p className=" text-[18px] leaning-[21.94px] text-[#828282] font-medium ">Front-end developer</p>
                        </div>
                        
                        <div className=" mt-[31px] mb-[34px] flex flex-col ">

                            <div className=" flex items-center gap-[16px] ">
                            <svg xmlns="http://www.w3.org/2000/svg" className='w-[24px] h-[24px] ' viewBox="0 0 512 512"><path fill="#4f4f4f" d="M424 80H88a56.06 56.06 0 0 0-56 56v240a56.06 56.06 0 0 0 56 56h336a56.06 56.06 0 0 0 56-56V136a56.06 56.06 0 0 0-56-56Zm-14.18 92.63l-144 112a16 16 0 0 1-19.64 0l-144-112a16 16 0 1 1 19.64-25.26L256 251.73l134.18-104.36a16 16 0 0 1 19.64 25.26Z"/></svg>
                            <p className=" text-[#4F4F4F] text-[18px] font-medium ">venancekounou@gmail.com</p>
                            </div>

                            <div className="flex items-center gap-[16px]">
                            <svg xmlns="http://www.w3.org/2000/svg" className='w-[24px] h-[24px]' viewBox="0 0 24 24"><path fill="#4f4f4f" d="m19.23 15.26l-2.54-.29a1.99 1.99 0 0 0-1.64.57l-1.84 1.84a15.045 15.045 0 0 1-6.59-6.59l1.85-1.85c.43-.43.64-1.03.57-1.64l-.29-2.52a2.001 2.001 0 0 0-1.99-1.77H5.03c-1.13 0-2.07.94-2 2.07c.53 8.54 7.36 15.36 15.89 15.89c1.13.07 2.07-.87 2.07-2v-1.73c.01-1.01-.75-1.86-1.76-1.98z"/></svg>
                            <p className=" text-[#4F4F4F] text-[18px] font-medium "> (+229) 538 232 88 </p>
                            </div>

                        </div>

                        <div className="">
                            <p className=" text-[#828282] font-medium text-[18px] ">
                            Self-motivated developer, who is willing to learn and create outstanding UI applications.
                            </p>
                        </div>

                    </div>
                </div>
            </div>
        </>
    );
}

export default Profil;