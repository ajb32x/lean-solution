const got = require('got');
const uriClient = require('./uriClient');

const getPhotosByAlbum = async (albumId) => await got(uriClient.getPhotosByAlbumUri(albumId)).json();

module.exports = {
    getPhotosByAlbum
};