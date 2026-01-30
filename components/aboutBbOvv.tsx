export default function AboutBbOvv(){
    return(
        <div className="flex flex-col justify-center text-center min-h-screen pt-5">
            <div>
            <h2 className="text-4xl font-playfair font-semibold text-(--primary-color) pt-7">About BerryBeauté</h2>
            </div>
            <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 pt-10">
            <div className="flex flex-col px-8 pb-8 w-80 md:w-120 h-45 bg-(--additional-color)/60 border-2 border-(--secondary-color) rounded-xl">
                <h4 className="text-lg font-playfair font-semibold bg-(--secondary-color) text-(--additional-color) rounded-full">What is BerryBeauté?</h4>
                <p className="font-montserrat mt-2 md:mt-5 text-start text-sm md:text-base">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Excepturi nostrum amet tenetur, eum blanditiis unde quod consequatur, quas quae, voluptates dolorem ad.</p>
            </div>
            <div className="flex flex-col px-8 pb-8 w-80 md:w-120 h-45 bg-(--additional-color)/60 border-2 border-(--secondary-color) rounded-xl">
                <h4 className="text-lg font-playfair font-semibold bg-(--secondary-color) text-(--additional-color) rounded-full">Vision & Mission</h4>
                <ul className="font-montserrat mt-2 md:mt-5 text-start text-sm md:text-base">
                <li className="list-disc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti vel excepturi porro.</li>
                <li className="list-disc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique ipsam animi facere impedit? Quisquam, porro.</li>
                </ul>
            </div>
            </div>
            <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 pt-10">
            <div className="flex flex-col px-8 pb-8 w-80 md:w-120 h-45 bg-(--additional-color)/60 border-2 border-(--secondary-color) rounded-xl">
                <h4 className="text-lg font-playfair font-semibold bg-(--secondary-color) text-(--additional-color) rounded-full">BerryBeauté Brand Value</h4>
                <ul className="font-montserrat mt-2 md:mt-5 text-start text-sm md:text-base">
                <li className="list-disc">Cruelty-Free</li>
                <li className="list-disc">Paraben-Free</li>
                <li className="list-disc">Eco-Friendly Packaging</li>
                </ul>
            </div>
            <div className="flex flex-col px-8 pb-8 w-80 md:w-120 h-45 bg-(--additional-color)/60 border-2 border-(--secondary-color) rounded-xl">
                <h4 className="text-lg font-playfair font-semibold bg-(--secondary-color) text-(--additional-color) rounded-full">Out Commitment</h4>
                <p className="font-montserrat mt-2 md:mt-5 text-start text-sm md:text-base">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente nobis temporibus quisquam animi maxime porro iusto iure voluptates minus magnam.</p>
            </div>
            </div>
        </div>
    )
}