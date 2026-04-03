import Banner from '../../assets/images/banner/banner-w.jpeg'
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
          slogan="Make every step your statement"
          className="bottom-0 justify-center px-4 md:pr-50 pb-24 md:justify-end"
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
        </Overlay>
      </section>
    </div>
  );
};
