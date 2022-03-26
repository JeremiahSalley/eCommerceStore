const url = 'https://fakestoreapi.com/products/categories'

function displayProduct(){
    fetch(url)
    .then(res => res.json())
    .then(data => console.log(data))
    .catch(err => {
        console.log('something is wrong', err)
    })
}

displayProduct()


let icon = document.getElementsByClassName('icon')[0]

console.log(icon)

icon.addEventListener('click', iconClicked)

function iconClicked(){
    console.log('here')
}




