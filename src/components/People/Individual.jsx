import React from "react";
import Text from "./Text";
import Avatar from "./Avatar";
import IndividualContainer from "./IndividualContainer";

const Individual = ({image, name, position, companyName}) => {    
    return (
        <IndividualContainer>
            <Avatar image={image} name={name}/>
            <Text>
                <h2>
                    {name}
                </h2>
                <h3>
                    {position}, {companyName}
                </h3>
            </Text>
        </IndividualContainer>
    );
}

export default Individual;