export default async () => {
    let image = "#"
    try{
        const response = await fetch(`https://api.unsplash.com/photos/random?client_id=${process.env.REACT_APP_UNSPLASH_ACCESS_KEY}`)
        const data = await response.json()
        image = data.urls.small
    } catch { return image }
    return image
}