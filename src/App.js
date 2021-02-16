import "./App.css";

import { UserList } from "./components";

function App() {
  return (
    <div className="App">
      <main>
        <UserList />
        CHILD_FROM_PARENT CHANGES RIGHT HERE BABYYYY

        CHILD_FROM_CHILD CHANGES HERE!!!
      </main>
    </div>
  );
}

export default App;
