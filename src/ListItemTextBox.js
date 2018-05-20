import * as React from 'react';
import { connect } from 'react-redux';
import { updateTextBox } from './Actions';
import { addToList } from './Actions';

const mapStateToProps = (state, ownProps) => {
    return {
        textBoxText: state.listReducer.textBoxText
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        updateTextBox: (event) => dispatch(updateTextBox(event.target.value)),
        addToList: (event) => dispatch(addToList(event))
    }
}

const ListItemTextBoxComponent = (props) => {
    return(
        <div>
            <form>
                <div className="form-group mt-3">
                    <label htmlFor="listItemTextInput">List Item</label>
                    <input type="text"
                        id="listItemTextInput"
                        className="form-control"
                        onChange={props.updateTextBox} 
                        value={props.textBoxText} />
                </div>
                <input type="button" value="Add" className="btn btn-primary" onClick={props.addToList} />
            </form>
        </div>
    )
}

export const ListItemTextBox = connect(
    mapStateToProps,
    mapDispatchToProps
)(ListItemTextBoxComponent);