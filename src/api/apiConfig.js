const apiConfig = {
    baseUrl: 'https://api.themoviedb.org/3/',
    apiKey: '523d6a9ebbf778d34f08b151d93effc8',
    originalImage: (imgPath) => `https://image.tmdb.org/t/p/original/${imgPath}`,
    w500Image: (imgPath) => `https://image.tmdb.org/t/p/w500/${imgPath}`
}

export default apiConfig;