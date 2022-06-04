const products =[
{
    id: 1,
    name: 'keychain',
    price: 100,
    image: 'https://m.media-amazon.com/images/I/51FWFQVALML._AC_SX466_.jpg',
    stock: 10
},
{
    id: 2,
    name: 'waterbottle',
    price: 200,
    image: 'https://i.pinimg.com/originals/f9/38/11/f938110de5709c7437d8a573c1edf48b.jpg',
    stock: 20

},
{
    id: 3,
    name: 'squishy',
    price: 300,
    image: 'https://i.pinimg.com/736x/f8/4a/79/f84a792873b423ae92e3d67bb020f126.jpg',
    stock: 30
}
]

export const getProducts = () => {
    return new Promise ((resolve, _) =>{
        setTimeout (() => { 
            resolve (products)}, 2000)
    })
}