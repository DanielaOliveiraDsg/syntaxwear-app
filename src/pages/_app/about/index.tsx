import { createFileRoute, Link } from '@tanstack/react-router';
import bannerAbout from '../../../assets/images/banner/banner-our-stores.png';

export const Route = createFileRoute('/_app/about/')({
  component: RouteComponent,
  head: () => ({
    meta: [
      {title: 'About Us - SynstaxWear'}
    ]
  })
});

function RouteComponent() {
  return (
    <section className="container px-8 lg:px-10 pt-40 pb-10 flex flex-col gap-15 lg:flex-row items-center">
      <div className='h-full lg:w-2/3'>
        <img
          src={bannerAbout}
          alt="SyntaxWear store"
          className="rounded-[20px] object-cover size-full"
        />
      </div>
      <div className='text-heading pb-16 lg:w-2/3'>
        <h2 className='text-4xl lg:text-6xl mb-6 font-medium'>About Us</h2>
        <p className='text-gray-600 text-lg leading-relaxed mb-10'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi nostrum repellat suscipit aut et omnis perferendis facere veniam delectus tempore, deserunt at nihil neque consequatur, quibusdam quo veritatis ex repellendus.</p>
        <Link to='/our-stores' className='text-sm font-bold text-primary uppercase border-b-2 tracking-[0.15em] hover:text-accent transition-colors duration-500'>Learn more about our stores </Link>
      </div>
    </section>
  );
}
