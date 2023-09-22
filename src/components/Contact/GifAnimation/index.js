import React from "react";
import Image from "next/image";

import neco from "public/neco.gif";

const NecoArcGifAnimation = () => {
  return (
    <div>
      <Image
        src={neco}
        alt="Neco Arg Gif"
        className="h-full object-center w-7/12 ml-20"
        priority
        sizes="(max-width: 1180px) 100vw, 50vw"
      />
    </div>
  );
};

export default NecoArcGifAnimation;
