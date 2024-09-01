import React from 'react'

const Carousel = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const handleNext = () => {
      setCurrentIndex((prevIndex) =>
        prevIndex === items.length - 1 ? 0 : prevIndex + 1
      );
    };
  
    const handlePrevious = () => {
      setCurrentIndex((prevIndex) =>
        prevIndex === 0 ? items.length - 1 : prevIndex - 1
      );
    };
  return (
  <>
   <div className="flex flex-col items-center">
      <div className="w-full md:w-1/2 flex items-center justify-center relative">
        <div className="text-center p-4">
          <div className="w-12 h-12 bg-blue-200 rounded-full mx-auto mb-4 flex items-center justify-center">
            <span className="text-lg">💡</span>
          </div>
          <h2 className="text-xl font-semibold mb-2">{items[currentIndex].title}</h2>
          <p>{items[currentIndex].content}</p>
        </div>
      </div>
      <div className="flex mt-4 space-x-2">
        <button
          onClick={handlePrevious}
          className="bg-blue-500 text-white p-2 rounded-full"
        >
          &lt;
        </button>
        <button
          onClick={handleNext}
          className="bg-blue-500 text-white p-2 rounded-full"
        >
          &gt;
        </button>
      </div>
    </div>
  </>
  )
}

export default Carousel