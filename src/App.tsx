import { useState, useEffect } from 'react';
import './App.css';
import Heading from './Heading.tsx';
import ListArea from './ListArea.tsx';

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
    const [dataLoaded, setDataLoaded] = useState(false);

    useEffect(() => {
        fetch(`https://api.allorigins.win/get?url=${encodeURIComponent('https://www.vroomdelivery.com/api/v1/products/getProductsWithSecondaryCategories?primary_category=2807&company_id=2449')}`)
            .then((res) => {
                res.json().then((jsonDatey) => {
                    const ting: IApiData = JSON.parse(jsonDatey.contents) as IApiData;
                    setData(ting);
                    setDataLoaded(true);
                    setCategoryShowing(ting.categories[0]);
                });
            }).catch((error) => {
                console.error(error);
                fetch("./products.json").then((innerRes) => {
                    const ting: IApiData = innerRes.json().then((oney) => {
                        setData(oney);
                        setDataLoaded(true);
                        setCategoryShowing((oney as IApiData).categories[0]);
                    });
                });
            });
    }, []);

    return (
        <div>
            <div>
                <Heading categories={data.categories} currentCategory={categoryShowing} setCategoryState={setCategoryShowing} dataLoaded={dataLoaded} />
            </div>
            <ListArea categories={data.categories} products={data.products} currentCategory={categoryShowing} dataLoaded={dataLoaded} />
        </div>
    )
}

export default App