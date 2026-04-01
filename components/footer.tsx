export default function Footer(){
    return(
        <footer id="contact">
            <div className="bg-(--additional-color) pt-10 mt-5">
                <div className="md:flex justify-center px-5 md:px-10">
                    <div className="md:w-2/4">
                        <h4 className="text-(--active-color) text-base md:text-xl font-semibold font-playfair italic">Find our official stores:</h4>
                        <a href="https://maps.google.com" target="_blank" rel="noopener noreferrer" className="text-sm hover:text-(--secondary-color)">Insect Street No IV, Butterfly Mansion, District Wisteria</a>
                        <div className="mt-2 md:mt-5 flex gap-4">
                            <a href="/" target="_blank" rel="noopener"><img className="w-4 md:w-5 opacity-50 hover:opacity-100" src="/shops/amazon.svg" alt="Berrybeaute Amazon official store" /></a>
                            <a href="/" target="_blank" rel="noopener"><img className="w-4 md:w-5 opacity-50 hover:opacity-100" src="/shops/shopee.svg" alt="Berrybeaute Shopee official store" /></a>
                            <a href="/" target="_blank" rel="noopener"><img className="w-4 md:w-5 opacity-50 hover:opacity-100" src="/shops/tiktok.svg" alt="Berrybeaute Tiktok official store" /></a>
                            <a href="/" target="_blank" rel="noopener"><img className="w-4 md:w-5 opacity-50 hover:opacity-100" src="/shops/tokopedia.svg" alt="Berrybeaute Tokopedia official store" /></a>
                        </div>
                    </div>
                    <div className="mt-5 md:mt-0 md:w-1/4">
                        <h4 className="text-(--active-color) text-base md:text-xl font-semibold font-playfair italic">Contact Us here:</h4>
                        <div className="mt-2 md:mt-3 flex gap-4">
                            <a href="/" target="_blank" rel="noopener"><img className="w-4 md:w-5 opacity-50 hover:opacity-100" src="/socmed/instagram.svg" alt="Berrybeaute Instagram official Account" /></a>
                            <a href="/" target="_blank" rel="noopener"><img className="w-4 md:w-5 opacity-50 hover:opacity-100" src="/socmed/facebook.svg" alt="Berrybeaute Facebook official Account" /></a>
                            <a href="/" target="_blank" rel="noopener"><img className="w-4 md:w-5 opacity-50 hover:opacity-100" src="/socmed/email.svg" alt="Berrybeaute Email official Account" /></a>
                            <a href="/" target="_blank" rel="noopener"><img className="w-4 md:w-5 opacity-50 hover:opacity-100" src="/socmed/twitter.svg" alt="Berrybeaute Twitter official Account" /></a>
                            <a href="/" target="_blank" rel="noopener"><img className="w-4 md:w-5 opacity-50 hover:opacity-100" src="/socmed/whatsapp.svg" alt="Berrybeaute WhatsApp official Account" /></a>
                            
                        </div>
                    </div>
                    <div className="mt-5 md:mt-0 md:w-1/4">
                        <h4 className="text-(--active-color) text-base md:text-xl font-semibold font-playfair italic">Let's keep in touch!</h4>
                        <p className="text-gray-700 text-xs">Get 15% of your first order!</p>
                        <div className="flex items-center mt-3 ">
                            <input type="text" placeholder="Enter your email here.." className="text-sm border focus:outline-(--secondary-color) border-(--secondary-color) bg-(--secondary-color)/20 pl-2 pr-3 mr-3 py-1 rounded-xl"/>
                            <a href="/contact" className="bg-transparent border border-(--secondary-color) text-(--secondary-color) text-sm rounded-full hover:bg-(--secondary-color) hover:text-(--additional-color) hover:border hover:border-(--secondary-color) transition-colors ease-in-out duration-300 px-2 py-1">Send <i className="fa-solid fa-paper-plane"></i></a>
                        </div>
                    </div>
                </div>
                <div className="text-center text-sm text-white mt-10 py-2 bg-(--secondary-color) font-montserrat">© 2026 Alvi Izdiana. All rights reserved.</div>
            </div>
        </footer>
    )
}