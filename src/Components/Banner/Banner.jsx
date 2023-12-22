import Image from "next/image";
import bannerOne from "../../../public/Images/bannerImages/bannerPic1.jpg"
import bannerTwo from "../../../public/Images/bannerImages/bannerPic2.jpg"
import bannerThree from "../../../public/Images/bannerImages/bannerPic3.jpg"
import bannerFour from "../../../public/Images/bannerImages/bannerPic4.webp"
import bannerFive from "../../../public/Images/bannerImages/bannerPic5.webp"
import bannerSix from "../../../public/Images/bannerImages/bannerPic6.webp"

const Banner = () => {
    return (
        <section className="lg:px-10 px-4">
            <div className="flex justify-center py-5 grid lg:grid-cols-4 gap-4">
                <div className="lg:col-span-3">
                    <div>
                        <Image src={bannerThree} alt="Empty!" className="w-full lg:h-96 border-0 rounded-lg" />
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
            <div className="grid lg:grid-cols-3 gap-4">
                <div>
                    <Image src={bannerFive} alt="Empty!" className="w-full h-40 border-0 rounded-lg" />
                </div>
                <div>
                    <Image src={bannerFour} alt="Empty!" className="w-full h-40 border-0 rounded-lg" />
                </div>
                <div>
                    <Image src={bannerSix} alt="Empty!" className="w-full h-40 border-0 rounded-lg" />
                </div>
            </div>
        </section>
    );
};

export default Banner;