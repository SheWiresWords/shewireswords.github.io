
import { Link } from "react-router-dom";

export default function APArchive() {
  return (
    <main>
      <h1>
        <div className="title-container">
          <div className="main-title">AP Archive</div>
          <p className="subtitle">Excel in the 2025 AP Computer Science curriculum :)</p>
        </div>
      </h1>

      {/* AP Computer Science A Section HERO*/}
      <div className="archive-section">
        <h2>AP Computer Science A</h2>
        <div className="h2_div">
          <p><b>The 2025 AP Computer Science A Curriculum</b> <br></br> <br></br> 
            The AP Computer Science curriculum has changed for 2025-2026! 
            Now, there is a 4-unit structure emphasizes integrated learning and practical application.
            <br></br> <br></br> 
            Some material in past FRQs won't be covered in the new format, but what we've provided below is still exceedingly useful for this class. Our resources are 
            specifically designed to help  students navigate the AP and succeed. 
            Start with our Topics Guide below, or jump right in to our practice problems.
          </p>
          <div className= "button_div">
            <Link to="https://apcentral.collegeboard.org/courses/ap-computer-science-a/future-revisions" className="projects-button" style={{margin:"1%", padding:"1rem"}}>
            Read About College Board's Changes</Link>
          </div>
        </div> 




        {/* AP Computer Science A GRID */}
        <div className="archive-grid">
          <div className="archive-tile placeholder-tile">
            <h3>📄 AP CSA Topics Guide</h3>
            <p>Focused study guide by unit and concept</p>
            <Link to="https://www.canva.com/design/DAGrY7bz1Ug/tSc2yaf8dCUaqXIzgoSNFQ/view?utm_content=DAGrY7bz1Ug&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=hb4252e6cce" className="coming-soon">
              Topic Guide
            </Link>
          </div>

          <div className="archive-tile placeholder-tile">
            <h3>📄 AP CSA Cram Sheet</h3>
            <p>Want an overview of everything?</p>
            <Link to="https://drive.google.com/file/d/1b7DzrunofibDN0brNk1lHzkMLAxWY51s/view" className="coming-soon">
              Cram Sheet
            </Link>
          </div>

          <div className="archive-tile placeholder-tile">
            <h3>📄 AP CSA Full Review Video</h3>
            <p>Want a video to describe key concepts?</p>
            <Link to="https://www.youtube.com/watch?v=JiMZr_YMpZ4&ab_channel=MathAce" className="coming-soon">
              Video Link
            </Link>
          </div>
          
          <div className="archive-tile placeholder-tile">
            <h3>📄 AP CSA 2025 FRQ</h3>
            <p>Free response questions from the most recent exam</p>
            <Link to="https://apcentral.collegeboard.org/media/pdf/ap25-frq-computer-science-a.pdf" className="coming-soon">
              2025 FRQ
            </Link>
          </div>
          <div className="archive-tile placeholder-tile">
            <h3>📄 AP CSA 2024 Scoring Guidelines</h3>
            <p>The College Board Rubric</p>
            <Link to="https://apcentral.collegeboard.org/media/pdf/ap24-sg-computer-science-a.pdf" className="coming-soon">
              2024 Scoring Guidelines
            </Link>
          </div>
          <div className="archive-tile placeholder-tile">
            <h3>📄 2024 AP CSA FRQ</h3>
            <p>Full question set from 2024</p>
            <Link to="https://apcentral.collegeboard.org/media/pdf/ap24-frq-comp-sci-a.pdf" className="coming-soon">
              2024 FRQ
            </Link>
          </div>

          <div className="archive-tile placeholder-tile">
            <h3>📄 2023 AP CSA FRQ</h3>
            <p>Full question set from 2023</p>
            <Link to="https://apcentral.collegeboard.org/media/pdf/ap23-frq-comp-sci-a.pdf" className="coming-soon">
              2023 FRQ
            </Link>
          </div>

          <div className="archive-tile placeholder-tile">
            <h3>📄 2022 AP CSA FRQ</h3>
            <p>Full question set from 2022</p>
            <Link to="https://apcentral.collegeboard.org/media/pdf/ap22-frq-computer-science-a.pdf" className="coming-soon">
              2022 FRQ
            </Link>
          </div>

          <div className="archive-tile placeholder-tile">
            <h3>📄 2021 AP CSA FRQ</h3>
            <p>Full question set from 2021</p>
            <Link to="https://apcentral.collegeboard.org/media/pdf/ap21-frq-computer-science-a.pdf" className="coming-soon">
              2021 FRQ
            </Link>
          </div>

          <div className="archive-tile placeholder-tile">
            <h3>📄 2020 AP CSA FRQ</h3>
            <p>Full question set from 2020</p>
            <Link to="https://apcentral.collegeboard.org/media/pdf/ap-2020exam-sample-questions-computer-science.pdf" className="coming-soon">
              2020 FRQ
            </Link>
          </div>

          <div className="archive-tile placeholder-tile">
            <h3>📄 2019 AP CSA FRQ</h3>
            <p>Full question set from 2019</p>
            <Link to="https://apcentral.collegeboard.org/media/pdf/ap19-frq-computer-science-a.pdf" className="coming-soon">
              2019 FRQ
            </Link>
          </div>

          <div className="archive-tile placeholder-tile">
            <h3>📄 2018 AP CSA FRQ</h3>
            <p>Full question set from 2018</p>
            <Link to="https://secure-media.collegeboard.org/apc/ap18-frq-computer-science-a.pdf" className="coming-soon">
              2018 FRQ
            </Link>
          </div>

          <div className="archive-tile placeholder-tile">
            <h3>📄 2017 AP CSA FRQ</h3>
            <p>Full question set from 2017</p>
            <Link to="https://apcentral.collegeboard.org/media/pdf/ap-computer-science-a-frq-2017.pdf" className="coming-soon">
              2017 FRQ
            </Link>
          </div>

          <div className="archive-tile placeholder-tile">
            <h3>📄 Additional Tests 2001-2016</h3>
            <p>Additional practice materials and mock exams</p>
            <span className="coming-soon">Coming Soon</span>
          </div>
        </div>
      </div>

      {/* AP Computer Science Principles Section */}
      {/* 
      <div className="archive-section">
        <h2>💻 AP Computer Science Principles</h2>
        <div className="archive-grid">
          <div className="archive-tile placeholder-tile">
            <h3>📄 AP CSP Topics Guide</h3>
            <p>Focused study guide by unit and concept</p>
            <Link to="https://linktr.ee/shewireswords" className="coming-soon">
              View Topics Guide
            </Link>

          </div>
          <div className="archive-tile placeholder-tile">
            <h3>📄 2025 AP CSP FRQ Set 1</h3>
            <p>Latest exam questions and performance task examples</p>
            <Link to="https://apcentral.collegeboard.org/media/pdf/ap25-frq-computer-science-principles-set-1.pdf" className="coming-soon">
              2025 FRQ Set 1
            </Link>
          </div>

          <div className="archive-tile placeholder-tile">
            <h3>📄 2025 AP CSP FRQ Set 2</h3>
            <p>Latest exam questions and performance task examples</p>
            <Link to="https://apcentral.collegeboard.org/media/pdf/ap25-frq-computer-science-principles-set-2.pdf" className="coming-soon">
              2025 FRQ Set 2
            </Link>
          </div>

          <div className="archive-tile placeholder-tile">
            <h3>📄 2024 AP CSP FRQ Set 1</h3>
            <p>Full exam FRQ from 2024</p>
            <Link to="https://apcentral.collegeboard.org/media/pdf/ap24-frq-csp-set-1.pdf" className="coming-soon">
              2024 FRQ Set 1
            </Link>
          </div>

          <div className="archive-tile placeholder-tile">
            <h3>📄 2024 AP CSP FRQ Set 2</h3>
            <p>Full exam FRQ from 2024</p>
            <Link to="https://apcentral.collegeboard.org/media/pdf/ap24-frq-csp-set-2.pdf" className="coming-soon">
              2024 FRQ Set 2
            </Link>
          </div>

          <div className="archive-tile placeholder-tile">
            <h3>📄 Scoring Guidelines 2024 AP CSP FRQ Set 1</h3>
            <p>Example 1: How the exam is scored</p>
            <Link to="https://apcentral.collegeboard.org/media/pdf/ap24-frq-csp-set-1.pdf" className="coming-soon">
              2024 FRQ
            </Link>
          </div>

          <div className="archive-tile placeholder-tile">
            <h3>📄 2019 AP CSP Exam</h3>
            <p>Explore and Create tasks with scoring examples</p>
            <Link to="https://apcentral.collegeboard.org/media/pdf/ap24-frq-csp-set-1.pdf" className="coming-soon">
              2024 FRQ
            </Link>
          </div>

          <div className="archive-tile placeholder-tile">
            <h3>📄 2018 AP CSP Exam</h3>
            <p>Complete assessment materials and guidelines</p>
            <Link to="https://apcentral.collegeboard.org/media/pdf/ap24-frq-csp-set-1.pdf" className="coming-soon">
              2024 FRQ
            </Link>
          </div>

          <div className="archive-tile placeholder-tile">
            <h3>📄 2017 AP CSP Exam</h3>
            <p>First year exam materials and task examples</p>
            <Link to="https://apcentral.collegeboard.org/media/pdf/ap24-frq-csp-set-1.pdf" className="coming-soon">
              2024 FRQ
            </Link>
          </div>

          <div className="archive-tile placeholder-tile">
            <h3>📄 Practice Tasks</h3>
            <p>Sample Create Performance Tasks and practice prompts</p>
            <span className="coming-soon">Coming Soon</span>
          </div>

          <div className="archive-tile placeholder-tile">
            <h3>📄 Big Ideas Review</h3>
            <p>Practice questions organized by the 5 Big Ideas</p>
            <span className="coming-soon">Coming Soon</span>
          </div>
        </div>
      </div>*/}
    </main>
  );
}
