import Footer from "../components/Footer";
import Header from "../components/Header";
const About = () => {
    return (
        <>
            <Header />
            <div className=" shadow-lg min-h-screen flex items-center flex-col mt-10">
                
                <div className="max-w-2xl shadow-lg w-full p-4">
                <h1 className="text-center text-3xl p-5">Contact Us</h1>
                    <form action="" className="w-full space-y-4">
                        <div className="flex items-center space-x-4">
                            <div className="w-1/2">
                                <input type="text" placeholder="Enter first name" className="w-full py-3 px-8 border-1 border-gray-300" />
                            </div>
                            <div className="w-1/2">
                                <input type="email" placeholder="Enter last name" className="w-full py-3 px-8 border-1 border-gray-300"/>
                            </div>
                        </div>
                        <div>
                            <input type="email" placeholder="Enter your email" className="w-full py-3 px-8 border-1 border-gray-300" />
                        </div>
                        <div>
                            <textarea className="w-full py-3 px-8 border-1 border-gray-300" placeholder="Enter your message"></textarea>
                        </div>
                        <button className="w-full bg-blue-600 px-8 py-3 text-xl text-white">Send message</button>
                    </form>
                </div>                
            </div>
            <Footer />
        </>
    );
}

export default About;