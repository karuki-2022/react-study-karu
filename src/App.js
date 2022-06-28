import { useCallback, useState } from "react";
import { BrowserRouter, Link } from "react-router-dom";
import { Router } from "./router/Router";
import { ChildArea } from "./ChildArea";
import "./styles.css";
import { CssModules } from "./components/CssModules";

export default function App() {
  // const [text, setText] = useState(``);
  // const [open, setOpen] = useState(false);

  // const onChangeText = (e) => setText(e.target.value);

  // const onClickOpen = () => setOpen(!open);

  // const onClickClose = useCallback(() => setOpen(false), [setOpen]);

  return (
    <BrowserRouter>
      <div className="App">
        <Link to="/">Home</Link>
        <br />
        <Link to="/page1">Page1</Link>
        <br />
        <Link to="/page2">Page2</Link>
        {/* <CssModules />
        <input value={text} onChange={onChangeText} />
        <br />
        <br />
        <button onClick={onClickOpen}>表示</button>
        <ChildArea open={open} onClickClose={onClickClose} /> */}
      </div>
      <Router />
    </BrowserRouter>
  );
}
