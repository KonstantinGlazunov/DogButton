const imageButton = document.getElementById('button');
const imageContent = document.getElementById('content');
const serverURL = 'https://dog.ceo/api/breeds/image/random';

function showImage() {
    let response = fetch(serverURL);
    response.then((response) => {
        data = response.json();
        data.then((res) => {
            const imgUrl = res.message;
           // if (!(document.getElementById('imageFromServer'))) { //не получилось выделить получение URL в отдельную функцию...
                imageContent.insertAdjacentHTML('afterbegin', `<img id=imageFromServer src=${imgUrl} alt="imageFromServer">`)
                const image = document.getElementById('imageFromServer');
                setTimeout(() => image.remove(), 2000);
        //    }


        })
    })
}


imageButton.addEventListener('click', () => {
    if (!document.getElementById('imageFromServer')) {
        showImage();
    } else {
        (document.getElementById('imageFromServer')).remove();
        showImage();

    };
}
)