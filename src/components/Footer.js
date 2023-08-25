import Image from 'next/image';

function Footer() {
    return (
        <footer className="bg-gradient-to-l from-teal-400 via-blue-500 to-indigo-600 text-white p-5 flex items-center justify-center min-h-[200px]">
            <div className="text-center">
                <h2 className="text-xl font-bold mb-3">Ahead</h2>
                <p className="mb-3">AugustraBe 26, 10117 Berlin</p>
                <p className="mb-3">hi@ahead-app.com</p>
                <button className="bg-black text-white px-5 py-2 rounded shadow-lg mb-3 flex items-center">
                    <Image src="/icons8-apple-logo-50.png" alt="Apple Icon" width={24} height={24} className="mr-2" />
                    Download on the App Store
                </button>
                <p>2022 Ahead app. All rights reserved.</p>
            </div>
        </footer>
    );
}
export default Footer;
