import { Link } from "@tanstack/react-router"
import LogoImage from "../../assets/images/logo/logo.svg"

export const Logo = () => {
  return (
    <Link to="/" className="self-center">
      <img src={LogoImage} alt="Logo Syntaxwear" className="w-40" />
    </Link>
  )
}