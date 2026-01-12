import IconInstagram from "@/assets/images/icons/icon-instagram.svg";
import IconFacebook from "@/assets/images/icons/icon-facebook.svg";
import IconTiktok from "@/assets/images/icons/icon-tiktok.svg";
import IconWhatsapp from "@/assets/images/icons/icon-whatsapp.svg";

const socialIcons = [
  { href: "#", icon: IconInstagram, name: "Instagram" },
  { href: "#", icon: IconFacebook, name: "Facebook" },
  { href: "#", icon: IconTiktok, name: "TikTok" },
  { href: "#", icon: IconWhatsapp, name: "IWhatsApp" },
];

export const SocialMedia = () => {
  return (
    <div>
      <p className="mb-4 text-xl font-medium text-surface-alt">Social Media</p>
      <ul className="flex gap-5">
        {socialIcons.map(({ href, icon, name }) => (
          <li key={name}>
            <a href={href} aria-label={name}>
              <img src={icon} alt={name} />
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};
