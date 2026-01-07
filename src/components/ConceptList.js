import React from 'react';
import  conceptsData  from '../state/conceptsData';
import ConceptItem from './ConceptItem';
import classes from './ConceptList.module.css';

const ConceptList = () => {
    const concepts = conceptsData();
    return (
        <ul className={classes.concepts} >
            {concepts.map((concept, index) =>
                <ConceptItem key={index} props={concept} />)}

        </ul>
    )

}

export default ConceptList;