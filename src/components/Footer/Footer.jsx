
const Footer = () => {
    return (
        <footer className="bg-black pt-48">
            <div className="flex justify-center">
                <img src="https://i.imgur.com/XqhpoNK.png" alt="Footer logo..." />
            </div>
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 py-10 px-2 gap-5">
                <div>
                    <h4 className="text-white font-semibold text-lg mb-2 md:mb-5">About Us</h4>
                    <div className="text-gray-500">
                        <p>We are a passionate team </p>
                        <p>dedicated to providing the best</p>
                        <p>services to our customers.</p>
                    </div>
                </div>
                <div>
                    <h4 className="text-white font-semibold text-lg mb-2 md:mb-5">Quick Links</h4>
                    <ul className="text-gray-500 list-disc ml-8">
                        <li>Home</li>
                        <li>Services</li>
                        <li>About</li>
                        <li>Contact</li>
                    </ul>
                </div>
                <div>
                    <h4 className="text-white font-semibold text-lg mb-2 md:mb-5">Subscribe</h4>
                    <div className="text-gray-500">
                        <p>Subscribe to our newsletter for the latest updates.</p>
                    </div>
                    <div className="mt-2 md:mt-5 flex">
                        <input className="rounded-l-md pl-3 md:pl-5 outline-none" type="text" placeholder="Enter your email"/>
                        <button className="py-2 px-2 md:px-3 bg-gradient-to-r from-yellow-400 to-pink-400 font-bold rounded-r-md hover:from-pink-500 hover:to-yellow-500 hover:text-white transition-all duration-500">Subscribe</button>
                    </div>
                </div>
            </div>
               
            <div className="text-center text-gray-500 border-t border-gray-700 mt-5">
                <p className="py-5">@2024 Your Company All Rights Reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;