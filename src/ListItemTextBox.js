import * as React from 'react';
import { connect } from 'react-redux';
import { updateTextBox } from './Actions';
import { addToList } from './Actions';
import FirebaseUtilities from './FirebaseUtilities';

const mapStateToProps = (state, ownProps) => {
    return {
        textBoxText: state.listReducer.textBoxText
    }
}

class ListItemTextBoxComponent extends React.Component {
    addItemToFirebaseList = () => {
        FirebaseUtilities.addItemToFirebaseList(this.props.textBoxText)
    }
    render() {
        return(
            <div>
                <form>
                    <div className="form-group mt-3">
                        <label htmlFor="listItemTextInput">List Item</label>
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
    mapStateToProps
)(ListItemTextBoxComponent);