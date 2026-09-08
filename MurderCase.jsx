import React, { useState } from "react";

export default function MurderCase() {
  const [activeFile, setActiveFile] = useState("cover");
  const [notes, setNotes] = useState("");
  const [answer, setAnswer] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [unlocked, setUnlocked] = useState(false);

  const files = [
    { id: "cover", name: "CASE_017", type: "CASE FILE" },
    { id: "overview", name: "01_CASE_OVERVIEW", type: "REPORT" },
    { id: "victim", name: "02_VICTIM", type: "PERSONNEL" },
    { id: "suspects", name: "03_SUSPECTS", type: "PERSONNEL" },
    { id: "timeline", name: "04_TIMELINE", type: "TIMELINE" },
    { id: "statement1", name: "05_STATEMENT_A", type: "STATEMENT" },
    { id: "statement2", name: "06_STATEMENT_B", type: "STATEMENT" },
    { id: "statement3", name: "07_STATEMENT_C", type: "STATEMENT" },
    { id: "photo1", name: "08_EVIDENCE_01", type: "PHOTOGRAPH" },
    { id: "photo2", name: "09_EVIDENCE_02", type: "PHOTOGRAPH" },
    { id: "medical", name: "10_MEDICAL_REPORT", type: "REPORT" },
    { id: "letter", name: "11_RECOVERED_LETTER", type: "DOCUMENT" },
    { id: "phone", name: "12_PHONE_RECORD", type: "RECORD" },
    { id: "redacted", name: "13_REDACTED", type: "CLASSIFIED" },
    { id: "notes", name: "14_INVESTIGATOR_NOTES", type: "NOTES" },
    { id: "answer", name: "15_FINAL_CONCLUSION", type: "SUBMISSION" },
  ];

  const suspects = [
    {
      name: "ELIAS VALE",
      age: "42",
      occupation: "Architect",
      relation: "Business partner",
      description:
        "Worked with the victim for eleven years. Their partnership had become increasingly hostile during the final six months.",
      alibi:
        "Claims he remained at home between 20:00 and 23:30. States he did not leave the property.",
      detail:
        "Was aware of the victim's plans to sell the building.",
    },
    {
      name: "MARA BELL",
      age: "35",
      occupation: "Restoration specialist",
      relation: "Former partner",
      description:
        "Ended her relationship with the victim approximately three months before the incident.",
      alibi:
        "Claims she was working alone in her studio until shortly after midnight.",
      detail:
        "Possessed a key to the victim's property.",
    },
    {
      name: "JONATHAN REED",
      age: "51",
      occupation: "Property developer",
      relation: "Client",
      description:
        "Had been negotiating the purchase of the victim's property. The negotiations collapsed two days before the death.",
      alibi:
        "Claims he was dining at the Ashford Hotel until approximately 22:15.",
      detail:
        "Had threatened legal action against the victim.",
    },
    {
      name: "NORA VALE",
      age: "27",
      occupation: "Graduate researcher",
      relation: "Niece",
      description:
        "The victim's niece. She had been staying in the guest room while completing research nearby.",
      alibi:
        "Claims she left the property at 19:40 and returned after 00:30.",
      detail:
        "Had recently discovered something inside the victim's study.",
    },
  ];

  const openFile = (id) => {
    if (id === "redacted" && !unlocked) return;
    setActiveFile(id);
    setSubmitted(false);
  };

  const renderPhoto = (number) => {
    if (number === 1) {
      return (
        <div className="crime-photo">
          <svg viewBox="0 0 700 430">
            <rect width="700" height="430" fill="#d7d7d7" />
            <rect x="0" y="300" width="700" height="130" fill="#b5b5b5" />
            <rect x="80" y="50" width="220" height="250" fill="#eeeeee" stroke="#333" strokeWidth="5" />
            <rect x="105" y="75" width="170" height="200" fill="#222" />
            <line x1="190" y1="75" x2="190" y2="275" stroke="#777" strokeWidth="4" />
            <line x1="105" y1="175" x2="275" y2="175" stroke="#777" strokeWidth="4" />
            <rect x="390" y="250" width="170" height="18" fill="#444" />
            <rect x="420" y="268" width="20" height="75" fill="#333" />
            <rect x="510" y="268" width="20" height="75" fill="#333" />
            <path
              d="M365 305 C390 270 450 275 475 310 C450 335 395 340 365 305Z"
              fill="#444"
            />
            <circle cx="420" cy="300" r="17" fill="#111" />
            <text x="25" y="405" fontSize="18" fill="#111">
              EVIDENCE 01 / STUDY / 23:48
            </text>
          </svg>
        </div>
      );
    }

    return (
      <div className="crime-photo">
        <svg viewBox="0 0 700 430">
          <rect width="700" height="430" fill="#cfcfcf" />
          <rect x="80" y="45" width="540" height="320" fill="#e7e7e7" stroke="#222" strokeWidth="5" />
          <rect x="120" y="85" width="460" height="235" fill="#f4f4f4" stroke="#777" strokeWidth="2" />
          <line x1="145" y1="120" x2="450" y2="120" stroke="#444" strokeWidth="6" />
          <line x1="145" y1="150" x2="520" y2="150" stroke="#777" strokeWidth="4" />
          <line x1="145" y1="180" x2="490" y2="180" stroke="#777" strokeWidth="4" />
          <line x1="145" y1="210" x2="515" y2="210" stroke="#777" strokeWidth="4" />
          <line x1="145" y1="240" x2="420" y2="240" stroke="#777" strokeWidth="4" />
          <rect x="360" y="95" width="160" height="95" fill="#bbb" />
          <line x1="370" y1="105" x2="510" y2="180" stroke="#222" strokeWidth="18" />
          <line x1="510" y1="105" x2="370" y2="180" stroke="#222" strokeWidth="18" />
          <text x="25" y="405" fontSize="18" fill="#111">
            EVIDENCE 02 / DESK / 00:16
          </text>
        </svg>
      </div>
    );
  };

  const Header = ({ title }) => (
    <div className="document-header">
      <div>
        <div className="small-caps">METROPOLITAN POLICE ARCHIVE</div>
        <h1>{title}</h1>
      </div>
      <div className="classification">CASE 017<br />RESTRICTED</div>
    </div>
  );

  const Redaction = ({ width = "180px" }) => (
    <span
      className="redaction"
      style={{ width }}
    />
  );

  const renderContent = () => {
    switch (activeFile) {
      case "cover":
        return (
          <div className="case-cover">
            <div className="stamp">UNSOLVED</div>

            <div className="cover-inner">
              <div className="small-caps">METROPOLITAN POLICE DEPARTMENT</div>
              <h1>CASE FILE 017</h1>
              <div className="horizontal-line" />

              <div className="case-title">
                THE BLACKWOOD HOUSE INCIDENT
              </div>

              <div className="cover-details">
                <div>
                  <span>VICTIM</span>
                  <strong>ADRIAN BLACKWOOD</strong>
                </div>
                <div>
                  <span>DATE</span>
                  <strong>17 OCTOBER 2019</strong>
                </div>
                <div>
                  <span>LOCATION</span>
                  <strong>BLACKWOOD HOUSE</strong>
                </div>
                <div>
                  <span>STATUS</span>
                  <strong>OPEN</strong>
                </div>
              </div>

              <div className="warning">
                THIS FILE CONTAINS MATERIAL RELATING TO AN ACTIVE
                INVESTIGATION.
                <br />
                SOME MATERIAL HAS BEEN REDACTED.
              </div>

              <button
                className="unlock-button"
                onClick={() => setActiveFile("overview")}
              >
                OPEN CASE
              </button>
            </div>
          </div>
        );

      case "overview":
        return (
          <div className="document">
            <Header title="CASE OVERVIEW" />

            <p>
              At approximately <b>23:41</b> on 17 October 2019,
              police were called to Blackwood House following a report
              of an unconscious male.
            </p>

            <p>
              The victim, <b>Adrian Blackwood</b>, 48, was discovered
              inside his private study.
            </p>

            <div className="important-box">
              <b>CAUSE OF DEATH:</b>
              <br />
              Severe cranial trauma.
              <br /><br />
              <b>ESTIMATED TIME OF DEATH:</b>
              <br />
              Between 22:10 and 23:10.
            </div>

            <p>
              No obvious signs of forced entry were discovered.
              The front door was locked when officers arrived.
            </p>

            <p>
              The victim's desk had been disturbed. Several documents
              were missing from a locked drawer.
            </p>

            <p>
              Four individuals were identified as having a possible
              motive and opportunity.
            </p>

            <div className="handwritten">
              Whoever did this knew the house.
              <br />
              They also knew exactly what they were looking for.
            </div>

            <div className="signature">
              DET. H. MORROW
              <br />
              LEAD INVESTIGATOR
            </div>
          </div>
        );

      case "victim":
        return (
          <div className="document">
            <Header title="VICTIM PROFILE" />

            <div className="profile-grid">
              <div className="portrait">
                <svg viewBox="0 0 250 300">
                  <rect width="250" height="300" fill="#ddd" />
                  <circle cx="125" cy="95" r="52" fill="#555" />
                  <path
                    d="M65 280 C68 190 182 190 185 280"
                    fill="#444"
                  />
                  <rect x="75" y="70" width="100" height="12" fill="#222" />
                  <rect x="83" y="108" width="28" height="7" fill="#222" />
                  <rect x="139" y="108" width="28" height="7" fill="#222" />
                  <path
                    d="M105 145 Q125 158 145 145"
                    stroke="#111"
                    strokeWidth="5"
                    fill="none"
                  />
                </svg>
                <div>BLACKWOOD, ADRIAN</div>
              </div>

              <div>
                <p><b>AGE:</b> 48</p>
                <p><b>OCCUPATION:</b> Architect / Property owner</p>
                <p><b>MARITAL STATUS:</b> Divorced</p>
                <p><b>ADDRESS:</b> Blackwood House</p>

                <hr />

                <p>
                  Blackwood was described by colleagues as intelligent,
                  private and highly controlling.
                </p>

                <p>
                  In the weeks before his death, he reportedly became
                  increasingly concerned about information being removed
                  from his study.
                </p>

                <p>
                  A handwritten note found in his coat contained only
                  three words:
                </p>

                <div className="large-note">
                  "CHECK THE CLOCK."
                </div>
              </div>
            </div>
          </div>
        );

      case "suspects":
        return (
          <div className="document">
            <Header title="PERSONS OF INTEREST" />

            {suspects.map((s, index) => (
              <div className="suspect" key={s.name}>
                <div className="suspect-number">
                  0{index + 1}
                </div>

                <div className="suspect-info">
                  <h2>{s.name}</h2>
                  <div className="suspect-meta">
                    AGE {s.age} / {s.occupation.toUpperCase()} /{" "}
                    {s.relation.toUpperCase()}
                  </div>

                  <p>{s.description}</p>

                  <p>
                    <b>ALIBI:</b> {s.alibi}
                  </p>

                  <p>
                    <b>KNOWN DETAIL:</b> {s.detail}
                  </p>
                </div>
              </div>
            ))}
          </div>
        );

      case "timeline":
        return (
          <div className="document">
            <Header title="ESTABLISHED TIMELINE" />

            <div className="timeline">
              {[
                ["18:32", "Adrian Blackwood receives a telephone call."],
                ["19:40", "Nora Vale reportedly leaves Blackwood House."],
                ["20:05", "Mara Bell claims she begins work at her studio."],
                ["20:17", "Jonathan Reed is seen entering the Ashford Hotel."],
                ["21:10", "Elias Vale claims he is already at home."],
                ["21:48", "Neighbour reports lights visible in Blackwood House study."],
                ["22:07", "Unknown number calls Blackwood's landline."],
                ["22:19", "Hotel records place Reed away from his table."],
                ["22:31", "A loud impact is reportedly heard by a neighbour."],
                ["22:44", "Study light is observed to turn off."],
                ["23:16", "Nora Vale's phone reconnects to local network."],
                ["23:41", "Police arrive at Blackwood House."],
              ].map(([time, event]) => (
                <div className="timeline-row" key={time}>
                  <div className="time">{time}</div>
                  <div className="timeline-dot" />
                  <div className="event">{event}</div>
                </div>
              ))}
            </div>

            <div className="margin-note">
              Note: some times are estimated rather than independently verified.
            </div>
          </div>
        );

      case "statement1":
        return (
          <div className="document">
            <Header title="WITNESS STATEMENT A" />

            <div className="statement">
              <h2>WITNESS: MRS. E. HARROW</h2>
              <p className="typewriter">
                I live across the road from Blackwood House. I know Mr.
                Blackwood by sight.
              </p>

              <p className="typewriter">
                On the night of the 17th I was awake because of the storm.
                At around half past ten I heard what sounded like furniture
                falling over.
              </p>

              <p className="typewriter">
                I looked through my upstairs window and could see the
                study window. The light was on.
              </p>

              <p className="typewriter">
                I remember thinking this was strange because Mr. Blackwood
                usually closed the curtains when working late.
              </p>

              <p className="typewriter">
                I did not see anyone leave.
              </p>

              <div className="signature">
                E. HARROW
                <br />
                18 OCTOBER 2019
              </div>
            </div>
          </div>
        );

      case "statement2":
        return (
          <div className="document">
            <Header title="WITNESS STATEMENT B" />

            <div className="statement">
              <h2>WITNESS: THOMAS KEANE</h2>

              <p className="typewriter">
                I was employed by Mr. Blackwood for approximately four
                years.
              </p>

              <p className="typewriter">
                He kept a brass desk clock in his study. He was very
                particular about it. He wound it every evening at ten.
              </p>

              <p className="typewriter">
                The clock had stopped once before, during a power cut.
                He hated it when that happened.
              </p>

              <p className="typewriter">
                On the afternoon of the 17th he told me, "If anything
                happens, the clock will tell you."
              </p>

              <p className="typewriter">
                I assumed he meant the time.
              </p>

              <div className="signature">
                T. KEANE
                <br />
                18 OCTOBER 2019
              </div>
            </div>
          </div>
        );

      case "statement3":
        return (
          <div className="document">
            <Header title="WITNESS STATEMENT C" />

            <div className="statement">
              <h2>WITNESS: J. COLLINS</h2>

              <p className="typewriter">
                I delivered a package to Blackwood House at approximately
                20:50.
              </p>

              <p className="typewriter">
                The front door was opened by a woman. I did not see her
                clearly enough to identify her.
              </p>

              <p className="typewriter">
                She said Mr. Blackwood was upstairs.
              </p>

              <p className="typewriter">
                I remember she had something dark on her hands. At the
                time I assumed it was ink.
              </p>

              <p className="typewriter">
                The woman signed for the package using the name
                <Redaction width="110px" />.
              </p>

              <div className="signature">
                J. COLLINS
                <br />
                18 OCTOBER 2019
              </div>
            </div>
          </div>
        );

      case "photo1":
        return (
          <div className="document">
            <Header title="EVIDENCE PHOTOGRAPH 01" />

            {renderPhoto(1)}

            <div className="evidence-caption">
              LOCATION: PRIVATE STUDY
              <br />
              TAKEN: 23:48
              <br />
              ITEM: DESK / FLOOR AREA
            </div>

            <p>
              A heavy object appears to have struck the victim.
              No weapon was recovered at the scene.
            </p>
          </div>
        );

      case "photo2":
        return (
          <div className="document">
            <Header title="EVIDENCE PHOTOGRAPH 02" />

            {renderPhoto(2)}

            <div className="evidence-caption">
              LOCATION: VICTIM'S DESK
              <br />
              TAKEN: 00:16
              <br />
              ITEM: DESK DRAWER
            </div>

            <p>
              Photograph taken before the desk was disturbed further.
              A section of paper appears to have been removed from
              beneath the blotter.
            </p>

            <div className="handwritten">
              "There is more than one copy."
            </div>
          </div>
        );

      case "medical":
        return (
          <div className="document">
            <Header title="MEDICAL EXAMINER'S REPORT" />

            <p><b>SUBJECT:</b> ADRIAN BLACKWOOD</p>
            <p><b>DATE OF EXAMINATION:</b> 18 OCTOBER 2019</p>

            <hr />

            <p>
              One major impact injury was identified to the rear-left
              portion of the skull.
            </p>

            <p>
              The injury is consistent with a heavy blunt instrument.
            </p>

            <p>
              No defensive wounds were identified on the hands.
            </p>

            <p>
              No significant alcohol or sedative substances were present.
            </p>

            <div className="important-box">
              ESTIMATED TIME OF DEATH
              <br />
              <b>22:25 — 22:50</b>
            </div>

            <p>
              The difference between the initial field estimate and the
              medical estimate should be noted.
            </p>

            <div className="margin-note">
              Somebody wanted the first timeline to be wrong.
            </div>
          </div>
        );

      case "letter":
        return (
          <div className="document paper">
            <Header title="RECOVERED LETTER" />

            <div className="letter">
              <div className="letter-date">12 OCTOBER 2019</div>

              <p>
                Adrian,
              </p>

              <p>
                You told me the original was destroyed.
              </p>

              <p>
                I believed you.
              </p>

              <p>
                Then I found the second copy.
              </p>

              <p>
                If you keep going, you will leave me no choice.
              </p>

              <p>
                You know what happened in the old house.
              </p>

              <p>
                You know who was there.
              </p>

              <p>
                And you know what the clock means.
              </p>

              <p>
                Stop looking.
              </p>

              <p>
                — M
              </p>

              <div className="redacted-line">
                <Redaction width="300px" />
              </div>
            </div>
          </div>
        );

      case "phone":
        return (
          <div className="document">
            <Header title="TELEPHONE RECORD" />

            <table>
              <thead>
                <tr>
                  <th>TIME</th>
                  <th>TYPE</th>
                  <th>NUMBER</th>
                  <th>DURATION</th>
                </tr>
              </thead>

              <tbody>
                <tr>
                  <td>18:32</td>
                  <td>INCOMING</td>
                  <td>PRIVATE</td>
                  <td>04:11</td>
                </tr>
                <tr>
                  <td>20:03</td>
                  <td>OUTGOING</td>
                  <td>0141 88 91XX</td>
                  <td>01:43</td>
                </tr>
                <tr>
                  <td>21:56</td>
                  <td>INCOMING</td>
                  <td>PRIVATE</td>
                  <td>00:19</td>
                </tr>
                <tr>
                  <td>22:07</td>
                  <td>INCOMING</td>
                  <td>PRIVATE</td>
                  <td>00:07</td>
                </tr>
                <tr>
                  <td>22:08</td>
                  <td>OUTGOING</td>
                  <td>0141 88 91XX</td>
                  <td>00:03</td>
                </tr>
              </tbody>
            </table>

            <div className="margin-note">
              Number 0141 88 91XX was disconnected approximately six
              months prior.
            </div>
          </div>
        );

      case "redacted":
        return (
          <div className="document classified">
            <Header title="CLASSIFIED DOCUMENT" />

            <div className="redacted-document">
              <p>
                SUBJECT: BLACKWOOD / PROPERTY / <Redaction width="130px" />
              </p>

              <p>
                The original document refers to an incident occurring
                approximately eleven years prior to Case 017.
              </p>

              <p>
                Several names have been removed.
              </p>

              <p>
                <Redaction width="340px" />
              </p>

              <p>
                <Redaction width="250px" />
              </p>

              <p>
                The surviving section reads:
              </p>

              <div className="quote">
                "There were three people in the room.
                <br />
                One of them lied.
                <br />
                One of them died.
                <br />
                The third kept the key."
              </div>

              <p>
                <Redaction width="390px" />
              </p>

              <p>
                <Redaction width="290px" />
              </p>

              <p>
                <Redaction width="350px" />
              </p>

              <div className="redacted-footer">
                DOCUMENT CONTINUES — PAGE 2 MISSING
              </div>
            </div>
          </div>
        );

      case "notes":
        return (
          <div className="document notes-page">
            <Header title="INVESTIGATOR NOTES" />

            <p>
              This page belongs to you.
            </p>

            <p>
              Write down anything you think matters.
            </p>

            <textarea
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              placeholder="Write your observations here..."
            />

            <div className="note-tip">
              Things worth checking:
              <br />
              — contradictions
              <br />
              — times
              <br />
              — objects
              <br />
              — things people should not know
              <br />
              — details that appear more than once
            </div>
          </div>
        );

      case "answer":
        return (
          <div className="document final-page">
            <Header title="FINAL CONCLUSION" />

            <div className="final-warning">
              DO NOT OPEN THIS FILE UNTIL YOU HAVE REVIEWED THE EVIDENCE.
            </div>

            <p>
              You have reached the end of the archive.
            </p>

            <p>
              Your task is to identify:
            </p>

            <ol>
              <li>Who killed Adrian Blackwood?</li>
              <li>How did they enter the house?</li>
              <li>What was the murder weapon?</li>
              <li>Why was the victim killed?</li>
              <li>Which piece of evidence proves it?</li>
            </ol>

            <label>YOUR CONCLUSION</label>

            <textarea
              value={answer}
              onChange={(e) => setAnswer(e.target.value)}
              placeholder="Write your complete theory here..."
            />

            <button
              className="submit-button"
              onClick={() => setSubmitted(true)}
            >
              SEAL CONCLUSION
            </button>

            {submitted && (
              <div className="sealed">
                CONCLUSION SEALED.
                <br /><br />
                CASE REVIEW COMPLETE.
                <br /><br />
                <span>
                  If you want to know whether you solved it,
                  ask Mao's desktop to reveal the answer.
                </span>
              </div>
            )}
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="murder-app">
      <style>{`
        * {
          box-sizing: border-box;
        }

        body {
          margin: 0;
          background: #080808;
        }

        .murder-app {
          min-height: 100vh;
          background:
            repeating-linear-gradient(
              0deg,
              rgba(255,255,255,0.018) 0px,
              rgba(255,255,255,0.018) 1px,
              transparent 1px,
              transparent 4px
            ),
            #090909;
          color: #dedede;
          font-family: "Courier New", monospace;
          display: flex;
          overflow: hidden;
        }

        .sidebar {
          width: 290px;
          min-height: 100vh;
          background: #0e0e0e;
          border-right: 1px solid #333;
          padding: 24px 16px;
          overflow-y: auto;
        }

        .archive-title {
          font-size: 13px;
          letter-spacing: 3px;
          color: #777;
          margin-bottom: 6px;
        }

        .archive-number {
          font-size: 25px;
          letter-spacing: 4px;
          margin-bottom: 22px;
          color: #eee;
        }

        .sidebar-line {
          height: 1px;
          background: #333;
          margin-bottom: 16px;
        }

        .file {
          width: 100%;
          text-align: left;
          background: transparent;
          border: 0;
          color: #999;
          padding: 9px 7px;
          margin: 1px 0;
          font-family: inherit;
          font-size: 11px;
          letter-spacing: 1px;
          cursor: pointer;
          display: flex;
          justify-content: space-between;
          transition: 0.15s;
        }

        .file:hover {
          background: #1c1c1c;
          color: #fff;
        }

        .file.active {
          background: #ddd;
          color: #080808;
        }

        .file.locked {
          color: #555;
          cursor: not-allowed;
        }

        .file-type {
          font-size: 8px;
          opacity: 0.6;
        }

        .main {
          flex: 1;
          min-width: 0;
          min-height: 100vh;
          padding: 35px;
          overflow-y: auto;
          background: #111;
        }

        .document {
          max-width: 900px;
          min-height: calc(100vh - 70px);
          margin: 0 auto;
          padding: 50px 60px;
          background:
            repeating-linear-gradient(
              0deg,
              rgba(0,0,0,0.018) 0px,
              rgba(0,0,0,0.018) 1px,
              transparent 1px,
              transparent 5px
            ),
            #e8e8e8;
          color: #171717;
          box-shadow: 0 0 45px rgba(0,0,0,0.65);
          position: relative;
        }

        .document::after {
          content: "";
          position: absolute;
          inset: 0;
          pointer-events: none;
          border: 1px solid #aaa;
          mix-blend-mode: multiply;
        }

        .document-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          border-bottom: 3px solid #151515;
          padding-bottom: 17px;
          margin-bottom: 32px;
        }

        .document-header h1 {
          margin: 5px 0 0;
          font-size: 27px;
          letter-spacing: 3px;
        }

        .small-caps {
          font-size: 9px;
          letter-spacing: 3px;
          font-weight: bold;
        }

        .classification {
          text-align: right;
          font-size: 9px;
          letter-spacing: 2px;
          line-height: 1.7;
        }

        .document p {
          font-family: Georgia, serif;
          font-size: 16px;
          line-height: 1.8;
          max-width: 750px;
        }

        .important-box {
          border: 2px solid #222;
          padding: 18px;
          margin: 25px 0;
          font-family: "Courier New", monospace;
          font-size: 13px;
          letter-spacing: 1px;
        }

        .handwritten {
          margin: 35px 0;
          padding: 20px;
          border-left: 2px solid #333;
          font-family: "Comic Sans MS", cursive;
          font-style: italic;
          font-size: 18px;
          transform: rotate(-1deg);
        }

        .signature {
          margin-top: 35px;
          font-family: "Courier New", monospace;
          font-size: 11px;
          letter-spacing: 2px;
        }

        .case-cover {
          min-height: 100vh;
          width: 100%;
          display: flex;
          justify-content: center;
          align-items: center;
          background: #090909;
          position: relative;
          overflow: hidden;
        }

        .case-cover::before {
          content: "";
          position: absolute;
          inset: 0;
          background:
            repeating-linear-gradient(
              0deg,
              transparent 0px,
              transparent 5px,
              rgba(255,255,255,0.02) 5px,
              rgba(255,255,255,0.02) 6px
            );
        }

        .cover-inner {
          width: min(700px, 90%);
          border: 1px solid #555;
          padding: 70px;
          text-align: center;
          position: relative;
          background: #0b0b0b;
        }

        .cover-inner h1 {
          font-size: 54px;
          letter-spacing: 9px;
          margin: 25px 0 15px;
          font-weight: normal;
        }

        .horizontal-line {
          height: 1px;
          background: #555;
          margin: 20px 0;
        }

        .case-title {
          font-size: 18px;
          letter-spacing: 4px;
          margin: 30px 0 50px;
        }

        .cover-details {
          display: grid;
          grid-template-columns: 1fr 1fr;
          border-top: 1px solid #444;
          border-left: 1px solid #444;
        }

        .cover-details div {
          padding: 18px;
          border-right: 1px solid #444;
          border-bottom: 1px solid #444;
        }

        .cover-details span {
          display: block;
          font-size: 8px;
          letter-spacing: 2px;
          color: #777;
          margin-bottom: 7px;
        }

        .cover-details strong {
          font-size: 11px;
          letter-spacing: 1px;
        }

        .warning {
          margin: 35px 0;
          font-size: 9px;
          line-height: 2;
          letter-spacing: 2px;
          color: #888;
        }

        .unlock-button,
        .submit-button {
          border: 1px solid #aaa;
          background: #111;
          color: #eee;
          padding: 13px 28px;
          font-family: inherit;
          letter-spacing: 3px;
          cursor: pointer;
        }

        .unlock-button:hover,
        .submit-button:hover {
          background: #eee;
          color: #111;
        }

        .stamp {
          position: absolute;
          top: 80px;
          right: 60px;
          border: 4px solid #222;
          padding: 8px 18px;
          font-size: 20px;
          letter-spacing: 4px;
          transform: rotate(13deg);
          opacity: 0.65;
        }

        .profile-grid {
          display: grid;
          grid-template-columns: 250px 1fr;
          gap: 40px;
        }

        .portrait {
          border: 1px solid #444;
          padding: 10px;
          text-align: center;
          font-size: 9px;
          letter-spacing: 2px;
        }

        .portrait svg {
          width: 100%;
          display: block;
          margin-bottom: 10px;
        }

        .large-note {
          border: 1px solid #555;
          padding: 18px;
          font-family: "Comic Sans MS", cursive;
          font-size: 19px;
          transform: rotate(-2deg);
          margin-top: 25px;
        }

        .suspect {
          display: grid;
          grid-template-columns: 55px 1fr;
          border-bottom: 1px solid #888;
          padding: 25px 0;
        }

        .suspect-number {
          font-size: 25px;
          color: #777;
        }

        .suspect h2 {
          margin: 0 0 5px;
          font-size: 20px;
          letter-spacing: 2px;
        }

        .suspect-meta {
          font-size: 9px;
          letter-spacing: 1px;
          color: #555;
        }

        .suspect p {
          font-size: 14px;
          line-height: 1.6;
          margin: 12px 0;
        }

        .timeline {
          border-left: 2px solid #333;
          margin-left: 50px;
        }

        .timeline-row {
          display: grid;
          grid-template-columns: 75px 20px 1fr;
          align-items: center;
          min-height: 55px;
        }

        .time {
          font-size: 12px;
          font-weight: bold;
        }

        .timeline-dot {
          width: 9px;
          height: 9px;
          border-radius: 50%;
          background: #222;
          margin-left: -5px;
        }

        .event {
          font-family: Georgia, serif;
          font-size: 14px;
          padding-left: 15px;
        }

        .statement {
          max-width: 720px;
        }

        .statement h2 {
          font-size: 15px;
          letter-spacing: 2px;
          border-bottom: 1px solid #999;
          padding-bottom: 12px;
        }

        .typewriter {
          font-family: "Courier New", monospace !important;
          font-size: 14px !important;
          line-height: 2 !important;
        }

        .crime-photo {
          width: 100%;
          border: 1px solid #222;
          padding: 8px;
          background: #ccc;
          margin: 20px 0;
        }

        .crime-photo svg {
          width: 100%;
          display: block;
          filter: grayscale(1) contrast(1.1);
        }

        .evidence-caption {
          font-size: 9px;
          line-height: 1.8;
          letter-spacing: 1px;
          border-bottom: 1px solid #888;
          padding-bottom: 15px;
          margin-bottom: 20px;
        }

        table {
          width: 100%;
          border-collapse: collapse;
          font-family: "Courier New", monospace;
          font-size: 11px;
        }

        th, td {
          border: 1px solid #666;
          padding: 12px 9px;
          text-align: left;
        }

        th {
          background: #ccc;
          letter-spacing: 1px;
        }

        .redaction {
          display: inline-block;
          height: 16px;
          background: #111;
          vertical-align: middle;
          margin: 0 4px;
        }

        .redacted-document {
          font-family: "Courier New", monospace;
          font-size: 13px;
          line-height: 2.2;
        }

        .redacted-document p {
          font-family: inherit;
          font-size: inherit;
          line-height: inherit;
        }

        .quote {
          border-left: 4px solid #222;
          padding: 20px;
          margin: 30px 0;
          font-family: Georgia, serif;
          font-style: italic;
          font-size: 18px;
          line-height: 2;
        }

        .redacted-footer {
          margin-top: 60px;
          padding-top: 15px;
          border-top: 2px solid #222;
          text-align: center;
          letter-spacing: 3px;
          font-size: 9px;
        }

        .letter {
          max-width: 600px;
          margin: 0 auto;
          font-family: Georgia, serif;
          font-size: 18px;
          line-height: 2;
        }

        .letter-date {
          text-align: right;
          font-family: "Courier New", monospace;
          font-size: 11px;
          margin-bottom: 40px;
        }

        .notes-page textarea,
        .final-page textarea {
          width: 100%;
          min-height: 350px;
          resize: vertical;
          background:
            repeating-linear-gradient(
              transparent 0,
              transparent 31px,
              #aaa 32px
            );
          border: 1px solid #888;
          padding: 10px;
          font-family: "Comic Sans MS", cursive;
          font-size: 16px;
          line-height: 32px;
          color: #111;
         
