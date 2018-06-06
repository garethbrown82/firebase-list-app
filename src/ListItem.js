import * as React from 'react';
import { connect } from 'react-redux';
import FirebaseUtilities from './FirebaseUtilities';

const mapStateToProps = (state, ownProps) => {
    return {
        listItem: ownProps.listItem,
        index: ownProps.index
    }
}

const lineItemStyle = {
    width: "150px",
}

const buttonStyle = {
    float: "right"
}

const ListItemComponent = (props) => {
    return (
        <span>
            <li style={ lineItemStyle } className="mt-3" key={ props.index }>{ props.listItem.item.itemText }
                <button style={ buttonStyle } className="btn btn-sm btn-outline-danger ml-5" onClick={ () => FirebaseUtilities.deleteItemFromFirebaseList(props.listItem.key) }>x</button>
            </li>
        </span>
    )
}

export const ListItem = connect(
    mapStateToProps
)(ListItemComponent);