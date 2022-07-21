import axios from 'axios';

const getImages = async (start = 0, limit = 100) => {
    try {
        const response = await axios.get(`https://jsonplaceholder.typicode.com/photos?_start=${start}&_limit=${limit}`)
        return response.data
    } catch (error) {
        console.log(error)
    }
}

const getImage = async (photoId) => {
    try {
        const response = await axios.get(`https://jsonplaceholder.typicode.com/photos/${photoId ? photoId : ''}`)
        return response.data
    } catch (error) {
        console.log(error)
    }
}

export { getImage, getImages }