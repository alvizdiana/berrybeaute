import Image from 'next/image';

interface ProductSlideProps {
  product: {
    id: number;
    name: string;
    description: string;
    imageUrl: string;
    buyBy: string;
  };
}

export default function ProductSlide({ product }: ProductSlideProps) {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center p-4 bg-white shadow-lg max-w-4xl mx-auto my-8">
      {/* Bagian Kiri: Gambar Produk */}
      <div className="relative w-full w- md:w-1/2 h-64 md:h-80">
        <Image
          src={product.imageUrl}
          alt={product.name}
          layout="fill"
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-cover"
        />
      </div>

      {/* Bagian Kanan: Nama dan Deskripsi */}
      <div className="md:w-1/2 p-6 text-center md:text-left">
        <h2 className="text-3xl font-semibold text-(--secondary-color) font-playfair mb-2">{product.name}</h2>
        <h3 className='text-lg font-semibold font-montserrat text-gray-600 mb-2'>Liked by: {product.buyBy} peoples</h3>
        <p className="text-gray-600 font-montserrat">{product.description}</p>
        <button className="mt-10 px-6 py-2 bg-(--primary-color) text-white font-semibold rounded-full hover:bg-(--secondary-color) transition duration-300">
          Lihat Detail
        </button>
      </div>
    </div>
  );
}