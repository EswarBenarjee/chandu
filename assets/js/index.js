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
    filter.addEventListener('click', () => {
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

let honestResume = document.getElementById('honest');
honestResume.addEventListener('click', () => {
    document.getElementById("honest-view").style.display = 'block';
});

function display() {
    document.getElementById('hero').style.transistion = '2s';
}

// var rect = document.getElementById('hero_name').getBoundingClientRect();
// let centerY = rect.bottom;
// let centerX = (rect.left+rect.right)/2;

// console.log(centerX +" "+ centerY);

let icons = document.getElementsByClassName('fav-icon');
let contents = document.getElementsByClassName('fav-content');
for (let index = 0; index < icons.length; index++) {
    const icon = icons[index];
    icon.addEventListener('click', () => {
        for (let index1 = 0; index1 < icons.length; index1++) {
            const icon1 = icons[index1];
            icon1.classList.remove('active');
        }
        for (let index1 = 0; index1 < contents.length; index1++) {
            const content1 = contents[index1];
            content1.style.display = 'none';
        }
        icon.classList.add('active');
        let number = icon.id[icon.id.length-1];
        document.getElementById('fav-content'+number).style.display = 'block';
    });  
}