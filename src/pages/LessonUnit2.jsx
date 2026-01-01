import { Link } from "react-router-dom";
import { useEffect } from "react";

export default function BuildAWebsite() {
  useEffect(() => {
    // Copy button functionality
    document.querySelectorAll('.copy').forEach(btn => {
      btn.addEventListener('click', () => {
        const id = btn.getAttribute('data-target');
        const el = document.getElementById(id);
        const text = el ? el.innerText : '';
        navigator.clipboard.writeText(text).then(() => {
          const old = btn.textContent;
          btn.textContent = 'Copied!';
          setTimeout(() => btn.textContent = old, 1200);
        });
      });
    });
  }, []);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Fira+Code:wght@400;600&family=Baloo+2:wght@600&display=swap');

        :root{
          --h:"Baloo 2",cursive;
          --b:"Fira Code",monospace;
          --ink:#55475B;
          --a:#68A691;
          --cream:#FFF8DC;
          --warm1:#f4978e;
          --warm2:#fbc687;
          --cool1:#BFD3C1;
          --cool2:#68A691;
          --slate:#2d3748;
          --mist:#e2e8f0;
        }

        *{margin:0;padding:0;box-sizing:border-box}
        body{
          font-family:var(--b);
          color:var(--ink);
          background:linear-gradient(135deg,var(--cool1) 0%,var(--cool2) 100%);
          line-height:1.65;
        }



        /* Hero */
        .hero{
          background:linear-gradient(135deg,var(--warm1) 0%,var(--warm2) 100%);
          padding:4rem 1rem 2.25rem;
          text-align:center;
        }
        .hero h1{font-family:var(--h);font-size:clamp(2.3rem,6vw,4.25rem)}
        .hero p{color:var(--cream);font-size:1.2rem;margin-top:.75rem}

        /* Wrapper */
        .wrap{
          padding:3rem 9vw;
          background:rgba(255,255,255,.25);
          backdrop-filter:saturate(120%) blur(2px);
        }


        h2,h3{font-family:var(--h);margin:2rem 0 1rem}
        h2{font-size:1.95rem}
        h3{font-size:1.45rem}

        .meta{list-style:none;text-align:left;margin:2rem auto 3rem;font-size:1.05rem}
        .meta li{display:inline-block;margin:.25rem .75rem;background:rgba(255,255,255,.45);padding:.4rem .7rem;border-radius:24px}

        .chips{display:flex;flex-wrap:wrap;gap:.5rem;margin:.8rem 0 0}
        .chip{padding:.25rem .55rem;border-radius:999px;background:#00000014;font-size:.85rem}

        /* Cards & tips */
        .card{
          border-left:6px solid var(--a);
          background:var(--cream);
          padding:1.2rem 1.5rem;
          margin:1.1rem 0 1.6rem;
          border-radius:8px;
          text-align: left; /* Align card text to the left */
        }
        .card ul{margin-left:1.1rem}
        .card ol{margin-left:1rem;list-style-position:inside}

        /* Code */
        pre{
          background:var(--slate);
          color:var(--mist);
          padding:1.15rem 1.15rem 1.15rem 1.15rem;
          border-radius:8px;
          overflow-x:auto;
          font-size:.95rem;
          margin:1.05rem 0 1.35rem;
          position:relative;
          text-align: left; /* Align code text to the left */
        }
        code{background:rgba(0,0,0,.1);padding:.12em .28em;border-radius:4px}

        .copy{
          position:absolute;top:8px;right:8px;
          font-size:.8rem;
          border:none;border-radius:16px;
          padding:.35rem .6rem;cursor:pointer;
          background:linear-gradient(135deg,#ff845a 0%,#ffa66a 100%);
          color:var(--cream);font-weight:700;
        }
        .copy:active{transform:translateY(1px)}

        /* Tables */
        table{border-collapse:collapse;width:100%;font-size:.95rem;margin:1.2rem 0}
        th,td{border:1px solid var(--a);padding:.65rem .75rem;vertical-align:top}
        th{background:var(--cool1);font-weight:600}

        .section-tag{
          display:inline-block;
          background:#00000014;
          color:#000;
          padding:.25rem .6rem;
          border-radius:6px;
          font-size:.85rem;
          margin-bottom:.35rem;
        }

        .button-box{text-align:center;margin:3rem 0 4rem}
        .btn{
          display:inline-block;padding:.9rem 2.4rem;border-radius:40px;
          background:linear-gradient(135deg,#ff845a 0%,#ffa66a 100%);
          color:var(--cream);font-weight:700;text-decoration:none;transition:transform .15s

        }
        .btn:hover{transform:translateY(-2px)}
        
        code{
          background: background:rgba(0,0,0,.1);
          color:#fffffa;
        }

        @media (max-width:720px){
          .wrap{padding:2rem 5vw}
        }
      `}</style>

      <header className="hero">
        <h1>Unit 2 — Selection &amp; Iteration</h1>
        <p>From boolean ideas to real control flow: <strong>if/else</strong>, <strong>while</strong>, <strong>for</strong>, and algorithm patterns.</p>
      </header>

      <main className="wrap">
        <ul className="meta">
          <li>AP Exam Weighting: <strong>25%–35%</strong></li>
          <li>Level: Beginner → Intermediate</li>
          <li>Language: Java (AP CSA style)</li>
        </ul>

        <div className="card">
          <p><strong>Learning Objectives</strong></p>
          <ul style={{textAlign: "left"}}>
            <li>Build and evaluate boolean expressions with relational and logical operators.</li>
            <li>Control program flow using one-way and two-way selection and by composing multiway decisions.</li>
            <li>Trace and construct loops that use counters, sentinels, and accumulators.</li>
            <li>Implement common algorithm patterns on numbers, arrays, and strings.</li>
            <li>Informally reason about statement execution counts in iterative code.</li>
          </ul>
        </div>

        <h2>2.1 Algorithms with Selection &amp; Repetition</h2>
        <div className="card">
          <p><strong>Algorithms</strong></p>
          <ul>
            <li>The building blocks of algorithms include <em>sequencing</em>, <em>selection</em>, and <em>repetition</em>.</li>
            <li>Algorithms can contain selection, through decision making, and repetition, via looping.</li>
            <li>Selection occurs when a choice of how the execution of an algorithm will proceed is based on a true or false decision.</li>
            <li>Repetition is when a process repeats itself until a desired outcome is reached.</li>
            <li>The order in which sequencing, selection, and repetition are used contributes to the outcome of the algorithm.</li>
          </ul>
        </div>

        <span className="section-tag"> Sequencing • Selection • Repetition</span>

        <div className="card">
          <p><strong>Algorithms</strong> are built from three basic structures: <em>sequencing</em> (do steps in order), <em>selection</em> (choose a path based on a true/false decision), and <em>repetition</em> (repeat a step while a condition holds).</p>
          <p><strong>Selection</strong> changes how execution proceeds by testing a boolean expression and running a specific block only when the test is true.</p>
          <p><strong>Repetition</strong> repeats a block until a goal is reached or a condition becomes false. The order in which you combine sequencing, selection, and repetition directly affects the algorithm's behavior and final result.</p>
        </div>

        <pre>
          <button className="copy" data-target="p1">Copy</button>
          <code id="p1">{`
// Selection + repetition in one example
int score = 87;
char grade;

if (score >= 90)      grade = 'A';
else if (score >= 80) grade = 'B';
else if (score >= 70) grade = 'C';
else                  grade = 'D';

int rounds = 0;
while (score < 100) {    // repetition
  score++;               // iterate toward a goal
  rounds++;
}
System.out.println("Final score: " + score + " after " + rounds + " rounds");
          `}</code>
        </pre>

        <h2>2.2 Boolean Expressions</h2>
        <div className="card">
          <p>A <strong>boolean expression</strong> evaluates to either <code>true</code> or <code>false</code>. You build them with <em>relational operators</em> that compare values. With primitive types (like <code>int</code> and <code>double</code>), the operators compare <em>actual values</em>. With reference types (like <code>String</code>), <code>==</code> and <code>!=</code> compare <em>object references</em> (whether two variables refer to the very same object).</p>
        </div>

        <table>
          <thead>
            <tr>
              <th>Relational Operator</th>
              <th>Meaning</th>
              <th>Example</th>
              <th>Result</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><code>==</code></td>
              <td>equal</td>
              <td><code>5 == 5</code></td>
              <td><code>true</code></td>
            </tr>
            <tr>
              <td><code>!=</code></td>
              <td>not equal</td>
              <td><code>7 != 3</code></td>
              <td><code>true</code></td>
            </tr>
            <tr>
              <td><code>&gt;</code>, <code>&lt;</code></td>
              <td>greater than, less than</td>
              <td><code>temp &lt; 32</code></td>
              <td><code>true</code> if below freezing</td>
            </tr>
            <tr>
              <td><code>&gt;=</code>, <code>&lt;=</code></td>
              <td>at least, at most</td>
              <td><code>x &gt;= y</code></td>
              <td>depends on values</td>
            </tr>
          </tbody>
        </table>

        <pre>
          <button className="copy" data-target="p2">Copy</button>
          <code id="p2">{`
// Primitives vs. references
int a = 5, b = 5;
System.out.println(a == b); // true (value comparison)

String s1 = new String("hi");
String s2 = new String("hi");
System.out.println(s1 == s2);      // false — different objects in memory
System.out.println(s1.equals(s2)); // true  — same sequence of characters
          `}</code>
        </pre>

        <div className="card">
          <p><strong>Operator precedence (highest → lowest)</strong>: <code>()</code>, unary <code>!</code>, relational <code>&lt; &lt;= &gt; &gt;=</code>, equality <code>== !=</code>, logical <code>&amp;&amp;</code>, then <code>||</code>. Use parentheses for clarity.</p>
          <p><strong>Pitfalls:</strong> using <code>==</code> to compare object content (should be <code>equals</code>), comparing <code>double</code>s without a tolerance, forgetting that <code>char</code> compares by Unicode value.</p>
        </div>

        <table>
          <thead>
            <tr>
              <th>Example</th>
              <th>Reasoning</th>
              <th>Result</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><code>!(3 &lt; 2) || 4 == 2 * 2</code></td>
              <td><code>!(false)</code> → <code>true</code>; and <code>4==4</code> → <code>true</code>; so <code>true || true</code></td>
              <td><code>true</code></td>
            </tr>
            <tr>
              <td><code>'B' &lt; 'a'</code></td>
              <td>Unicode values: 'B'(66) &lt; 'a'(97)</td>
              <td><code>true</code></td>
            </tr>
          </tbody>
        </table>

        <pre>
          <button className="copy" data-target="p2a">Copy</button>
          <code id="p2a">{`
// Safer floating-point comparison
boolean nearlyEqual(double x, double y, double eps){
  return Math.abs(x - y) < eps; // e.g., eps = 1e-9
}
          `}</code>
        </pre>

        <h2>2.3 If Statements</h2>
        <div className="card">
          <p>A <strong>selection statement</strong> changes the normal top-to-bottom flow. An <strong>if statement</strong> executes a block only when its boolean expression is <code>true</code>.</p>
          <p><strong>One-way selection</strong> (plain <code>if</code>) runs a segment of code under a condition; otherwise it skips it. A <strong>two-way selection</strong> (<code>if-else</code>) has two blocks: one for the true case and one for the false case—exactly one block runs.</p>
        </div>

        <pre>
          <button className="copy" data-target="p3">Copy</button>
          <code id="p3">{`
// One-way
if (balance < 0) {
  applyOverdraftFee();
}

// Two-way
if (age >= 16) {
  issueLearnersPermit();
} else {
  suggestBikeRoute();
}
          `}</code>
        </pre>

        <div className="card">
          <p><strong>Common mistakes:</strong></p>
          <ul>
            <li>Using separate <code>if</code> statements instead of a single <code>if / else if / else</code> ladder—multiple blocks may run.</li>
            <li>Forgetting braces when multiple statements should be controlled by the <code>if</code>.</li>
            <li>Overlapping ranges (e.g., testing <code>x &gt;= 90</code> then later <code>x &gt;= 80</code> without <code>else</code>).</li>
          </ul>
        </div>

        <pre>
          <button className="copy" data-target="p3a">Copy</button>
          <code id="p3a">{`
// Guard clause pattern reduces nesting
boolean enroll(Student s){
  if (s == null) return false;      // guard
  if (!s.hasPrereqs()) return false;// guard
  addToRoster(s);
  return true;
}
          `}</code>
        </pre>

        <h2>2.4 Nested if Statements &amp; Multiway Selection</h2>
        <div className="card">
          <p><strong>Nested</strong> <code>if</code> statements appear inside the body of other <code>if</code> or <code>else</code> statements. The inner test is evaluated only if the outer condition requires it.</p>
          <p>A <strong>multiway selection</strong> uses <code>if</code> / <code>else if</code> / <code>else</code> to choose <em>one</em> of many segments. Each subsequent test is checked only if all previous tests were false.</p>
        </div>

        <pre>
          <button className="copy" data-target="p4">Copy</button>
          <code id="p4">{`
// Nested + multiway
if (loggedIn) {
  if (isAdmin) {
    showAdminPanel();
  } else if (isTeacher) {
    showGradebook();
  } else {
    showStudentHome();
  }
} else {
  showLogin();
}
          `}</code>
        </pre>

        <div className="card">
          <p><strong>When to refactor:</strong> If several branches check the same variable, use a multiway ladder and order cases from most specific to least.</p>
        </div>

        <pre>
          <button className="copy" data-target="p4a">Copy</button>
          <code id="p4a">{`
// Consolidate overlapping checks
String classify(int temp){
  if (temp <= 32) return "freezing";
  else if (temp <= 50) return "chilly";
  else if (temp <= 75) return "mild";
  else return "hot";
}
          `}</code>
        </pre>

        <h2>2.5 Compound Boolean Expressions</h2>
        <table>
          <thead>
            <tr>
              <th>Logical Operator</th>
              <th>Meaning</th>
              <th>Precedence</th>
              <th>Notes</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><code>!</code> (not)</td>
              <td>flips truth value</td>
              <td>highest</td>
              <td>applies to one boolean</td>
            </tr>
            <tr>
              <td><code>&amp;&amp;</code> (and)</td>
              <td>true only if both sides are true</td>
              <td>middle</td>
              <td>short-circuits if left side is false</td>
            </tr>
            <tr>
              <td><code>||</code> (or)</td>
              <td>true if either side is true</td>
              <td>lowest</td>
              <td>short-circuits if left side is true</td>
            </tr>
          </tbody>
        </table>

        <div className="card">
          <p><strong>Short-circuit evaluation:</strong> with <code>&amp;&amp;</code> Java can decide the result after the first false; with <code>||</code> Java can decide after the first true. When the result is already known, the right-hand expression is not evaluated.</p>
        </div>

        <pre>
          <button className="copy" data-target="p5">Copy</button>
          <code id="p5">{`
// Safer division using short-circuiting
boolean safeDivide(int a, int b){
  return (b != 0) && ((a / b) >= 1); // if b == 0, right side never runs
}
          `}</code>
        </pre>

        <div className="card">
          <p><strong>Parentheses win.</strong> Even though <code>&amp;&amp;</code> binds tighter than <code>||</code>, add parentheses to highlight grouping.</p>
          <p><strong>Short-circuit tip:</strong> In <code>a &amp;&amp; b</code>, if <code>a</code> is <code>false</code>, <code>b</code> is skipped—put cheaper and safer tests first.</p>
        </div>

        <pre>
          <button className="copy" data-target="p5a">Copy</button>
          <code id="p5a">{`
// Order checks from safe -> expensive
boolean canAccess(User u){
  return u != null && u.isActive() && (u.isAdmin() || u.hasRole("teacher"));
}
          `}</code>
        </pre>

        <h2>2.6 Comparing Boolean Expressions</h2>
        <div className="card">
          <p>Two boolean expressions are <strong>equivalent</strong> if they have the same truth value for every possible input. You can prove equivalence with truth tables or by using <strong>De Morgan's laws</strong>.</p>
          <ul>
            <li><code>!(a &amp;&amp; b)</code> is equivalent to <code>!a || !b</code></li>
            <li><code>!(a || b)</code> is equivalent to <code>!a &amp;&amp; !b</code></li>
          </ul>
        </div>

        <pre>
          <button className="copy" data-target="p6">Copy</button>
          <code id="p6">{`
// De Morgan refactor
boolean outsideRange = !(x >= 1 && x <= 10);
// clearer and equivalent:
boolean outsideRange2 = (x < 1) || (x > 10);
          `}</code>
        </pre>

        <div className="card">
          <p><strong>Object References:</strong> Two different variables can point to the same object. Use <code>==</code> or <code>!=</code> when you specifically want to know if two references name the same object. Compare to <code>null</code> with <code>==</code> or <code>!=</code> to check whether a variable actually references an object.</p>
          <p>Many classes implement an <code>equals</code> method, which checks content equivalence based on the class's attributes. (Overriding <code>equals</code> is outside the AP CSA scope.)</p>
        </div>

        <pre>
          <button className="copy" data-target="p6b">Copy</button>
          <code id="p6b">{`
// Reference vs. content
String aName = "Ava";
String bName = aName;     // both reference the same String object in the pool
System.out.println(aName == bName);     // true (same reference)
System.out.println(aName.equals(bName));// true (same content)
          `}</code>
        </pre>

        <table>
          <thead>
            <tr>
              <th>Expression A</th>
              <th>Expression B (equivalent)</th>
              <th>Why</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><code>!(x &gt; 5 || y &lt; 0)</code></td>
              <td><code>x &lt;= 5 &amp;&amp; y &gt;= 0</code></td>
              <td>De Morgan + boundary reversal</td>
            </tr>
            <tr>
              <td><code>!(p &amp;&amp; !q)</code></td>
              <td><code>!p || q</code></td>
              <td>Distribute <code>!</code> and flip</td>
            </tr>
          </tbody>
        </table>

        <div className="card">
          <p><strong>Objects:</strong> Use <code>==</code> to ask "same object?" and <code>equals</code> to ask "same content?". Always check for <code>null</code> first.</p>
        </div>

        <pre>
          <button className="copy" data-target="p6c">Copy</button>
          <code id="p6c">{`
// Safe null-aware equals
boolean sameName(String a, String b){
  if (a == b) return true;     // identical refs or both null
  if (a == null || b == null) return false;
  return a.equals(b);
}
          `}</code>
        </pre>

        <h2>2.7 <code>while</code> Loops</h2>
        <div className="card">
          <p><strong>Iteration</strong> repeats a segment of code. In a <code>while</code> loop the boolean expression is evaluated <em>before</em> each iteration, including the first. If the expression is false at the start, the loop body does not execute at all.</p>
          <p><strong>Infinite loops</strong> occur when the condition never becomes false. <strong>Off-by-one errors</strong> occur when a loop executes one time too many or too few because of a boundary mistake.</p>
        </div>

        <pre>
          <button className="copy" data-target="p7">Copy</button>
          <code id="p7">{`
// Count digits with while
int n = Math.abs(2048);
int count = 0;
while (n > 0) {
  n /= 10;
  count++;
}
System.out.println(count + " digits"); // 4
          `}</code>
        </pre>

        <div className="card">
          <p><strong>Debug checklist for infinite loops:</strong></p>
          <ol>
            <li>Does a variable in the condition change inside the loop?</li>
            <li>Are you moving toward the stop boundary (increase/decrease correctly)?</li>
            <li>Is <code>&lt;</code> vs <code>&lt;=</code> correct?</li>
          </ol>
        </div>

        <pre>
          <button className="copy" data-target="p7a">Copy</button>
          <code id="p7a">{`
// Input validation loop
int age = read();
while (age < 0 || age > 120) {
  System.out.println("Try again:");
  age = read();
}
          `}</code>
        </pre>

        <h2>2.8 <code>for</code> Loops</h2>
        <div className="card">
          <p>A <code>for</code> loop header has three parts: <strong>initialization</strong>, <strong>boolean expression</strong>, and <strong>update</strong>. Initialization runs once. The boolean expression is checked before each iteration. The update runs after each pass through the body. A <code>for</code> loop can be rewritten as an equivalent <code>while</code> loop (and vice versa).</p>
        </div>

        <pre>
          <button className="copy" data-target="p8">Copy</button>
          <code id="p8">{`
// Sum of first n numbers (for)
int n = 5;
int sum = 0;
for (int i = 1; i <= n; i++) {
  sum += i;
}
System.out.println(sum); // 15

// Equivalent while
int i = 1, sum2 = 0;
while (i <= n) {
  sum2 += i;
  i++;
}
          `}</code>
        </pre>

        <table>
          <thead>
            <tr>
              <th>Goal</th>
              <th>Header</th>
              <th>Runs</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>0..n-1</td>
              <td><code>for (int i=0; i&lt;n; i++)</code></td>
              <td><code>n</code> times</td>
            </tr>
            <tr>
              <td>1..n</td>
              <td><code>for (int i=1; i&lt;=n; i++)</code></td>
              <td><code>n</code> times</td>
            </tr>
            <tr>
              <td>n..1</td>
              <td><code>for (int i=n; i&gt;=1; i--)</code></td>
              <td><code>n</code> times</td>
            </tr>
          </tbody>
        </table>

        <pre>
          <button className="copy" data-target="p8a">Copy</button>
          <code id="p8a">{`
// Iterate with index and value
int[] a = {4,7,1};
for (int i = 0; i < a.length; i++){
  System.out.println(i + ": " + a[i]);
}
          `}</code>
        </pre>

        <h2>2.9 Implementing Selection &amp; Iteration Algorithms</h2>
        <div className="card">
          <p>Standard patterns frequently appear and are excellent practice targets:</p>
          <ul>
            <li>Identify if an integer is (or is not) evenly divisible by another integer</li>
            <li>Isolate the individual digits in an integer</li>
            <li>Determine the frequency with which a condition is met</li>
            <li>Determine a minimum or maximum value</li>
            <li>Compute a sum or an average</li>
          </ul>
        </div>

        <table>
          <thead>
            <tr>
              <th>Task</th>
              <th>Pattern</th>
              <th>Snippet</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Divisibility</td>
              <td>use modulo; guard divide-by-zero</td>
              <td><code>boolean isDiv(int n,int d){"{"} return d!=0 &amp;&amp; n%d==0; {"}"}</code></td>
            </tr>
            <tr>
              <td>Digits</td>
              <td>mod 10 and divide by 10</td>
              <td><code>int d=n%10; n/=10;</code></td>
            </tr>
            <tr>
              <td>Min/Max</td>
              <td>track best seen so far</td>
              <td><code>if (v&lt;m) m=v;</code></td>
            </tr>
            <tr>
              <td>Sum/Average</td>
              <td>accumulate, divide at end</td>
              <td><code>sum+=v; avg = (double)sum/a.length;</code></td>
            </tr>
          </tbody>
        </table>

        <pre>
          <button className="copy" data-target="p9">Copy</button>
          <code id="p9">{`
// Ready-to-use helpers
boolean isDivisible(int n, int d){ return d != 0 && n % d == 0; }

int min(int[] a){
  int m = a[0];
  for (int i = 1; i < a.length; i++) if (a[i] < m) m = a[i];
  return m;
}

double average(int[] a){
  int s = 0;
  for (int v : a) s += v;
  return (double)s / a.length;
}
          `}</code>
        </pre>

        <pre>
          <button className="copy" data-target="p9a">Copy</button>
          <code id="p9a">{`
// Digit frequency (count how many times 'd' appears in n)
int digitFreq(int n, int d){
  n = Math.abs(n);
  int c = 0;
  if (n == 0 && d == 0) return 1;
  while (n > 0){
    if (n % 10 == d) c++;
    n /= 10;
  }
  return c;
}
          `}</code>
        </pre>

        <h2>2.10 Implementing String Algorithms</h2>
        <div className="card">
          <p>Common string problems include deciding whether a substring occurs, counting occurrences meeting some criterion, and building a new string by reversing or filtering characters.</p>
          <ul>
            <li>Find if one or more substrings have a particular property</li>
            <li>Determine the number of substrings that meet specific criteria</li>
            <li>Create a new string with the characters reversed</li>
          </ul>
        </div>

        <pre>
          <button className="copy" data-target="p10">Copy</button>
          <code id="p10">{`
// Substring search and small string utilities
boolean hasAt(String s, String sub){
  return s.indexOf(sub) != -1;
}

int countUpper(String s){
  int c = 0;
  for (int i = 0; i < s.length(); i++){
    char ch = s.charAt(i);
    if (ch >= 'A' && ch <= 'Z') c++;
  }
  return c;
}

String reverse(String s){
  String out = "";
  for (int i = s.length()-1; i >= 0; i--) out += s.charAt(i);
  return out;
}
          `}</code>
        </pre>

        <div className="card">
          <p><strong>Sliding window count:</strong> Count occurrences of a substring (overlapping allowed).</p>
        </div>

        <pre>
          <button className="copy" data-target="p10a">Copy</button>
          <code id="p10a">{`
int countSub(String s, String sub){
  if (sub.length() == 0) return 0;
  int c = 0;
  for (int i = 0; i + sub.length() <= s.length(); i++){
    if (s.substring(i, i + sub.length()).equals(sub)) c++;
  }
  return c;
}
          `}</code>
        </pre>

        <h2>2.11 Nested Iteration</h2>
        <div className="card">
          <p><strong>Nested iteration</strong> means a loop inside another loop. When a loop is nested, the inner loop must complete all of its iterations before the outer loop proceeds to its next iteration.</p>
        </div>

        <pre>
          <button className="copy" data-target="p11">Copy</button>
          <code id="p11">{`
// Print a simple star rectangle (r x c)
void stars(int r, int c){
  for (int i = 0; i < r; i++){
    for (int j = 0; j < c; j++){
      System.out.print("*");
    }
    System.out.println();
  }
}

// Summing a 2D array (matrix)
int sum(int[][] m){
  int s = 0;
  for (int i = 0; i < m.length; i++){
    for (int j = 0; j < m[i].length; j++){
      s += m[i][j];
    }
  }
  return s;
}
          `}</code>
        </pre>

        <pre>
          <button className="copy" data-target="p11a">Copy</button>
          <code id="p11a">{`
// Times table (1..n)
void timesTable(int n){
  for (int r = 1; r <= n; r++){
    for (int c = 1; c <= n; c++){
      System.out.printf("%4d", r * c);
    }
    System.out.println();
  }
}
          `}</code>
        </pre>

        <h2>2.12 Informal Run-Time Analysis</h2>
        <div className="card">
          <p>A <strong>statement execution count</strong> estimates how many times a statement runs in a program. You can often compute this informally by tracing loops and selections and counting how many times each block executes.</p>
        </div>

        <pre>
          <button className="copy" data-target="p12">Copy</button>
          <code id="p12">{`
// Counting iterations (informal analysis)

// Example 1: linear
for (int i = 0; i < n; i++) {   // 'print' runs ~n times
  System.out.print(".");
}

// Example 2: quadratic
for (int i = 0; i < n; i++) {   // outer: n times
  for (int j = 0; j < n; j++) { // inner: n times for each i
    System.out.print(".");      // runs ~n*n times total
  }
}
          `}</code>
        </pre>

        <div className="card">
          <p><strong>Quick Checks</strong></p>
          <ul>
            <li>Does any loop risk becoming infinite? (Will its condition eventually become false?)</li>
            <li>Are your boundary comparisons correct, or is there an off-by-one?</li>
            <li>Could a compound boolean use short-circuiting to avoid errors (like dividing by zero)?</li>
            <li>For strings/objects, are you using <code>equals</code> when you mean "same content"?</li>
          </ul>
        </div>

        <h3 style={{textAlign: 'center', marginTop: '2.5rem'}}>
          ✨ Next challenge: trace a real method and write the <em>execution count</em> for each statement.
        </h3>

        <div className="card">
          <p><strong>Rules of thumb:</strong> One loop over <code>n</code> items ≈ <code>n</code>. A loop inside a loop to <code>n</code> ≈ <code>n²</code>. A loop that halves work each time ≈ <code>log₂ n</code>.</p>
        </div>

        <pre>
          <button className="copy" data-target="p12a">Copy</button>
          <code id="p12a">{`
// Logarithmic example: keep halving until 0
int stepsToZero(int n){
  int steps = 0;
  while (n > 0){
    n /= 2;
    steps++;
  }
  return steps; // ~log2(original n)
}
          `}</code>
        </pre>
      </main>

      <div className="button-box">
        <a href="#top" className="btn">Back to Top</a>
      </div>
      
    </>
  );
}