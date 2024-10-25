
const Subscribe = () => {
    return (
        <div className="px-2">
            <div className="container mx-auto p-5 border-2 border-white bg-transparent backdrop-blur-md rounded-2xl -mb-[160px] mt-20">
                <div className="bg-[url('https://i.imgur.com/jVRhQBm.png')] bg-white md:bg-center bg-cover rounded-2xl bg-no-repeat place-items-center py-10 md:py-20 px-2 border-2 border-gray-200 z-40">
                    <h1 className=" text-2xl md:text-3xl font-bold mb-3">Subscribe to our Newsletter</h1>
                    <p className="text-lg md:text-xl text-gray-500">Get the latest updates and news right in your inbox!</p>
                    <div className="mt-2 md:mt-5 flex flex-col md:flex-row gap-3">
                        <input className="rounded-lg py-3 pl-3 md:pl-5 border w-[250px] md:w-[400px] lg:w-[500px]" type="text" placeholder="Enter your email" />
                        <button className="btn py-2 px-2 md:px-3 bg-gradient-to-r from-yellow-400 to-pink-400 font-bold rounded-lg hover:from-pink-500 hover:to-yellow-500 hover:text-white transition-all duration-500">Subscribe</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Subscribe;