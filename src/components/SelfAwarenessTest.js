import { useState } from 'react';
import Image from 'next/image';

function SelfAwarenessTest() {
    const [isModalOpen, setModalOpen] = useState(false);

    const questions = [
        "How do you handle stress?",
        "What are your core values?",
        "In what situations do you feel out of your comfort zone?",
        "What are your strengths and weaknesses?",
        "How do you handle criticism?",
    ];

    return (
        <section id="self-awareness" className="p-5 bg-gradient-to-l from-indigo-600 via-blue-500 to-teal-400 flex flex-col items-center justify-center">
            <h2 className="text-3xl font-bold mb-5 text-black">Discover Your Potential</h2>
            <div className="mb-5">
                <Image src="/self.jpg" alt="Discover Image" width={500} height={300} />
            </div>
            <p className="text-lg mb-5 text-white text-center">Take our self-awareness test and find out how well you truly know yourself and how others see you.</p>
            <button onClick={() => setModalOpen(true)} className="bg-white text-indigo-600 px-8 py-3 rounded-full shadow-lg hover:bg-indigo-100 transition-colors duration-300">Start the Test</button>
            
            {isModalOpen && (
                <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-60 flex items-center justify-center z-100">
                    <div className="relative bg-gray-100 p-8 rounded shadow-xl w-3/4 max-w-xl">
                        <button onClick={() => setModalOpen(false)} className="absolute top-2 right-2 text-black font-bold">X</button>
                        <h3 className="text-xl font-bold mb-5 text-black">Self-awareness Test</h3>
                        <ul className="mb-5">
                            {questions.map((question, index) => (
                                <li key={index} className="mb-4">
                                    <p className="font-semibold text-black">{question}</p>
                                    <textarea className="mt-2 w-full p-2 border rounded" rows="3"></textarea>
                                </li>
                            ))}
                        </ul>
                        <button onClick={() => setModalOpen(false)} className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700 transition-colors duration-300">Submit</button>
                    </div>
                </div>
            )}
        </section>
    );
}
export default SelfAwarenessTest;
