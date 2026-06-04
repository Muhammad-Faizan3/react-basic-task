import { useState } from "react";
function ImageGallery() {
   const images = [
  "https://picsum.photos/id/1015/500/300",
  "https://picsum.photos/id/1016/500/300",
  "https://picsum.photos/id/1018/500/300",
];
    const [currentIndex,setCurrentIndex] = useState(0)

    const nextImage =() => {
        if(currentIndex < images.length -1)
            setCurrentIndex(currentIndex + 1)
    }

    const prevImage = () => {
        if(currentIndex > 0)
            setCurrentIndex(currentIndex - 1)
    }
    return (
        <div>
            <img src={images [currentIndex]} alt="" />
            <button onClick={nextImage}>Next Image</button>
            <button onClick={prevImage}>Prev Image</button>

        </div>
    )
}
export default ImageGallery