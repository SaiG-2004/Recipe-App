
const AboutContent3 = () => {
    return(
        <>
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-28 px-10 md:px-40 bg-[#f9f9f7] py-20 md:py-40">

            <div className="col-span-1 gap-4 ">
                <h2 className=" text-4xl md:text-6xl font-[poppins] ">A little information for our valuable guest</h2>
                <p className="mt-8">At place, we believe that dining is not just about food, but also about the overall experience. Our staff renowned for their warmth and dedication , strives to make every visit an unforgettable event</p>
                <div className="grid grid-cols-2 gap-6 mt-16 font-medium">
                    <div className="border-2 rounded-lg text-center p-10">
                        <h2 className="text-4xl md:text-6xl font-[Poppins]">3</h2>
                        <p>Locations</p>
                    </div>
                    <div className="border-2 rounded-lg text-center p-10">
                        <h2 className="text-4xl md:text-6xl font-[Poppins]">1995</h2>
                        <p>Founded</p>
                    </div>
                    <div className="border-2 rounded-lg text-center p-10">
                        <h2 className="text-4xl md:text-6xl font-[Poppins]">65+</h2>
                        <p>Staff Members</p>
                    </div>
                    <div className="border-2 rounded-lg text-center p-10">
                        <h2 className=" text-4xl md:text-6xl font-[Poppins]">100%</h2>
                        <p>Satisfied Customers</p>
                    </div>


                </div>

            </div>
            <div className="col-span-1 ">
                <img src="salad.png" alt="image not found"  className="rounded-lg"/>

            </div>


        </div>
        </>
    )
}
export default AboutContent3;