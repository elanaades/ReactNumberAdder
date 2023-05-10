import React from 'react';

class SelectedNumberRow extends React.Component {

    render() {
        const { isLocked} = this.props;
        const { number } = this.props.number;

        return (
            <li className="list-group-item">
                {number}
                <button className={`btn ${isLocked ? 'btn-danger' : 'btn-primary'}`} onClick={this.props.onLockClick}>
                    {isLocked ? 'unlock' : 'lock'}
                </button>
            </li>
        )
    }
}
export default SelectedNumberRow;