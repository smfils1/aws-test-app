const axios = require("axios")


const fetchPic = async () => {
    let image = "#"
    try{
        const response = await axios.get(`https://api.unsplash.com/photos/random?client_id=${process.env.REACT_APP_UNSPLASH_ACCESS_KEY}`)
        const json = await response.data
        image = json.urls.small
    } catch { }
    finally {
        return image
    }
    
}

module.exports = fetchPic