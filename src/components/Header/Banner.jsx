
const Banner = () => {
    return (
        <div>
            <div className="hero min-h-screen container mx-auto px-10">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img src="https://i.ibb.co/Qcw93GW/Header.webp" className="md:max-w-lg" />
                    <div>
                        <h1 className="text-5xl font-bold">WE ARE THE QUALITY
                            USED 4X4 SPECIALISTS.</h1>
                        <p className="py-6">Training programming, also known as training design or curriculum development, is the process of planning, developing, and organizing a structured program to teach specific skills or knowledge to a group of learners. </p>
                        <button className="btn bg-black rounded-lg text-white font-semibold hover:bg-slate-600">Contact Us</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;