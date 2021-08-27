
const baseUri = 'https://jsonplaceholder.typicode.com/photos';

const getPhotosByAlbumUri = (albumId) => `${baseUri}?albumId=${albumId}`;

module.exports = {
    getPhotosByAlbumUri
};