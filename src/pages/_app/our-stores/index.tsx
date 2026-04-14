import { createFileRoute, Link } from '@tanstack/react-router';
import OurStoresBanner from '../../../assets/images/banner/banner-our-stores.png';
import OurStores1 from '../../../assets/images/banner/our-stores-1.png';
import OurStores2 from '../../../assets/images/banner/our-stores-2.jpeg';
export const Route = createFileRoute('/_app/our-stores/')({
  component: RouteComponent,
  head: () => ({
    meta: [{ title: 'Our Stores - SynstaxWear' }],
  }),
});

function RouteComponent() {
  return (
    <section className="container py-11 px-4">
      <img
        src={OurStoresBanner}
        alt="Banner of our store's interior with displayed sneakers"
        className="rounded-[20px] h-80 md:h-125 object-cover w-full"
      />
      <h1 className="text-gray-700 text-2xl max-w-7xl m-auto my-15 text-center">
        Our stores are the heart of our brand. Explore our recent collection,
        try your favorite styles and experience the of SynstaxWear confort in
        person.
      </h1>

      <section className="text-heading w-full space-y-15">
        <div className="flex flex-col md:flex-row justify-between items-center gap-2.5">
          <img
            src={OurStores1}
            alt="Sneaker new style in store"
            className="rounded-[20px] md:max-w-[42vw] aspect-5/4 object-cover size-full"
          />
          <img
            src={OurStores2}
            alt="Clients trying on sneakers in store"
            className="rounded-[20px] md:max-w-[42vw] aspect-5/4 object-cover size-full"
          />
        </div>
        <div className='flex flex-col items-center'>
          <div className="text-center px-3 pb-8">
            <h2 className="text-3xl mb-5 text-heading">New stores arrivals</h2>
            <p className="text-[20px] md:text-2xl text-gray-800 leading-relaxed">
              Check the season new arrivals in a store close to you!
            </p>
          </div>
          <Link
            to="/products"
            className="text-sm font-bold text-primary uppercase my-8 border-b-2 tracking-[0.15em] hover:text-accent transition-colors duration-500"
          >
            {' '}
            Check Our Styles{' '}
          </Link>
        </div>
      </section>
    </section>
  );
}
