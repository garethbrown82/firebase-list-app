import * as React from 'react';
import { connect } from 'react-redux';
import { updateTextBox } from './Actions';
import FirebaseUtilities from './FirebaseUtilities';

const mapStateToProps = (state, ownProps) => {
    return {
        textBoxText: state.listReducer.textBoxText
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        updateTextBox: (event) => dispatch(updateTextBox(event.target.value))
    }
}

class ListItemTextBoxComponent extends React.Component {
    addItemToFirebaseList = (event) => {
        event.preventDefault();
        FirebaseUtilities.addItemToFirebaseList(this.props.textBoxText);
    }

    render() {
        return(
            <div className="mt-5">
                <form>
                    <div className="form-group mt-3">
                        <label htmlFor="listItemTextInput"><h4>Add item</h4></label>
                        <input type="text"
                            id="listItemTextInput"
                            className="form-control"
                            onChange={this.props.updateTextBox} 
                            value={this.props.textBoxText} />
                    </div>
                    <input type="button" 
                        value="Add"
                        className="btn btn-primary"
                        onClick={this.addItemToFirebaseList} />
                </form>
            </div>
        );
    };
};

export const ListItemTextBox = connect(
    mapStateToProps,
    mapDispatchToProps
)(ListItemTextBoxComponent);