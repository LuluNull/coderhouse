import { toHaveStyle } from "@testing-library/jest-dom/dist/matchers"

const products = [
    {
        id: '1',
        name: 'Keychain Cat Jar',
        price: '$100',
        image: 'https://m.media-amazon.com/images/I/51FWFQVALML._AC_SX466_.jpg',
        stock: '10',
        description: 'Made of plastick. Dimentions: 10cm x 10cm',
        category: 'misc'
    },
    {
        id: '2',
        name: 'Watter Bottle Bear',
        price: '$200',
        image: 'https://i.pinimg.com/originals/f9/38/11/f938110de5709c7437d8a573c1edf48b.jpg',
        stock: '20',
        description: 'Made of plastick. Dimentions: 50cm x 10cm',
        category: 'misc'

    },
    {
        id: '3',
        name: 'Squishy Unicorn',
        price: '$300',
        image: 'https://i.pinimg.com/736x/f8/4a/79/f84a792873b423ae92e3d67bb020f126.jpg',
        stock: '30',
        description: 'Made of cotton. Dimentions: 50cm x 50cm',
        category: 'newin'
    },
    {
        id: '4',
        name: 'Lip tint',
        price: '$400',
        image: 'https://m.media-amazon.com/images/I/51L+mSWqvYL._SX569_.jpg',
        stock: '40',
        description: 'Shade: power pink. 50mg',
        category: 'makeup'
    }

]

export const getProducts = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(products)
        }, 2000)
    })
}

export const getProductByID = (id) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const product = products.find(prod => prod.id === id);
            resolve(product)
        }, 500)
    })
}

export const getProductsByCategory = (category) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const prods = products.filter(prod => prod.category === category);
            resolve(prods)
        }, 500)
    })
}