const fetchNASAData = async () => {
    try {
        const response = await fetch('https://api.nasa.gov/planetary/apod?api_key=0U8K95IrZwyC7yOen5Qp3OUjkZgpZBDtGFiwTS9v')
        const data = await response.json()
        console.log('NASA APOD data', data)
        displayData(data)
    } catch (error) {
        console.log(error)
    }
}

fetchNASAData()


const displayData = data => {
    document.getElementById('main-title').textContent = data.title
    document.getElementById('picture').src = data.hdurl
    document.getElementById('explanation').textContent = data.explanation

    let date = document.getElementById('date');

    date.onchange = function () {
        document.querySelector('#button-link').insertAdjacentHTML('afterend', `<a href="https://apod.nasa.gov/apod/ap${sliceDate(this.value)}.html">Check page of selected date!</a>`)

        console.log(sliceDate(this.value));
    }
}

function sliceDate(date) {
    let temp = date.split('-');
    temp[0] = temp[0].slice(2, 4)
    return temp.join('')
}
