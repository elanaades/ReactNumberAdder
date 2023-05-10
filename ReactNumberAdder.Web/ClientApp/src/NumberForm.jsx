import React from 'react';

class NumberForm extends React.Component {
    render() {

        const { onAddClicked, onSubmitClick, onClearClicked, isValid, currentMin, currentMax } = this.props;

        return (<>
            <div className="container mt-5">
                <div className='row bg-dark p-4 rounded mb-3'>
                    <div><h2 style={{ color: "white" }}>Random Number Generator</h2></div>
                    <div><p style={{ color: "white" }}>Pick two numbers and then generate random numbers in that range.</p></div>

                    <div className='col-md-2'>
                        <input value={this.props.currentMin} onChange={this.props.onMinChange} type="text" placeholder="Enter a Number" className="form-control" />
                    </div>
                    <div className='col-md-2'>
                        <input value={this.props.currentMax} onChange={this.props.onMaxChange} type="text" placeholder="Enter a Number" className="form-control" />
                    </div>
                    <div className='col-md-2'>
                        <button className='btn btn-success' onClick={onAddClicked}>Add a Number</button>
                    </div>
                    <div className='col-md-2'>
                        <button className='btn btn-warning' onClick={onClearClicked}>Clear Table</button>
                    </div>
                    <div style={{ marginTop: "20px", color: "white" }}>
                        {isValid ? <p>*Currently generating numbers between {currentMin} and {currentMax}. You may update the numbers at any time.</p> : ''}
                    </div>
                </div>
            </div>

        </>);
    }
}

export default NumberForm;