import * as React from 'react';
import { logUserToConsole } from './Utilities';

export const ShowUserButton = () => {
    return (
        <button className="btn btn-outline-secondary ml-3" onClick={logUserToConsole}>Show user</button>
    )
}