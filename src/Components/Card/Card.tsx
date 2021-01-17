import { FunctionComponent } from 'react';
import './Card.scss';

type CardType = "default" | "accent";

type CardProps = {
    type? : CardType
}

function getClassName(type? : CardType) {
    if (type === "accent")
        return "card card-accent"
    else
        return "card card-default";
}

const Card : FunctionComponent<CardProps> = ({type, children}) => {

    const className = getClassName(type);

    return (
        <div className={className}>
            {children}
        </div>
    )
}

export default Card;