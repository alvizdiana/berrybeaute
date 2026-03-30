import ProductCard from "@/components/productCard";
import PromoCarousel from "@/components/promoCarousel";

const promosData = [
    { id: 1, title: 'Summer Sale', description: 'Get up to 50% off on selected items!', imageUrl: '/about/about_1.jpg' },
    { id: 2, title: 'New Arrivals', description: 'Check out our latest collection of skincare products.', imageUrl: '/about/about_2.jpg' },
    { id: 3, title: 'Exclusive Offer', description: 'Buy one get one free on all lipsticks.', imageUrl: '/about/about_3.jpg' },
    { id: 4, title: 'Holiday Special', description: 'Enjoy special discounts during the holiday season.', imageUrl: '/about/about_4.jpg' },
]
export default function Catalog() {
    return (
        <div className="px-15 pt-25">
            <PromoCarousel promos={promosData} />
            <div className="min-h-screen pt-20">
                <div className="flex flex-col items-center justify-center">
                    <h1 className="text-3xl md:text-6xl text-center font-playfair font-semibold text-(--primary-color) py-7 mb-5">Find Your Perfect Product Here</h1>
                    <div className="w-20 h-px bg-black mt-5 opacity-20"></div>
                </div>
                <ProductCard/>
            </div>
        </div>
    );
}