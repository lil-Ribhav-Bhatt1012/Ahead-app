import Image from 'next/image';

function Manifesto() {
    return (
        <section id="manifesto" className="p-5 bg-gradient-to-r from-teal-400 via-blue-500 to-indigo-600 flex flex-col items-center justify-center">
            <h2 className="text-3xl font-bold mb-5 text-black text-center">Manifesto</h2>
            <div className="mb-5">
                <Image src="/manifesto-image.png" alt="Manifesto Image" width={500} height={300} />
            </div>
            <p className="text-lg text-white text-center">
                At Ahead, we believe that true self-improvement comes from understanding oneself. 
                Our mission is to empower individuals with the tools and insights they need 
                to lead more fulfilling lives. Every challenge faced is an opportunity for growth, 
                and every emotion felt is a lesson in self-awareness. Together, let's journey towards a better self.
            </p>
        </section>
    );
}
export default Manifesto;