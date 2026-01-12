import { Copyright } from "../Copyright";
import { MenuItems } from "../MenuItems";
import { SocialMedia } from "../SocialMedia";
import { SubscriptionForm } from "../SubscriptionForm";

export const Footer = () => {
  return (
    <footer className="bg-footer-bg">
      <div className="container">
        <div className="flex flex-col lg:flex-row justify-between py-10 px-2 gap-2">
          <div className="flex flex-col gap-8 min-w-[344px]">
            <SubscriptionForm />
            <SocialMedia />
          </div>
          <MenuItems />
        </div>
        <Copyright />
      </div>
    </footer>
  );
};
