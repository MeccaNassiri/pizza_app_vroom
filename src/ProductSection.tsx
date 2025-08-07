import { IProduct, ICategory } from './App';
import { SortTypes } from './ListArea.tsx';
import './ProductSection.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider, {slickGoTo} from "react-slick";
import { useState, useRef, useEffect} from 'react';

interface IProductSectionProps {
    category: ICategory
    categoryProducts: IProduct[]
    sortChoice: SortTypes
}

export default function ProductSection(props: IProductSectionProps) {
    const settings = {
        dots: false,
        infinite: props.categoryProducts.length > 5,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
        swipeToSlide: true,
        className: "padding-div",
        responsive: [
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 3,
                    infinite: props.categoryProducts.length > 3
                }
            },
            {
                breakpoint: 800,
                settings: {
                    slidesToShow: 4,
                    infinite: props.categoryProducts.length > 4
                }
            },
            {
                breakpoint: 1000,
                settings: {
                    slidesToShow: 5,
                    infinite: props.categoryProducts.length > 5
                }
            }
        ]
    };

    return (
        <>
            <div className="productsList">
                <Slider {...settings}>
                    {props.categoryProducts.sort((a, b) => (props.sortChoice === SortTypes.Name) ? a.title.localeCompare(b.title) : parseFloat(a.price) - parseFloat(b.price)).map((product) => (
                        <div>
                            <div className="image-container hover-special">
                                <img className="bg-white product-image" src={product.image_soft_ref_url} alt=""></img>
                            </div>

                            <div>
                                <p className="bold-font black-font no-bottom-margin">${product.price}</p>
                                <p className="semibold-font black-font">{product.title}</p>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
            <h5>{
                (props.category.title === "Pizza Slices" && "Are these slices of Peet-zuh or Pizzaw?")
                || (props.category.title === "Large Pizza" && "I usually call these big-boned pizzas")
                || (props.category.title === "Sheet Pizza" && "Same Sheet, Different Day")
                || (props.category.title === "Calzone" && "What came first: the calzone or the empanada?")
                || (props.category.title === "Combos" && "Everybody has a plan until they get a combo to the face - Mike Tyson")
            }</h5>
        </>
    );
}