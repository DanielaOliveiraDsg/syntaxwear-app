export const SubscriptionForm = () => {
  return (
    <form className="flex flex-col">
      <label htmlFor="newsletter" className="text-lg ml-5 mb-1">Subscribe</label>
      <input
        type="email"
        id="newsletter"
        name="newsletter"
        placeholder="email@email.com"
        className="rounded-[38px] bg-background py-3 px-5 placeholder-[#aaaaaa] text-gray-text"
      />
    </form>
  );
};
