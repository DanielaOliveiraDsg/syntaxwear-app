import gridHighlight from '../../assets/images/products/grid-highlight-2.png';
import gridBrown from '../../assets/images/products/grid-brown-1.png';
import gridModel from '../../assets/images/products/grid-model.png';
import gridModern from '../../assets/images/products/grid-modern.jpeg';
import gridLilac from '../../assets/images/products/grid-lilac-1.jpeg';
import gridSport from '../../assets/images/products/grid-sport-1.png';
import { Overlay } from '../Overlay';
import { Button } from '../Button';
import { useRouter } from '@tanstack/react-router';

export const Gallery = () => {
  const router = useRouter();
  return (
    <section className="w-full">
      <style>{`
        .gallery-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          grid-template-rows: repeat(5, auto);
          grid-template-areas:
            "highlight highlight"
            "grid-brown grid-brown"
            "model modern"
            "model sport"
            "grid-lilac grid-lilac";
          gap: 10px;
        }

        .gallery-highlight {
          grid-area: highlight;
          max-height: 494px;
        }

        .gallery-lilac {
          grid-area: grid-lilac;
          max-height: 190px;
        }

        .gallery-model {
          grid-area: model;
        }

        .gallery-modern {
          grid-area: modern;
        }

        .gallery-brown {
          grid-area: grid-brown;
          max-height: 190px;
        }

        .gallery-sport {
          grid-area: sport;
        }

        @media (min-width: 769px) {
          .gallery-grid {
            grid-template-columns: repeat(4, 1fr);
            grid-template-rows: repeat(3, 300px);
            grid-template-areas:
              "highlight highlight grid-lilac grid-lilac"
              "highlight highlight model modern"
              "grid-brown grid-brown model sport";
            gap: 30px;
          }

          .gallery-highlight,
          .gallery-brown,
          .gallery-lilac {
            max-height: none;
          }
        }
      `}</style>

      <div className="gallery-grid container">
        <div className="relative rounded-[20px] gallery-highlight">
          <img
            src={gridHighlight}
            alt="3 models wearing sneakers"
            className="w-full h-full object-cover rounded-[20px]"
          />
          <Overlay
            className="inset-0 justify-center"
          >
            <Button
              variant="secondary"
              onClick={() =>
                router.navigate({
                  to: '/products/category/$category',
                  params: { category: 'women' },
                })
              }
            >
              Women
            </Button>
            <Button
              onClick={() =>
                router.navigate({
                  to: '/products/category/$category',
                  params: { category: 'MEN'},
                })
              }
            >
              Men
            </Button>
          </Overlay>
        </div>
        <img
          src={gridLilac}
          alt="Lilac sneakers"
          className="gallery-lilac w-full h-full object-cover rounded-[20px]"
        />
        <img
          src={gridModel}
          alt="Female model wearing lilac sneakers"
          className="gallery-model w-full h-full object-cover rounded-[20px]"
        />
        <img
          src={gridModern}
          alt="Modern sock styles off-white sneakers"
          className="gallery-modern w-full h-full object-cover rounded-[20px]"
        />
        <img
          src={gridBrown}
          alt="Brown suede sneakers"
          className="gallery-brown w-full h-full object-cover rounded-[20px]"
        />
        <img
          src={gridSport}
          alt="Multicolored sport sneakers"
          className="gallery-sport w-full h-full object-cover rounded-[20px]"
        />
      </div>
    </section>
  );
};
