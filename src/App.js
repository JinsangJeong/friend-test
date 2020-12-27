import React from "react";
import Start from "./Start";
import Quiz from "./Quiz";
import Score from "./Score";
import Message from "./Message";
import Ranking from "./Ranking";

import { withRouter } from "react-router";
import { Route, Switch } from "react-router-dom";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "키아누",
      page: "rank",
      scoreMsg: "이 정도면 아주 친한 친구 사이! 앞으로도 더 친하게 지내요! :)",
      list: [
        { question: "는 42살이다.", answer: "O" },
        { question: "는 LA에 산다.", answer: "O" },
        { question: "는 기혼이다.", answer: "O" },
        { question: "는 데뷔작은 스피드다.", answer: "O" },
        { question: "는 키가 190cm이다.", answer: "O" },
        { question: "는 한국에 온적이 있다.", answer: "O" },
      ],
      ranking: [
        { rank: 1, name: "임민영", message: "안녕 르탄아!" },
        { rank: 2, name: "임민영", message: "안녕 르탄아!" },
        { rank: 3, name: "임민영", message: "안녕 르탄아!" },
        { rank: 4, name: "임민영", message: "안녕 르탄아!" },
        { rank: 5, name: "임민영", message: "안녕 르탄아!" },
        { rank: 6, name: "임민영", message: "안녕 르탄아!" },
        { rank: 7, name: "임민영", message: "안녕 르탄아!" },
      ],
    };
  }

  render() {
    return (
      <div className="App">
        <Switch>
          <Route
            path="/"
            exact
            render={() => (
              <Start name={this.state.name} history={this.props.history} />
            )}
          />
          <Route
            path="/quiz"
            render={() => (
              <Quiz
                name={this.state.name}
                list={this.state.list}
                history={this.props.history}
              />
            )}
          />
          <Route
            path="/score"
            render={() => (
              <Score
                name={this.state.name}
                msg={this.state.scoreMsg}
                history={this.props.history}
              />
            )}
          />
          <Route
            path="/msg"
            render={() => <Message name={this.state.name} />}
          />
          <Route
            path="/rank"
            render={() => <Ranking rank={this.state.ranking} />}
          />
        </Switch>

        {/* {this.state.page === "start" && <Start name={this.state.name} />}
        {this.state.page === "quiz" && (
          <Quiz name={this.state.name} list={this.state.list} />
        )}
        {this.state.page === "score" && (
          <Score name={this.state.name} msg={this.state.scoreMsg} />
        )}
        {this.state.page === "msg" && <Message name={this.state.name} />}
        {this.state.page === "rank" && <Ranking rank={this.state.ranking} />} */}
      </div>
    );
  }
}

export default withRouter(App);
