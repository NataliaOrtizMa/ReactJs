import React from "react";
import Color from "./Color";
import { UseColors } from "./ColorProvider";

export default function colorList() {
    const { colors } = UseColors();

    if (!colors.length) {
        return (
            <div> No hay colores</div>
        )
    }

    return (
        <div>
            {colors.map((color) => (
                <Color key={color.id} {...color}/>
            ))}
        </div>
    );
}