import React from 'react';
import './App.css';

class App extends React.Component {
  
  constructor(props) {
    super(props);

    this.state = {
      noiseProfile: false,
      soundInput: false,
      processed: false,
    };
  }

  fetchWrapper = async (METHOD, URL, DATA) => {

    const audioData = new FormData(); 
    audioData.append('file', DATA);

    fetch('http://localhost:5000/' + URL,
    {
      method: METHOD,
      headers: {
        "Accept": 'application/json'
      },
      body: audioData,
    }).then((response) => {
      return response.text();
    });
  }

  handleChange = async (event) => {
    event.preventDefault();
    let URL = '';
    if (event.target.name === 'noise_profile')
    {
      this.setState({ noiseProfile: event.target.files[0]});
      URL = 'noise_profile';
      
    }
    else{ 
      this.setState({ soundInput: event.target.files[0]});
      URL = 'sound_input';
    }
    await this.fetchWrapper('POST', URL, event.target.files[0]);
  }

  processInput = async (event) => {
    
  }

  render(){
    return (
      <div className="AppContainer" style={styles.appStyle}>
        <div style={styles.inputBox}>
          <form style={styles.formStyle} >
            
            <label> 
              Noise Profile
              <input type="file" name="noise_profile" onChange={this.handleChange}/>
            </label>
            <br />
            <br />
            <br />
            <label> 
              Actual Sound 
              <input type="file" name="sound_input" onChange={this.handleChange}/>
            </label>
            <button onClick={this.processInput}>Reduce Noise</button>
          </form>
        </div>
      </div>
    );  
  };
}

const styles = {
  appStyle : {
    backgroundColor: '#beebe9',
    display: 'flex',
    flex: 1,
    width: '100%',
    height: '100vh',
    justifyContent: 'center',
    alignItems: 'center'
  },
  inputBox : {
    width: '50%',
    height: '30vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fffdf9',
    borderRadius: '10%'
  },
  formStyle : {
    borderRadius: '10%',
    display: 'flex',
    height: '90%',
    width: '90%',
    alignItems: 'center',
    justifyContent: 'center',
  }

}

export default App;
