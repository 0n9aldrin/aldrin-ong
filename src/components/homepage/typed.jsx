// components/TypedComponent.js
import React, { useRef, useEffect } from "react";
import Typed from "typed.js";

import "./styles/typed.css";

const TypedComponent = ({ strings }) => {
	const el = useRef(null);

	useEffect(() => {
		const options = {
			strings: strings,
			typeSpeed: 50,
			backSpeed: 25,
			backDelay: 1000,
			loop: true,
		};
		const typed = new Typed(el.current, options);

		return () => {
			// Properly cleanup the Typed.js instance
			typed.destroy();
		};
	}, [strings]);

	return (
		<div>
			I'm a <span ref={el} className="typed-text"></span>
		</div>
	);
};

export default TypedComponent;
