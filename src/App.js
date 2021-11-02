import "./App.css";
import { useEffect, useState } from "react";
import { signInWithPopup, GoogleAuthProvider, signOut } from "@firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, db } from "./firebaseConfig";
import Nav from "./Nav";
import Article from "./Article";
import { fetchTitles } from "./articleService";


function SignIn() {
  function signInWithGoogle() {
    signInWithPopup(auth, new GoogleAuthProvider());
  }
  return <button onClick={signInWithGoogle}>Sign in with Google</button>;
}

function TodoList() {
  return <div>TodoList goes here</div>;
}

function App() {
  const [user] = useAuthState(auth);
  return (
    <div className="App">
      <header className="App-header"></header>
      <section>{user ? <TodoList /> : <SignIn />}</section>
    </div>
  );
}


export default function App() {
  useEffect(() => {
    setTitles(
      fetchTitles().map((article) => ({ id: article.id, title: article.title }))
    );
  }, []);

  const [user] = useAuthState(auth);
  const [titles, setTitles] = useState([]);
  const [articleId, setArticleId] = useState(null);
  return (
    <div className="App">
      <header>{!user ? <SignIn /> : <SignOut />}</header>
      {user && <Nav titles={titles} setArticleId={setArticleId} />
      {user && <Article articleId={articleId} />
    </div>
  );
}
