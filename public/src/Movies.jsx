
import React, { Fragment } from 'react';

function Movies(props)
{

    return(
        <Fragment>
            <li className="shadow p-2 my-2 col-sm-9">
                {props.value}
            </li>
            <button className="btn btn-danger my-2 col-sm-2 offset" onClick={()=>{props.sendData(props.id)}}> X </button>
        </Fragment>
    )
}

export default Movies