import ReactCurvedText from 'react-curved-text';
import { type ICategory } from './App';
import './Heading.css';
import { useState, useEffect } from 'react';

interface IHeaderProps {
    categories: ICategory[]
    currentCategory: ICategory
    setCategoryState: React.Dispatch<React.SetStateAction<ICategory>>
    dataLoaded: boolean;
}

export default function Heading(props: IHeaderProps) {
    return (
        <div className="reduce-top-space">
            <ReactCurvedText
                width={400}
                height={100}
                cx={200}
                cy={150}
                rx={100}
                ry={100}
                startOffset={59}
                reversed={true}
                text="Pizza!"
                textProps={{ style: { fontSize: 80 } }}
                textPathProps={null}
                tspanProps={null}
                ellipseProps={null}
                svgProps={null}
            />
            <h3 className={"current-category" + ((!props.dataLoaded) ? " animated-loading-text" : "")}>{(!props.dataLoaded) ? "Loading" : "Current Category"}</h3>
            <select className={"select-class" + ((!props.dataLoaded) ? " hidden" : "")} name="categoryShowing" value={props.currentCategory.id} onChange={(e) => {
                for (let i = 0; i < props.categories.length; i++) {
                    if (props.categories[i].id === parseInt(e.target.value)) {
                        props.setCategoryState(props.categories[i]);
                    }
                }
            }}>
                {props.categories.map(function (cat, index) {
                    return (<option key={index} value={cat.id}>{cat.title}</option>);
                })}
            </select>
        </div>
    );
}