
const Banner = () => {
    return (
        <div className="px-2">
            <div
                className="container mx-auto mt-5 rounded-3xl bg-no-repeat bg-cover py-16  bg-black"
                style={{ backgroundImage: "url(https://i.imgur.com/jVRhQBm.png)" }}>

                <div className="hero-overlay bg-opacity-60"></div>
                <div className="text-neutral-content text-center w-full">
                    <div className="">
                        <div className="flex justify-center mb-6">
                            <img src="https://i.imgur.com/sIkYayk.png" />
                        </div>
                        <h1 className="mb-5 text-3xl md:text-5xl font-bold text-white leading-snug">Assemble Your Ultimate Dream 11 Cricket Team</h1>
                        <p className="mb-8">Beyond Boundaries Beyond Limits</p>
                        <div className="flex justify-center space-x-3">
                            <div className="bg-transparent p-1 border rounded-xl">
                                <button className="btn bg-lime-300 rounded-xl border-none px-8 text-base md:text-lg md:font-bold border">Claim Free Credit</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;