import Banner from '@/assets/images/banner/banner.jpg';

export const Hero = () => {
    return (
        <div className="container">
            <section className='h-125 rounded-[20px] mb-10 relative'>
                <img
                    src={Banner}
                    alt="Male model wearing skate sneakers"
                    className='w-full h-full object-cover rounded-[20px]' />
                <div className='absolute bottom-0 w-full flex justify-end items-center text-center px-6 md:px-24 pb-32'>

                    <div className='text-white flex flex-col items-center w-[388px]'>

                        <h2 className="text-lg font-medium leading-normal tracking-wider mb-2.5">
                            Krypton One
                        </h2>
                        <h1 className="text-2xl leading-9 tracking-widest mb-10">
                            Make every step your statement
                        </h1>

                        <div className="flex gap-3.5">
                            <button className="">New arrivals</button>
                            <button className="">Shop</button>
                        </div>

                    </div>

                </div>
            </section>
        </div>
    )
}