import React from 'react';
import './App.css';

class App extends React.Component {
  
  sendInputToServer = async (event) => {
    event.preventDefault();
    console.log('event.target.name', event.target.name);
    const audioData = new FormData();
    audioData.append('file', event.target.files[0]);
    fetch('http://localhost:5000/' + event.target.name,
    {
      method: 'POST',
      headers: {
        "Accept": 'application/json'
      },
      body: audioData,
    }).then((response) => {
      return response.text();
    });
    
  }

  render(){
    return (
      <div className="AppContainer" style={styles.appStyle}>
        <div style={styles.mainContainer}>
          <form>
            
            <label> 
              Noise Profile
              <input type="file" name="noise_profile" onChange={this.sendInputToServer}/>
            </label>
            <br />
            <br />
            <br />
            <label> 
              Actual Sound 
              <input type="file" name="sound_input" onChange={this.sendInputToServer}/>
            </label>
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
  mainContainer : {
    display: 'flex',
    width: '30%',
    height: '30vh',
    backgroundColor: '#fffdf9',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: '10%'
  }
}

export default App;
