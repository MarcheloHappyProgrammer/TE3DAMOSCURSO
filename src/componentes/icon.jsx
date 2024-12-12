import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

export const Icon = ({icon, css}) => {
    return (
        <FontAwesomeIcon className={css} icon={icon} />
    )
}