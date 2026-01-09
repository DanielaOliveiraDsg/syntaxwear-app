import gridHighlight from "../../assets/images/products/grid-highlight.jpg";
import gridSk8Purple from "../../assets/images/products/grid-sk8-puple.jpg";
import gridModel from "../../assets/images/products/grid-model.jpg";
import gridModern from "../../assets/images/products/grid-modern.jpg";
import gridSk8Black from "../../assets/images/products/grid-sk8-black.jpg";
import gridFuture from "../../assets/images/products/grid-future.jpg";

export const Gallery = () => {
  return (
    <section className="w-full">
      <style>{`
        .gallery-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          grid-template-rows: repeat(5, auto);
          grid-template-areas: 
            "highlight highlight"
            "sk8-black sk8-black"
            "model modern"
            "model future"
            "sk8-purple sk8-purple";
          gap: 10px;
        }

        .gallery-highlight {
          grid-area: highlight;
          max-height: 494px;
        }

        .gallery-sk8-purple {
          grid-area: sk8-purple;
          max-height: 190px;
        }

        .gallery-model {
          grid-area: model;
        }

        .gallery-modern {
          grid-area: modern;
        }

        .gallery-sk8-black {
          grid-area: sk8-black;
          max-height: 190px;
        }

        .gallery-future {
          grid-area: future;
        }

        @media (min-width: 769px) {
          .gallery-grid {
            grid-template-columns: repeat(4, 1fr);
            grid-template-rows: repeat(3, 300px);
            grid-template-areas: 
              "highlight highlight sk8-purple sk8-purple"
              "highlight highlight model modern"
              "sk8-black sk8-black model future";
            gap: 30px;
          }

          .gallery-highlight,
          .gallery-sk8-black,
          .gallery-sk8-purple {
            max-height: none;
          }
        }
      `}</style>

      <div className="gallery-grid container">
        <img
          src={gridHighlight}
          alt="Modelo masculino com tênis"
          className="gallery-highlight w-full h-full object-cover rounded-[20px]"
        />
        <img
          src={gridSk8Purple}
          alt="Tênis roxo"
          className="gallery-sk8-purple w-full h-full object-cover rounded-[20px]"
        />
        <img
          src={gridModel}
          alt="Modelo feminina"
          className="gallery-model w-full h-full object-cover rounded-[20px]"
        />
        <img
          src={gridModern}
          alt="Tênis colorido"
          className="gallery-modern w-full h-full object-cover rounded-[20px]"
        />
        <img
          src={gridSk8Black}
          alt="Tênis preto e branco"
          className="gallery-sk8-black w-full h-full object-cover rounded-[20px]"
        />
        <img
          src={gridFuture}
          alt="Tênis cinza"
          className="gallery-future w-full h-full object-cover rounded-[20px]"
        />
      </div>
    </section>
  );
};
