import React from 'react';
import { produce } from 'immer';
import { v4 as uuidv4 } from 'uuid';
import NumberForm from './NumberForm';
import NumberRow from './NumberRow';
import SelectedNumberRow from './SelectedNumberRow';

class NumberAdder extends React.Component {

    state = {
        numbers: [],
        selectedNumbers: [],
        lockedNumbers: [],
        currentMin: '',
        currentMax: ''
    }

    onSubmitClick = () => {
        
    }

    generateRandomNumber = () => {
        const { currentMax, currentMin } = this.state;
        const min = parseInt(currentMin);
        const max = parseInt(currentMax);

        console.log(min, max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    onMinChange = (e) => {
        this.setState({ currentMin: e.target.value });
    }

    onMaxChange = (e) => {
        this.setState({ currentMax: e.target.value });
    }

    onAddClicked = () => {
        const { numbers } = this.state;
        const nextState = produce(this.state, draftState => {
            draftState.numbers.push({ number: this.generateRandomNumber(), id: uuidv4() });
        });
        this.setState(nextState);
    }

    onClearClicked = () => {
        const nextState = produce(this.state, draftState => {
            draftState.numbers = [];
            draftState.selectedNumbers = [];
            draftState.lockedNumbers = [];
            draftState.currentMin = '';
            draftState.currentMax = '';
        });
        this.setState(nextState);
    }

    onNumberSelectClick = (n) => {
        const { selectedNumbers } = this.state;
        if (selectedNumbers.includes(n)) {
            this.setState({ selectedNumbers: selectedNumbers.filter(i => i.id !== n.id) });
        }
        else {
            this.setState({ selectedNumbers: [...selectedNumbers, n] });
        }
    }

    onLockClick = (n) => {
        const { lockedNumbers } = this.state;
        if (lockedNumbers.includes(n)) {
            this.setState({ lockedNumbers: lockedNumbers.filter(i => i.id !== n.id) });
        }
        else {
            this.setState({ lockedNumbers: [...lockedNumbers, n] })
        }
    }


    render() {
        const { numbers, selectedNumbers, lockedNumbers, currentMin, currentMax } = this.state;

        return (
            <div className='container mt-5'>

                <NumberForm
                    onAddClicked={this.onAddClicked}
                    onMinChange={this.onMinChange}
                    onMaxChange={this.onMaxChange}
                    onSubmitClick={this.onSubmitClick}
                    onClearClicked={this.onClearClicked}
                    isValid={currentMin && currentMax }
                    currentMin={currentMin}
                    currentMax={currentMax}
                />



                <div style={{ maxHeight: "500px", overflowY: "scroll" }}>
                    <table className="table table-hover table-striped table-bordered" style={{ marginTop: '30px' }}>
                        <thead>
                            <tr>
                                <th style={{ width: "25%" }}>Number</th>
                                <th>Add/Remove</th>
                            </tr>
                        </thead>
                        <tbody>
                            {numbers.map((n, i) => <NumberRow
                                key={n.id}
                                number={n}
                                onNumberSelectClick={() => this.onNumberSelectClick(n)}
                                isSelected={selectedNumbers.includes(n)}
                                isLocked={lockedNumbers.includes(n)}
                            />)}
                        </tbody>
                    </table>
                </div>

                {selectedNumbers.length !== 0 &&
                    <div className='row pp-5 rounded' style={{ backgroundColor: "#ebeef2", padding: "50px" }}>
                        <div>
                            <h3>Selected Numbers</h3>
                            <div>
                                <ul className="list-group">
                                    {selectedNumbers.map((n, i) => <SelectedNumberRow
                                        key={n.id}
                                        number={n}
                                        onLockClick={() => this.onLockClick(n)}
                                        isLocked={lockedNumbers.includes(n)}
                                    />)}
                                </ul>
                            </div>
                        </div>
                    </div>}


            </div>)
    }
}

export default NumberAdder;