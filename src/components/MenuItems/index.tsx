const menus = [
  { title: "Masculine", items: ["Casual", "Sport", "Modern", "Futuristic"] },
  { title: "Feminine", items: ["Casual", "Sport", "Modern", "Futuristic"] },
  { title: "Outlet", items: ["Feminine", "Masculine"] },
  { title: "About Us", items: ["Our story", "Work with us"] },
];

export const MenuItems = () => {
  return (
    <div className="flex flex-col sm:flex-row gap-8">
      {menus.map(({ title, items }) => (
        <nav key={title}>
          <ul className="flex flex-col gap-4">
            <li>
              <p className="font-normal text-surface-alt text-xl">{title}</p>
            </li>
            {items.map((item) => (
              <li key={item}>
                <a
                  href="#"
                  className="font-medium hover:text-[#cccccc] transition-colors"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      ))}
    </div>
  );
};
