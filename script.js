const url = 'https://fakestoreapi.com/products'

fetch(url)
    .then(res => {
        console.log('succes', res)
    })
    .catch(err => {
        console.log('something is wrong', err)
    })

          