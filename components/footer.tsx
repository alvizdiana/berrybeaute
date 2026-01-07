export default function Footer(){
    return(
        <footer className="px-4 py-10 flex justify-between items-center bg-(--primary-color) text-white">
            <div className="px-8 font-montserrat">
                <h4 className="font-bold text-2xl">Kantor Pusat</h4>
                <h5 className="font-semibold text-base">Jl. Raya Kebon Jeruk No. 123, Jakarta</h5>
                <h4 className="font-bold text-2xl">Kunjungi Toko Online Kami</h4>
                <div className="flex space-x-4 mt-2">
                    <a href="https://www.tokopedia.com/genherba" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">Tokopedia</a>
                    <a href="https://www.shopee.co.id/genherba" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">Shopee</a>
                    <a href="https://www.lazada.co.id/genherba" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">Lazada</a>
                </div>
            </div>
            <div className="px-8 flex flex-col gap-3">
                <h4>Subscribe Berita</h4>
                <small>Masukkan email Anda untuk untuk berlangganan</small>
                <input type="email" placeholder="Masukkan email Anda" className="p-2 border border-gray-300 rounded-md"/>
                <button className="bg-blue-500 text-white px-4 py-2 rounded-md">Subscribe</button>
            </div>
        </footer>
    )
}