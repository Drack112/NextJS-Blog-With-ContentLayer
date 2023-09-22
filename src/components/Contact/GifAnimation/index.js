import React from "react";
import Image from "next/image";

import neco from "public/neco.gif";

const NecoArcGifAnimation = () => {
  return (
    <div>
      <Image src={neco} alt="Neco Arg Gif" />
    </div>
  );
};

export default NecoArcGifAnimation;
