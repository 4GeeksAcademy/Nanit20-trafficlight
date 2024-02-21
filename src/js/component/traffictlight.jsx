import React, { useState } from 'react';

const colors = {
    red: "redlight",
    yellow: "yellowlight",
    green: "greenlight",
}

//create your first component
const Trafficlight = () => {
    const [color, setColor] = useState(null);
    if(color == "red"){
        colors.red = "redlightanimated";
        colors.yellow = "yellowlight";
        colors.green = "greenlight";
    } else if (color=="yellow"){
        colors.red = "redlight";
        colors.green = "greenlight";
        colors.yellow = "yellowlightanimated";
    } else if (color=="green"){
        colors.red = "redlight";
        colors.yellow = "yellowlight";
        colors.green = "greenlightanimated";
    }
    
	return (
		<div className="trafficlight">
			<div className="container">
                <div className={colors.red}>
                    <button onClick={() => setColor("red")}></button>
                </div>
                <div className={colors.yellow}>
                    <button onClick={() => setColor("yellow")}></button>
                </div>
                <div className={colors.green}>
                    <button onClick={() => setColor("green")}></button>
                </div>
            </div>
		</div>
	);
};

export default Trafficlight;