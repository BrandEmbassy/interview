import * as React from 'react';
import { Link } from 'react-router-dom';

const PageNotFound = () => (
    <div className="PageNotFound">
        Sorry, page not found. <Link to="/">Go To HomePage</Link>
    </div>
);

export default PageNotFound;
