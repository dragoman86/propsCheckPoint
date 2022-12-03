import './App.css';
import Profile from './profile/Profile';


function App() {
    const eventHandler = (name) => alert (name)
  return (
    <div className="App">
      <h1>PROFILES</h1>
      <div className="Items">
      <Profile fullName="BENNA WALID" bio="bio I" profession="IT Support" eventHandler={eventHandler}>
      <img src={"/tof1.png"} alt="profile1" style={{width:"200px"}} />
      </Profile>
      <Profile fullName="BENOIT WALLACE" bio="bio II" profession="IT Network" eventHandler={eventHandler}>
      <img src={"/tof2.png"} alt="profile2" style={{width:"200px"}} />
      </Profile>
      <Profile fullName="VENISSA PARADISE" bio="bio III" profession="B.I" eventHandler={eventHandler}>
      <img src={"/tof3.png"} alt="profile3" style={{width:"200px"}} />
      </Profile>
      <Profile />
      </div>
    </div>
  );
}

export default App;
