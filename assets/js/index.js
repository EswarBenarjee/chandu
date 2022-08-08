let filters = document.getElementsByClassName('filter-item');

for (let index = 0; index < filters.length; index++) {
    const filter = filters[index];
    filter.addEventListener('mouseover', () => {
        let filterid = filter.id;
        let number = filterid[filterid.length-1];

        let img = document.getElementById('filterImg'+number);
        img.style.display = 'none';

        let video = document.getElementById('filterVideo'+number);
        video.style.display = 'block';

        video.currentTime = 0;
        video.play();
    });
    filter.addEventListener('mouseleave', () => {
        let filterid = filter.id;
        let number = filterid[filterid.length-1];

        let img = document.getElementById('filterImg'+number);
        img.style.display = 'block';

        let video = document.getElementById('filterVideo'+number);
        video.style.display = 'none';
    });
}
