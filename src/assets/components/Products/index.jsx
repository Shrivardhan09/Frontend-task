import { useEffect, useState } from 'react'
import './products.css'

const ProductList = () => {
    const [category, setCategory] = useState([])
    const [productList, setProductList] = useState([])
    const [currentIndex, setCurrentIndex] = useState(0);


    useEffect(() => {
        const fetching = async () => {
            const categoryfetchUrl = await fetch('https://fakestoreapi.com/products/categories')
            if (categoryfetchUrl.ok) {
                const data = await categoryfetchUrl.json()
                setCategory(data)
            } else {
                throw new Error('No categories found');
            }

            const productListFetch = await fetch('https://fakestoreapi.com/products')
            if (productListFetch.ok) {
                const productData = await productListFetch.json()
                setProductList(productData)
            } else {
                throw new Error('No products found');
            }
        }
        fetching()
    }, [])

    const handleLeftClick = () => {
        setCurrentIndex((prevIndex) => prevIndex === 0 ? prevIndex : prevIndex - 1)
        console.log('click l')
    }

    const handleRightClick = () => {
        setCurrentIndex((prevIndex) => prevIndex === productList.length - 2 ? 0 : prevIndex + 1)
        console.log('click r')
    }

    return (
        <div className='product-container'>
            <div className='heading-arrows'>
                <div className='new-products'>
                    <p className='product-heading'>New products</p>
                    <p className='star-products'>
                        <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path id="Star 2" d="M11 0L12.789 9.21102L22 11L12.789 12.789L11 22L9.21102 12.789L0 11L9.21102 9.21102L11 0Z" fill="#161615" />
                        </svg>
                    </p>
                </div>
                <div className='rl-arrow'>
                    <p style={{ cursor: 'pointer' }} onClick={handleLeftClick}>
                        <svg width="59" height="6" viewBox="0 0 59 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path id="Arrow 2" d="M58 3.5H58.5V2.5H58V3.5ZM0 3L5 5.88675V0.113249L0 3ZM58 2.5L4.5 2.5V3.5L58 3.5V2.5Z" fill="#161615" />
                        </svg>
                    </p>
                    <p style={{ cursor: 'pointer' }} onClick={handleRightClick}>
                        <svg width="70" height="6" viewBox="0 0 70 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path id="Arrow 1" d="M1 2.5H0.5L0.5 3.5H1L1 2.5ZM70 3L65 0.113249V5.88675L70 3ZM1 3.5L65.5 3.5V2.5L1 2.5L1 3.5Z" fill="#161615" />
                        </svg>
                    </p>
                </div>
            </div>
            <div className='categories-list'>
                <div className="category">
                    {category.map((items, i) => {
                        return (
                            <p key={i} className='list'>{items}</p>
                        )
                    })}
                </div>
                <div className='fetch-products'>
                    <div className='product-cards'>
                        {productList.slice(currentIndex, productList.length).map((products, index) => {
                            const { id, title, price, description, image } = products;
                            const cardClass = index === currentIndex ? 'cards active' : 'cards';
                            return (
                                <div
                                    key={id}
                                    className={cardClass}
                                >
                                    <div className=''>
                                        <img src={image} alt={image} className='product-image' />
                                    </div>
                                    <div className='desc'>
                                        <p className='title'>{title}</p>
                                        <p className='description'>{description}</p>
                                        <p className='price'>${price}</p>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
                <div className='mobile-arrows'>
                    <p style={{ cursor: 'pointer' }} onClick={handleLeftClick}>
                        <svg width="59" height="6" viewBox="0 0 59 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path id="Arrow 2" d="M58 3.5H58.5V2.5H58V3.5ZM0 3L5 5.88675V0.113249L0 3ZM58 2.5L4.5 2.5V3.5L58 3.5V2.5Z" fill="#161615" />
                        </svg>
                    </p>
                    <p style={{ cursor: 'pointer' }} onClick={handleRightClick}>
                        <svg width="70" height="6" viewBox="0 0 70 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path id="Arrow 1" d="M1 2.5H0.5L0.5 3.5H1L1 2.5ZM70 3L65 0.113249V5.88675L70 3ZM1 3.5L65.5 3.5V2.5L1 2.5L1 3.5Z" fill="#161615" />
                        </svg>
                    </p>
                </div>
            </div>
        </div >
    )
}
export default ProductList;
