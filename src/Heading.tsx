import ReactCurvedText from 'react-curved-text';
import { ICategory } from './App';
import './Heading.css';

interface IHeaderProps {
    categories: ICategory[]
    currentCategory: ICategory
    setCategoryState: React.Dispatch<React.SetStateAction<ICategory>>
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
            <h3 className="current-category">Current Category</h3>
            <select className="select-class" name="categoryShowing" value={props.currentCategory.id} onChange={(e) => {
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