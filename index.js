const photoClient = require('./photoClient');
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

(async () => {
    console.log('Enter an album ID to view its contents, enter q to quit: ');
    for await (const line of rl) {
        var parsed = Number.parseInt(line, 10);
        if (Number.isNaN(parsed)) {
            if (line === 'q') {
                console.log('Goodbye!');
                return rl.close();
            } else {
                console.log('Invalid input. Please enter an integer album ID.');
            }
        } else {
            let photos = await photoClient.getPhotosByAlbum(parsed);
            photos.forEach(x => console.log(`[${x.id}] ${x.title}`));
        }
    }
})();
