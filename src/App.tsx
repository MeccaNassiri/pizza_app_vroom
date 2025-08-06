import { useState, useEffect} from 'react'
import './App.css'
import Heading from './Heading.tsx'
import ListArea from './ListArea.tsx'

export interface IApiData {
    products: IProduct[]
    categories: ICategory[]
}

export interface IProduct {
    id: number
    title: string
    price: string
    category_id: number
    image_soft_ref_url: string
}

export interface ICategory {
    id: number,
    title: string
}

function App() {
    const [data, setData] = useState<IApiData>({ products: [], categories: [] });
    const [categoryShowing, setCategoryShowing] = useState<ICategory>({id: 0, title: "null"});

    useEffect(() => {
        fetch("/src/assets/products.json")
            .then((res) => {
                const ting: IApiData = res.json().then((oney) => {
                    setData(oney)
                    setCategoryShowing((oney as IApiData).categories[0]);
                });
            })
    }, []);

    return (
        <div>
            <div>
                <Heading categories={data.categories} currentCategory={categoryShowing} setCategoryState={setCategoryShowing} />
            </div>
            <ListArea categories={data.categories} products={data.products} currentCategory={categoryShowing} />
        </div>
    )
}

export default App