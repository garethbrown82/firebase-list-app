import * as React from 'react';
import { connect } from 'react-redux';

const mapStateToProps = (state, ownProps) => ({
    list: state.listReducer.list
});

const ListComponent = (props) => {
    return(
        <div>
            <ul>
                {props.list.map((value, index) => <li key={index}>{value.item.itemText}</li>)}
            </ul>
        </div>
    )
}

export const List = connect(
    mapStateToProps
)(ListComponent);