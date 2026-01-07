import classes from './ConceptItem.module.css'; 
const ConceptItem = ({ props }) => {
    return (
        <li className={classes.concept}>
            <img src={props.image} alt={props.title} />
            <h2>{props.title}</h2>
            <p>{props.description}</p>
        </li>

    );
};

export default ConceptItem;