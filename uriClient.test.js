const assert = require('assert');
const uriClient = require('./uriClient');

describe('uriClient', () => {
    describe('getPhotosByAlbumUri', () => {
        it('returns album url', () => {
            const result = uriClient.getPhotosByAlbumUri(3);

            assert(result, 'https://jsonplaceholder.typicode.com/photos?albumId=3');
        });
    })
});