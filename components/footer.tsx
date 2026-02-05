export default function Footer(){
    return(
        <footer>
            <div className="bg-(--additional-color) pt-10 mt-5">
                <div className="md:flex justify-center px-5 md:px-10">
                    <div className="md:w-2/4">
                        <h4 className="text-black text-base md:text-xl font-semibold font-playfair">Find our official stores:</h4>
                        <a href="https://maps.google.com" target="_blank" rel="noopener noreferrer" className="text-sm hover:text-(--secondary-color)">Insect Street No IV, Butterfly Mansion, District Wisteria</a>
                        <div className="mt-2 md:mt-5 flex gap-4">
                            <a href="/" target="_blank" rel="noopener"><img className="w-4 md:w-5 opacity-50 hover:opacity-100" src="/shops/amazon.svg" alt="Berrybeaute Amazon official store" /></a>
                            <a href="/" target="_blank" rel="noopener"><img className="w-4 md:w-5 opacity-50 hover:opacity-100" src="/shops/shopee.svg" alt="Berrybeaute Shopee official store" /></a>
                            <a href="/" target="_blank" rel="noopener"><img className="w-4 md:w-5 opacity-50 hover:opacity-100" src="/shops/tiktok.svg" alt="Berrybeaute Tiktok official store" /></a>
                            <a href="/" target="_blank" rel="noopener"><img className="w-4 md:w-5 opacity-50 hover:opacity-100" src="/shops/tokopedia.svg" alt="Berrybeaute Tokopedia official store" /></a>
                        </div>
                    </div>
                    <div className="mt-5 md:mt-0 md:w-1/4">
                        <h4 className="text-black text-base md:text-xl font-semibold font-playfair">Contact Us here:</h4>
                        <div className="mt-2 md:mt-3 flex gap-4">
                            <a href="/" target="_blank" rel="noopener"><img className="w-4 md:w-5 opacity-50 hover:opacity-100" src="/socmed/instagram.svg" alt="Berrybeaute Instagram official Account" /></a>
                            <a href="/" target="_blank" rel="noopener"><img className="w-4 md:w-5 opacity-50 hover:opacity-100" src="/socmed/facebook.svg" alt="Berrybeaute Facebook official Account" /></a>
                            <a href="/" target="_blank" rel="noopener"><img className="w-4 md:w-5 opacity-50 hover:opacity-100" src="/socmed/email.svg" alt="Berrybeaute Email official Account" /></a>
                            <a href="/" target="_blank" rel="noopener"><img className="w-4 md:w-5 opacity-50 hover:opacity-100" src="/socmed/twitter.svg" alt="Berrybeaute Twitter official Account" /></a>
                            <a href="/" target="_blank" rel="noopener"><img className="w-4 md:w-5 opacity-50 hover:opacity-100" src="/socmed/whatsapp.svg" alt="Berrybeaute WhatsApp official Account" /></a>
                            
                        </div>
                    </div>
                    <div className="mt-5 md:mt-0 md:w-1/4">
                        <h4 className="text-black text-base md:text-xl font-semibold font-playfair">Let's keep in touch!</h4>
                        <p className="text-gray-700 text-sm">Get 15% of your first order!</p>
                        <input type="text" placeholder="Enter your email here.." className="mt-3 text-sm border focus:outline-(--secondary-color) border-(--secondary-color) bg-(--secondary-color)/20 pl-2 pr-13 py-1 rounded-xl"/>
                    </div>
                </div>
                <div className="text-center text-sm text-white mt-10 py-2 bg-(--secondary-color) font-montserrat">© 2024 Alvi Izdiana. All rights reserved.</div>
            </div>
        </footer>
    )
}