import Image from 'next/image'


function MainBody() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-teal-400 via-blue-500 to-indigo-600 p-5">
      <Image src="/ahead.jpeg" alt="Ahead App" width={400} height={400} />
      <h1 className="text-4xl font-bold mt-5 mb-3">Master your life by mastering emotions</h1>
      <div className="flex items-center">
        <button className="bg-blue-500 px-5 py-2 rounded mr-4">Download on the App Store</button>
        <span className="text-yellow-400">★★★★★</span>
      </div>
    </div>
  );
}

export default MainBody;
