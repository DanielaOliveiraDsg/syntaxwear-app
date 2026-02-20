import Banner from '@/assets/images/banner/banner.jpg';
import { Button } from '../Button';
import { Overlay } from '../Overlay';
import { useRouter } from '@tanstack/react-router';



export const Hero = () => {
  const router = useRouter();
  return (
    <div className="container">
      <section className="h-125 rounded-[20px] mb-10 relative">
        <img
          src={Banner}
          alt="Male model wearing skate sneakers"
          className="w-full h-full object-cover rounded-[20px]"
        />

        <Overlay
          title="Krypton One"
          subtitle="Make every step your statement"
          className="bottom-0 justify-end px-6 md:px-24 pb-24 md:items-end"
        >
          <Button
            variant="secondary"
            size="sm"
            onClick={() =>
              router.navigate({
                to: '/products'
              })
            }
          >
            Check Our Styles
          </Button>

          <Button>Shop</Button>
        </Overlay>
      </section>
    </div>
  );
};
