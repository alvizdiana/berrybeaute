import ProductCard from "@/components/productCard";
import PromoCarousel from "@/components/promoCarousel";
 
const promosData = [
    { id: 1, title: 'Summer Sale', description: 'Get up to 30% off on selected items!', imageUrl: '/promos/summer_sale.png' },
    { id: 2, title: 'New Arrivals', description: 'Check out our latest collection of skincare products.', imageUrl: '/promos/new_arrivals.png' },
    { id: 3, title: 'Exclusive Offer', description: 'Get a free gift with every purchase over $500.', imageUrl: '/promos/special_offers.png' },
    { id: 4, title: 'Holiday Special', description: 'Enjoy special discounts during the holiday season.', imageUrl: '/promos/holiday_special.png' },
]
export default function Catalog() {
    return (
        <div className="px-15 pt-25">
            <PromoCarousel promos={promosData} />
            <div className="min-h-screen pt-8 md:pt-20">
                <div className="flex flex-col items-center justify-center">
                    <h1 className="text-3xl md:text-6xl text-center font-playfair font-semibold text-(--primary-color) py-7 mb-5 italic">Find Your Perfect Product Here</h1>
                    <div className="w-20 h-px bg-black mt-2 md:mt-5 opacity-20"></div>
                </div>
                <ProductCard/>
            </div>
        </div>
    );
}