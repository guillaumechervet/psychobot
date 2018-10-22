import React from 'react';
import doctor from './doctor';
import './App.css';

const Table = props => {
  const dialogueItems = props.dialogues.map(dialogue => (
    <tr>
      <td className="who"><span > {dialogue.who}</span></td>
      <td>{dialogue.message}</td>
    </tr>
  ));
  return <table className="App-Dialogues">{dialogueItems}</table>;
};

class App extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    const dialogues = [];
    dialogues.push(
      doctor.listen(
        [],
        { firstName: 'guillaume', lastName: 'chervet' },
        new Date()
      )
    );
    this.state = {
      value: 'valeur',
      dialogues: dialogues
    };
  }
  handleChange(event) {
    event.preventDefault();
    this.setState({ value: event.target.value });
  }
  handleSubmit(event) {
    event.preventDefault();
    const message = {
      date: new Date(),
      message: this.state.value,
      who: 'you'
    };
    this.setState({
      value: '',
      dialogues: [...this.state.dialogues, message]
    });
  }
  tick() {
    var response = doctor.listen(
      this.state.dialogues,
      { firstName: 'guillaume', lastName: 'chervet' },
      new Date()
    );
    if (response) {
      var synth = window.speechSynthesis;
      var utterThis = new SpeechSynthesisUtterance(response.message);
      synth.speak(utterThis);
      this.setState({ dialogues: [...this.state.dialogues, response] });
    }
  }
  componentDidMount() {
    this.timerID = setInterval(() => this.tick(), 10000);
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img
            src="https://media-cdn.tripadvisor.com/media/photo-s/05/da/b0/74/villa-zin.jpg"
            className="App-logo"
            alt="logo"
          />
        </header>
        <Table dialogues={this.state.dialogues} />
        <form class="App-Send" onSubmit={this.handleSubmit}>
          <input
            type="text"
            value={this.state.value}
            onChange={this.handleChange}
          />
          <button>Send</button>
        </form>
      </div>
    );
  }
}

export default App;
