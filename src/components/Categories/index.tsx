import casualWhite from "@/assets/images/products/casual-flat-white.jpg"
import sportGrey from "@/assets/images/products/sport-grey.jpg"
import modernColor from "@/assets/images/products/modern-colorfull.jpg"
import futuristicSilver from "@/assets/images/products/futuristic-silver.jpg"
import { Button } from "../Button"

const categories = [
    {name: "Casual", image: casualWhite},
    {name: "Sport", image: sportGrey},
    {name: "Modern", image: modernColor},
    {name: "Futuristic", image: futuristicSilver}
]

export const Categories = () => {
    return(
       <section className="container flex gap-2.5 mb-10 overflow-x-auto scrollbar-hide snap-x snap-mandatory lg:grid lg:grid-cols-4 lg:gap-4">

        {categories.map((category, index) => (
            <div 
            key={index} 
            style={{backgroundImage:`url(${category.image})`}} 
            className="h-125 bg-cover bg-center rounded-[20px] relative flex items-center justify-center text-white shrink-0 w-[95%] md:w-1/2 lg:w-full snap-center">

                <div className="absolute inset-0 bg-black/30 rounded-[20px]"></div>

                <div className="relative">
                    <Button variant= "secondary">{category.name}</Button>
                </div>

            </div>
        ))}

       </section> 
    )
}