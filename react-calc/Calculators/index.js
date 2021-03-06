class Calculator extends React.Component {
  constructor() {
    super();

    this.state = {
      angleMode: 'DEG',
      history: [],
      expression: '',
      result: ''
    };
  }

  handleAngleModeChange = angleMode => {
    this.setState({
      angleMode: angleMode
    });
  };

  handleInputButtonClick = e => {
    e.preventDefault();
    this.setState({
      expression: this.state.expression + e.target.value.toString()
    });
  };

  render() {
    return (
      <div className="react-calc">
        <Display
          angleMode={this.state.angleMode}
          component={ReactMD.Paper}
          history={this.state.history}
          expression={this.state.expression}
          onAngleModeChange={this.handleAngleModeChange}
          result={this.state.result}
          zDepth={1}
        />
        <div className="react-calc-functions">
          <div className="react-calc-btn-panel react-calc__numbers">
            {
              [7, 8, 9,
               4, 5, 6,
               1, 2, 3].map(num => (
                <InputButton
                  key={`react-calc__number-${num}`}
                  onClick={this.handleInputButtonClick}
                  value={num}
                />
              ))
            }
            <InputButton onClick={this.handleInputButtonClick} value="." />
            <InputButton onClick={this.handleInputButtonClick} value={0} />
          </div>
          <div className="react-calc-btn-panel react-calc__basic-operators">
            {
              [{
                operator: 'delete',
                label: 'DEL'
              }, {
                operator: 'divide',
                label: <React.Fragment>&divide;</React.Fragment>
              }, {
                operator: 'multiply',
                label: <React.Fragment>&times;</React.Fragment>
              }, {
                operator: 'subtract',
                label: <React.Fragment>&minus;</React.Fragment>
              }, {
                operator: 'add',
                label: '+'
              }].map(({operator, label}) => (
                <InputButton>{label}</InputButton>
              ))
            }
          </div>
        </div>
      </div>
    );
  }
};
