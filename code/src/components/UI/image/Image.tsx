import React, { useState, useEffect } from "react";

type ImageProps = {
	defaultSrc: string;
	className?: string;
} & React.ImgHTMLAttributes<HTMLImageElement>;

const Image: React.FC<ImageProps> = ({
	src,
	alt,
	defaultSrc,
	className,
	...rest
}) => {
	const [imageSrc, setImageSrc] = useState(src);

	useEffect(() => {
		setImageSrc(src);
	}, [src]);

	const handleError = () => {
		setImageSrc(defaultSrc);
	};

	return (
		<img
			src={imageSrc}
			alt={alt}
			onError={handleError}
			className={className}
			{...rest}
		/>
	);
};

export default Image;
