import React from "react";
import { FaTrash } from "react-icons/fa";
import StarRating from "./StarRating";
import { UseColors } from "./ColorProvider";

export default function Color({id, title, color, rating}) {
    const {updateRateColor, removeColor} = UseColors();
    return (
        <section>   
            <h1>{title}</h1>
            <button onClick={() => removeColor(id)}><FaTrash/></button>
            <div style={{height: 50, backgroundColor: color}}></div>
            <StarRating selectedStars={rating} onRate={(rating) => {updateRateColor(id, rating)}}/>
        </section>
    );
}