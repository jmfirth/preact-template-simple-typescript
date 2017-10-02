import './style.css';
import { Component, h } from 'preact';

interface AppProperties {}

interface AppState {}

export default class App extends Component<AppProperties, AppState> {
  render() {
    return (
      <div>
        <h1>Hello, World!</h1>
      </div>
    );
  }
}
