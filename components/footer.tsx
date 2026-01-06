export default function Footer(){
    return(
        <footer className="p-4 flex justify-between items-center bg-gray-100">
            <div className="p-4 ">
                <h4>Kantor Pusat</h4>
                <h5>Jl. Raya Kebon Jeruk No. 123, Jakarta</h5>
            </div>
            <div className="p-4 flex flex-col">
                <h4>Subscribe Berita</h4>
                <small>Masukkan email Anda untuk untuk berlangganan</small>
                <input type="email" placeholder="Masukkan email Anda" className="p-2 border border-gray-300 rounded-md"/>
                <button className="bg-blue-500 text-white px-4 py-2 rounded-md">Subscribe</button>
            </div>
        </footer>
    )
}