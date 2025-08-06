import './ListArea.css';
import ProductSection from './ProductSection.tsx';
import { useState } from 'react';

import { IProduct, ICategory } from './App';

interface IListAreaProps {
    categories: ICategory[]
    products: IProduct[]
    currentCategory: ICategory
}

export enum SortTypes {
    Name,
    Price
}

export default function ListArea(props: IListAreaProps) {
    const [sortType, setSortType] = useState(SortTypes.Name);

    return (
        <div className="parent">
            <select className="leftEdge" name="sortTypeSelect" value={sortType} onChange={(e) => {
                setSortType(parseInt(e.target.value));
            }}>
                <option key={1} value={SortTypes.Name}>{SortTypes[SortTypes.Name]}</option>
                <option key={2} value={SortTypes.Price}>{SortTypes[SortTypes.Price]}</option>
            </select>
            <div className="no-overflow">
                <ProductSection category={props.currentCategory} categoryProducts={props.products.filter((product) => product.category_id === props.currentCategory.id)} sortChoice={sortType} />
            </div>
        </div>
    );
}