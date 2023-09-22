import React from "react";
import Image from "next/image";

import neco from "public/neco.gif";

const NecoArcGifAnimation = () => {
  return (
    <div>
      <Image
        src={neco}
        alt="Neco Arg Gif"
        className="h-full object-center w-96 ml-20"
        priority
      />
    </div>
  );
};

export default NecoArcGifAnimation;
