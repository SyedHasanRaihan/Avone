import React from "react";
import Image from "next/image";

const TopSections = () => {
    return (
        <div className="container mx-auto">
            <div className="flex relative">
                <div className="relative lg:h-[50.75rem] md:h-[26.75rem] h-[24.75rem] w-full">
                    <Image
                        src={`/assets/topSection/topSection1.png`}
                        width="1000"
                        height="200"
                        // objectFit="cover"
                        // layout="fill"
                        alt=""
                    />
                </div>
                <div className="absolute z-20 bg-white">
                    <h3 className="uppercase text-xl font-bold tracking-wider">
                        Stylish and Handmade
                    </h3>
                    <p>New Collection 2021</p>
                </div>
                <div className="relative lg:h-[50.75rem] md:h-[26.75rem] h-[24.75rem] w-full">
                    <Image
                        src={`/assets/topSection/topSection2.png`}
                        width="1000"
                        height="200"
                        // objectFit="cover"
                        // layout="fill"
                        alt=""
                    />
                </div>
            </div>
        </div>
    );
};

export default TopSections;

// lg:h-[50.75rem] md:h-[26.75rem] h-[24.75rem] w-full
