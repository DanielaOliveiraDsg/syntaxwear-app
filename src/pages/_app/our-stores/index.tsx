import { createFileRoute } from '@tanstack/react-router';
import OurStoresBanner from '../../../assets/images/banner/banner-our-stores.png';
import OurStores1 from '../../../assets/images/banner/loja-1.png';
import OurStores2 from '../../../assets/images/banner/loja-2.png';
export const Route = createFileRoute('/_app/our-stores/')({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <section className="container py-6">
      <img
        src={OurStoresBanner}
        alt="Banner of our store's interior with displayed sneakers"
        className="rounded-[20px] h-80 md:h-125 object-cover w-full"
      />
      <h1 className="text-heading text-2xl max-w-7xl m-auto my-20 text-center">
        Our stores are the heart of our brand. Explore our recent collection,
        try your favorite styles and experience the of SynstaxWear confort in
        person.
      </h1>

      <section className="text-heading w-full space-y-15">
        <div className='flex flex-col md:flex-row items-center gap-2.5'>
          <div className='text-center py-6 px-3'>
            <h2 className='text-3xl mb-5'>New stores arrivals</h2>
            <p>Check the season new arrivals in a store close to you!</p>
          </div>
          <img src={OurStores1} alt="Sneaker new style in store" className='rounded-[20px] md:max-w-[42vw] aspect-10/7 object-cover size-full'/>
        </div>
        <div className='flex flex-col md:flex-row items-center gap-2.5'>
          <img src={OurStores2} alt="Sneaker new style in store" className='rounded-[20px] md:max-w-[42vw] aspect-10/7 object-cover size-full'/>
          <div className='text-center py-6 px-3'>
              <h2 className='text-3xl mb-5'>New stores arrivals</h2>
              <p>Check the season new arrivals in a store close to you!</p>
            </div>
        </div>
      </section>
    </section>
  );
}
