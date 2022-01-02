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
    // document.getElementById('date').textContent = data.date
    document.getElementById('picture').src = data.hdurl
    document.getElementById('explanation').textContent = data.explanation

    let date = document.getElementById('date');
    // date_input.valueAsDate = new Date();

    date.onchange = function () {
        ChangeUrl(data.title, `https://apod.nasa.gov/apod/ap${sliceDate(this.value)}.html`)
        
        function ChangeUrl(title, url) {
            if (typeof (history.pushState) != "undefined") {
                var obj = { Title: title, Url: url };
                history.pushState(obj, obj.Title, obj.Url);
            } else {
                alert("Browser does not support HTML5.");
            }
        }
        console.log(sliceDate(this.value));
    }

    
}

function sliceDate(date) {
    let temp = date.split('-');
    temp[0] = temp[0].slice(2, 4)
    return temp.join('')
}
