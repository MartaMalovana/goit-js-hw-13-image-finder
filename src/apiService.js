const myKey = '24296809-9b93a2a7fdd6c9a326bbfa052';
let pageNumber = 1;

export default function getImages (value) {
    const url = `https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=${value}&page=${pageNumber}&per_page=12&key=${myKey}`;
    fetch(url).then(result => result.json(''));
} 
