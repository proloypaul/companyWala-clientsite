import Image from "next/image";
import bannerOne from "../../../public/Images/bannerImages/bannerPic1.jpg"
import bannerTwo from "../../../public/Images/bannerImages/bannerPic2.jpg"
import bannerThree from "../../../public/Images/bannerImages/bannerPic3.jpg"
import bannerSeven from "../../../public/Images/bannerImages/bannerPic7.jpg"
import bannerEight from "../../../public/Images/bannerImages/bannerPic8.jpg"
import bannerNine from "../../../public/Images/bannerImages/bannerPic9.jpg"

const Banner = () => {
    return (
        <section className="lg:px-10  px-4">
            <div className="flex justify-center py-5 grid lg:grid-cols-4 gap-4">
                <div className="lg:col-span-3">
                    <div>
                        <Image src={bannerThree} alt="Empty!" className="w-full lg:h-96 border-0 rounded-lg" />
                        {/* <Image src={bannerThree} alt="Empty!" width={600} height={200} /> */}
                    </div>
                </div>
                <div className="lg:block flex items-center justify-center">
                    <div>
                        <Image src={bannerOne} alt="Empty!" className="w-full lg:h-50 border-0 rounded-lg"/>
                    </div>
                    <div className="lg:pt-4">
                        <Image src={bannerTwo} alt="Empty!" className="w-full lg:h-50 border-0 rounded-lg"/>
                    </div>
                </div>
            </div>
            <div className="hidden lg:grid  lg:grid-cols-3 gap-4">
                <div>
                    <Image src={bannerSeven} alt="Empty!" className="w-full h-40 border-0 rounded-lg" />
                </div>
                <div>
                    <Image src={bannerEight} alt="Empty!" className="w-full h-40 border-0 rounded-lg" />
                </div>
                <div>
                    <Image src={bannerNine} alt="Empty!" className="w-full h-40 border-0 rounded-lg" />
                </div>
            </div>
        </section>
    );
};

export default Banner;