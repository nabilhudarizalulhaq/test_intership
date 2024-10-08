import './App.css';

function App() {
  return (
    <div>
      <header>
        <div className="container mx-auto flex justify-between items-center">
          <img
            alt="Hello Fresh logo"
            className="h-12"
            src="https://storage.googleapis.com/a1aa/image/o8VTLUyFzALJA9KvaCrw7nrkHTg0k2Bwsc0XcLJm6uIlmK5E.jpg"
            width="100"
          />
          <nav className="flex ml-8">
            <a href="#">Discover</a>
            <a href="#">Watch</a>
            <a href="#">Detox</a>
          </nav>
        </div>
      </header>
      <main className="container mx-auto mt-8">
        <div className="card">
          <h1>The Decision Detox</h1>
          <p>starts tonight with your personalised meal plan.</p>
          <form className="mt-6 space-y-4">
            <div>
              <label htmlFor="people">How many people are you cooking for?</label>
              <select id="people">
                <option>2 people</option>
                <option>4 people</option>
                <option>6 people</option>
              </select>
            </div>
            <div>
              <label htmlFor="style">What's your cooking style?</label>
              <select id="style">
                <option>Low calorie</option>
                <option>Quick & easy</option>
                <option>Family friendly</option>
              </select>
            </div>
            <div>
              <label htmlFor="cuisine">Choose your favourite cuisine:</label>
              <select id="cuisine">
                <option>Choose...</option>
                <option>Italian</option>
                <option>Mexican</option>
                <option>Asian</option>
              </select>
            </div>
            <button type="submit">Generate plan</button>
          </form>
        </div>
      </main>
    </div>
  );
};

export default App;
