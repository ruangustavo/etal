import Image from "next/image";
import LogoImage from '../images/logo.png'

export function Logo() {
  return <Image src={LogoImage} alt="Logo do ETAL" width={200} height={100} className="select-none"/>;
}
