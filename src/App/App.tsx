import './App.scss';
import Card from '../Components/Card/Card'
import Form from '../Components/Form/Form'

function App() {

  return (
    <div className="app">
      <div className="app-wrapper">
      <section className="app-description">
        <article>
        <h1>Learn to code by watching others</h1>
        <p>
          See how experienced developers solve problems in real time. Watching
          scripted tutorials is great, but understanding how developers think is invaluable.
        </p>
        </article>
      </section>
      <section className="app-form">
        <Card type={"accent"}>
          <p className="form-header"><b>Try it for free for 7 days</b> then $20/mo. thereafter</p>
        </Card>
        <Form/>
      </section>
      </div>
    </div>
  );
}


export default App;
