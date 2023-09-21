import React from "react";
import Image from "next/image";
import profileCharacter from "public/character.png";

const AboutCoverSection = () => {
  return (
    <section className="w-full md:h-[75vh] border-b-2 border-solid border-dark dark:border-light flex flex-col md:flex-row items-center justify-center text-dark dark:text-light">
      <div className="w-full md:w-1/2 h-full border-r-2 border-solid border-dark dark:border-light flex justify-center">
        <Image
          src={profileCharacter}
          alt="CodeBucks"
          className="w-4/5  xs:w-3/4 md:w-full h-full object-contain object-center"
          priority
          sizes="(max-width: 768px) 100vw,(max-width: 1180px) 50vw, 50vw"
        />
      </div>

      <div className="w-full md:w-1/2 flex flex-col text-left items-start justify-center px-5 xs:p-10 pb-10 lg:px-16">
        <h2 className="font-bold capitalize text-4xl xs:text-5xl sxl:text-6xl  text-center lg:text-left">
          Dream Big, Work Hard, Drink some stuff and do it again!
        </h2>
        <p className="font-medium capitalize mt-4 text-base">
          I know this description is strange, but did you think that was the
          only thing strange? I don't have a degree, but give me some
          documentation and I'll find out about the subject. I know how to do
          some things on the web with Golang, Node, Python and Docker. I assure
          you I'm good, but I'm annoying with well-written code.
        </p>
        <p className="font-bold capitalize mt-2 text-base">
          And hide this blog from my mother, she doesn't know what I post on the
          internet.
        </p>
      </div>
    </section>
  );
};
export default AboutCoverSection;
