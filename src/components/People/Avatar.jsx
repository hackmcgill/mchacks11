
import React from "react";
import AvatarImage from "./AvatarImage"

const Avatar = ({ image, name }) => {
    return (
        <AvatarImage alt={name} src={image}/>
    )
}

export default Avatar;