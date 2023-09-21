const { default: Image } = require("next/image");
const { default: Link } = require("next/link");

import profileImg from "@/public/profile-img.jpg";

const Logo = () => {
  return (
    <Link href="/">
      <div>
        <Image
          src={profileImg}
          alt="Drack"
          className="w-full h-auto rounded-full"
        />
      </div>
      <span>Drack</span>
    </Link>
  );
};

export default Logo;
