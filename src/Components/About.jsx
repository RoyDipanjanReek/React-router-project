import React from 'react';

export default function About() {
    return (
        <div className="py-16 bg-white">
            <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
                <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
                    <div className="md:5/12 lg:w-5/12">
                        <img
                            src="https://pbs.twimg.com/profile_images/1797323091724369920/lvDF3Bcc_400x400.jpg"
                            alt="image"
                        />
                    </div>
                    <div className="md:7/12 lg:w-6/12">
                        <h2 className="text-2xl text-gray-900 font-bold md:text-4xl">
                        Hello! I'm Dipanjan Roy, a passionate and dedicated React Developer. 
                        </h2>
                        <p className="mt-6 text-gray-600">
                        With a strong foundation in computer science principles and a keen interest in front-end development, I specialize in creating dynamic, responsive, and user-friendly web applications using React.js.
                        </p>
                        <p className="mt-4 text-gray-600">
                        I am passionate about translating user needs into functional and aesthetically pleasing web applications. My approach involves understanding user experience and combining it with the latest technologies to deliver high-quality, efficient, and maintainable code.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
