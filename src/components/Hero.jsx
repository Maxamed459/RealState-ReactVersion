const Hero = () => {
    return (
        <>
            <section id="home">
            <video src="/public/home.mp4" autoPlay loop muted className="absolute inset-0 w-full h-full object-cover object-center z-[-1]"></video>
            <div className="absolute inset-0 bg-linear-to-b from-transparent to-black opacity-80"></div>
            <div className="max-w-6xl mx-auto flex flex-col items-center justify-center h-screen">
                <h1 className="text-4xl md:text-6xl font-bold text-center text-white z-30">Find Your Dream Home</h1>
                <p className="text-center text-lg mt-4 text-white z-30">We have the best properties for you.</p>
                <button className="bg-[#3955E5] text-white px-6 py-2 rounded-lg mt-6 z-30 hover:bg-transparent hover:ring-1 hover:ring-white duration-500"><a href="./propertyListing.html">View Properties</a></button>
            </div>
         </section>
        </>
    );
}

export default Hero;