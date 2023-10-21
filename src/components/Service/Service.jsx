

const Service = () => {
    return (
        <div>
            <div className="mb-10  container mx-auto px-10">
                <h1 className="text-4xl font-bold text-center py-10">Support</h1>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                    <div className="card h-96 bg-purple-50">
                        <figure className="px-10 pt-10">
                            <img src={"https://i.ibb.co/g9YqYrH/marek-pospisil-o-UBjd22g-F6w-unsplash.jpg"} alt="Shoes" className="rounded-xl" />
                        </figure>
                        <div className="card-body items-center text-center">
                            <h2 className="card-title">Getting Started</h2>
                            <p>
                                Invite learners, set up the management tool and begin creating your lessons.</p>
                        </div>
                    </div>
                    <div className="card h-96 bg-purple-50">
                        <figure className="px-10 pt-10">
                            <img src={"https://i.ibb.co/5hc5bG0/karl-kohler-Hf1r-AKkf-MAg-unsplash.jpg"} alt="Shoes" className="rounded-xl" />
                        </figure>
                        <div className="card-body items-center text-center">
                            <h2 className="card-title">Getting Started</h2>
                            <p>
                                Invite learners, set up the management tool and begin creating your lessons.</p>
                        </div>
                    </div>
                    <div className="card h-96 bg-purple-50">
                        <figure className="px-10 pt-10">
                            <img src={"https://i.ibb.co/Zgq2pdk/joey-banks-YApi-Wyp0lqo-unsplash.jpg"} alt="Shoes" className="rounded-xl" />
                        </figure>
                        <div className="card-body items-center text-center">
                            <h2 className="card-title">Getting Started</h2>
                            <p>
                                Invite learners, set up the management tool and begin creating your lessons.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Service;