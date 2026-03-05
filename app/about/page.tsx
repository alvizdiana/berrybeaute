import AboutComponent from "@/components/aboutComponent";

export default function About() {
    return (
        <div className="px-15">
            <div className="min-h-screen pt-35">
                <h1 className="text-3xl md:text-6xl text-center font-playfair font-semibold text-(--primary-color) py-7 mb-5">How BerryBeauté Start</h1>
                <AboutComponent/>
            </div>
        </div>
    );
}