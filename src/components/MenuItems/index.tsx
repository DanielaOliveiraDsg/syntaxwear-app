import { Link } from '@tanstack/react-router';

const menus = [
  { title: 'Gender', items: ['Women', 'Men', 'Unisex'] },
  { title: 'Categories', items: ['Casual', 'Sport', 'Modern'] },
  { title: 'About', items: ['About Us', 'Our Stores'] },
];

export const MenuItems = () => {
  const getLinkProps = (title: string, item: string) => {
    if (title === 'Gender') {
      return {
        to: '/products' as const,
        search: {
          gender: item.toUpperCase() as 'MEN' | 'WOMEN' | 'UNISEX',
          page: 1,
        },
      };
    }

    if (title === 'Categories') {
      return {
        to: '/products/category/$category' as const,
        params: { category: item.toLowerCase() },
      };
    }
    if (title === 'About') {
      if (item === 'About Us') return { to: '/about-us' as const };
      if (item === 'Our Stores') return { to: '/our-stores' as const };
    }

    return { to: '/' as const };
  };

  return (
    <div className="flex gap-12 lg:gap-25 lg:mx-0 justify-between mt-7 mx-5">
      {menus.map(({ title, items }) => (
        <nav key={title}>
          <ul className="flex flex-col gap-4">
            {items.map((item) => {
              const linkProps = getLinkProps(title, item);

              return (
                <li key={item}>
                  <Link
                    {...linkProps}
                    className="font-medium text-gray-light hover:opacity-70 transition-opacity cursor-pointer"
                  >
                    {item}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      ))}
    </div>
  );
};
