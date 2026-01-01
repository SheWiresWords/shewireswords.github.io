import { Link } from "react-router-dom";

export default function LearnHTML() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Fira+Code:wght@400;600&family=Baloo+2:wght@600&display=swap');
        :root {
          --h: "Baloo 2", cursive;
          --b: "Fira Code", monospace;
          --ink: #55475B;
          --a: #68A691;
          --cream: #FFF8DC;
        }
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }
        body {
          font-family: var(--b);
          color: var(--ink);
          background: linear-gradient(135deg, #BFD3C1 0%, #68A691 100%);
          line-height: 1.6;
        }
        .hero {
          background: linear-gradient(135deg, #f4978e 0%, #fbc687 100%);
          padding: 4rem 1rem 2.25rem;
          text-align: center;
        }
        .hero h1 {
          font-family: var(--h);
          font-size: clamp(2.5rem, 6vw, 4.5rem);
        }
        .hero p {
          color: var(--cream);
          font-size: 1.25rem;
          margin-top: 0.75rem;
        }
        .wrap {
          padding: 3rem 9vw;
          background: rgba(255, 255, 255, 0.25);
          backdrop-filter: saturate(120%) blur(2px);
        }
        h2, h3 {
          font-family: var(--h);
          margin: 2rem 0 1rem;
        }
        h2 {
          font-size: 1.9rem;
        }
        h3 {
          font-size: 1.45rem;
        }
        .meta {
          list-style: none;
          text-align: center;
          margin: 2rem auto 3rem;
          font-size: 1.15rem;
        }
        .card {
          border-left: 6px solid var(--a);
          background: var(--cream);
          padding: 1.2rem 1.5rem;
          margin: 1.6rem 0;
        }
        .card ol {
          margin-left: 1rem;
          list-style-position: inside;
        }
        pre {
          background: #2d3748;
          color: #e2e8f0;
          padding: 1.15rem;
          border-radius: 8px;
          overflow-x: auto;
          font-size: 0.95rem;
          margin: 1.35rem 0;
        }
        table {
          border-collapse: collapse;
          width: 100%;
          font-size: 0.95rem;
          margin: 1.4rem 0;
        }
        th, td {
          border: 1px solid var(--a);
          padding: 0.65rem 0.75rem;
          vertical-align: top;
        }
        th {
          background: #BFD3C1;
          font-weight: 600;
        }
        code {
          background: rgba(0, 0, 0, 0.1);
          padding: 0.12em 0.28em;
          border-radius: 4px;
        }
        .button-box {
          text-align: center;
          margin: 3rem 0 4rem;
        }
        .btn {
          display: inline-block;
          padding: 0.9rem 2.4rem;
          border-radius: 40px;
          background: linear-gradient(135deg, #ff845a 0%, #ffa66a 100%);
          color: var(--cream);
          font-weight: 700;
          text-decoration: none;
          transition: transform 0.15s;
        }
        .btn:hover {
          transform: translateY(-2px);
        }
      `}</style>

      <header className="hero">
        <h1>Beginner HTML & The Bang Shortcut <code>!</code></h1>
        <p>From blank page to complete <strong>HTML</strong> scaffold in two buttons</p>
      </header>

      <main className="wrap">
        <ul className="meta">
          <li>🕐 Duration 15 min</li>
          <li>Level Absolute Beginner</li>
          <li>Tools VS Code + Emmet extension</li>
        </ul>

        {/* 1. install */}
        <h2>1&nbsp;&nbsp;Install Emmet in VS Code</h2>
        <div className="card">
          <ol>
            <li>Open Extensions (<kbd>Ctrl + Shift + X</kbd>).</li>
            <li>Search <strong>Emmet</strong> &mdash; it's built‑in, just enable if it's disabled.</li>
            <li>Reload VS Code (<kbd>⌘/Ctrl</kbd> + <kbd>R</kbd>) so changes stick.</li>
            <li><em>Optional:</em> install "Live Server" for auto‑refresh while you code.</li>
          </ol>
        </div>

        {/* 2. bang */}
        <h2>2&nbsp;&nbsp;Type <code>!</code> then Tab</h2>
        <p>Inside a new <code>.html</code> file, hit the exclamation mark and expand it &mdash; Emmet delivers:</p>

        <pre>{`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>

</body>
</html>`}</pre>

        {/* 3. explanation table */}
        <h2>3&nbsp;&nbsp;Anatomy of the Boiler‑plate</h2>
        <table>
          <tbody>
            <tr>
              <th>Line</th>
              <th>Why It Exists</th>
            </tr>
            <tr>
              <td><code>&lt;!DOCTYPE html&gt;</code></td>
              <td>Signals modern <strong>HTML 5</strong>; browsers drop their 1990s quirks.</td>
            </tr>
            <tr>
              <td><code>&lt;html lang="en"&gt;</code></td>
              <td>Top wrapper + language cue for accessibility and SEO.</td>
            </tr>
            <tr>
              <td><code>&lt;meta charset="UTF‑8"&gt;</code></td>
              <td>Universal character set &mdash; handles emoji and every alphabet.</td>
            </tr>
            <tr>
              <td><code>&lt;meta http‑equiv="X‑UA‑Compatible"&gt;</code></td>
              <td>Legacy line that pushes Internet Explorer into its latest rendering mode.</td>
            </tr>
            <tr>
              <td><code>&lt;meta name="viewport" …&gt;</code></td>
              <td>Key to responsive design: tells phones to use their real width.</td>
            </tr>
            <tr>
              <td><code>&lt;title&gt;Document&lt;/title&gt;</code></td>
              <td>Browser‑tab text and search‑engine headline &mdash; rename it!</td>
            </tr>
            <tr>
              <td><code>&lt;body&gt;…&lt;/body&gt;</code></td>
              <td>Everything a visitor can actually see or click lives here.</td>
            </tr>
          </tbody>
        </table>

        {/* 4. quick tweaks */}
        <h2>4&nbsp;&nbsp;Quick Tweaks</h2>
        <ul>
          <li>Link your CSS right under <code>&lt;title&gt;</code>.</li>
          <li>Pick the correct <code>lang</code> code for your audience.</li>
          <li>Add a favicon for instant brand recognition.</li>
        </ul>

        {/* 5. motivation */}
        <h2>5&nbsp;&nbsp;Why Use Emmet First</h2>
        <div className="card">
          <p><strong>🚀 Speed:</strong> Scaffold pages in seconds.</p>
          <p><strong>🧹 Accuracy:</strong> Emmet writes the closing tags so you don't have to.</p>
          <p><strong>🧠 Learning:</strong> Seeing the proper structure every time bakes it into memory.</p>
        </div>

        <h3 style={{textAlign: 'center', marginTop: '3rem'}}>
          ✨ Next: build a header with <code>header&gt;h1+nav&gt;ul&gt;li*3&gt;a</code>
        </h3>
      </main>

      <div className="button-box">
        <Link to="/projects" className="btn">See More Projects</Link>
      </div>
    </>
  );
}