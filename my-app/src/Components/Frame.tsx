import React from 'react';
import './Frame.css';

interface FrameProps {
    image: string;
    imageRef: string;
    title: string;
    description: string;
    cost: number;
    material: string;
    dimensions: string;
    onClick: () => void; // Add onClick prop
    setItem: (item: any) => void; // Add setItem prop
}

const Frame: React.FC<FrameProps> = ({ image, imageRef, title, description, cost, material, dimensions, onClick, setItem }) => {
    return (
        <div className="frame-container" onClick={
            () => {
                onClick();
                setItem({ imageRef, title, description, cost, material, dimensions });
            }
        }> {}
            <img src={image} alt={description} />
            <h1>{title}</h1>
        </div>
    );
};

export default Frame;