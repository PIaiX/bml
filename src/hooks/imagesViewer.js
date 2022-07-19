import {useEffect, useState} from "react";

export const useImagesViewer = (files) => {

    const [images, setImages] = useState([]);

    useEffect(() => {
        const images = [], fileReaders = []
        if (files?.length) {
            files.forEach((file) => {
                const fileReader = new FileReader();
                fileReaders.push(fileReader);
                fileReader.onload = (e) => {
                    const { result } = e.target;
                    if (result) {
                        images.push(result)
                    }
                    if (images.length === files.length) {
                        setImages(images);
                    }
                }
                fileReader.readAsDataURL(file);
            })
        }
    }, [files]);
    return images
}