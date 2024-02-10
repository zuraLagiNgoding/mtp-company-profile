import React from 'react'

const Gallery = () => {
  return (
    <div className="flex flex-col items-center gap-8 ">
      <h1 className="text-2xl font-bold border-b-4 border-b-secondary px-3 py-1">
        Gallery
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 gap-y-2 w-full">
      </div>
    </div>
  );
}

export default Gallery