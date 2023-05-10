import React from 'react';

class NumberRow extends React.Component {

    render() {
        const {isSelected, isLocked} = this.props;
        const { number } = this.props.number;

        return (
            <tr>
                <td>{number}</td>
                <td>
                    <button className={`btn ${isSelected ? 'btn-danger' : 'btn-primary'}`} disabled={isLocked} onClick={this.props.onNumberSelectClick}>
                        {isSelected ? 'Remove from Selected' : 'Add to Selected'}
                    </button>
                </td>
            </tr>
        )
    }

}

export default NumberRow;