import * as React from 'react';
import { connect } from 'react-redux';
import { ListItem } from './ListItem';

const mapStateToProps = (state, ownProps) => ({
    list: state.listReducer.list
});

const ListComponent = (props) => {
    return(
        <div>
            <ul>
                { props.list.map((listItem, index) => <ListItem listItem={listItem} index={index} />) }
            </ul>
        </div>
    )
}

export const List = connect(
    mapStateToProps
)(ListComponent);