import {useEffect, useState} from "react";

export const useImageViewer = (file) => {

    const [fileDataURL, setFileDataURL] = useState(null)

    useEffect(() => {
        let fileReader
        if (file) {
            fileReader = new FileReader();
            fileReader.onload = (e) => {
                const { result } = e?.target;
                if (result) {
                    setFileDataURL(result)
                }
            }
            fileReader.readAsDataURL(file);
        }
    }, [file])

    return fileDataURL
}