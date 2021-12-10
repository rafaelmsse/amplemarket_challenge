import './App.css';
import React, { useState } from 'react';
function App() {
  
  let novoDraft = {
      id:-1,
      name: '', 
      body: ''
  }

  const [toggle, setToggle] = useState(false);
  const [draftName, setDraftName] = useState(novoDraft.name)
  const [draftBody, setDraftBody] = useState(novoDraft.body)

  function selectDraft({name, body}) {
    setDraftName(name)
    setDraftBody(body)
  }
  function handleClick(template) {
    if (draftBody == ''){
      return 
    }

    window.top.postMessage('amplemarket-challenge'+draftBody, '*')    
  }

  const templates = [
    { 
      id:1,
      name: 'Introduction', 
      body: 'Hi, my name is Rafael.'
    },
    { 
      id:2,
      name: 'Out of the office', 
      body: 'I am currently on vacation, when I return we will schedule a meeting'
    },
    { 
      id:3,
      name: 'Reschedule', 
      body: "I'm busy at this time. Could we schedule another time?"
    },
  ];

  return (
    <div className="App">
      <div className="warp">
        <h1 class="titulo"> 
          <input placeholder="Personal Snippets" value={draftName} onChange={e => setDraftName(e.target.value)}/>
        </h1>
        <div class="conteudo">
          <textarea   cols="45" rows="20" value={draftBody} onChange={e => setDraftBody(e.target.value)}></textarea> 
        </div>
        <div className="menu">
          <ul>
            <li>
              <span>✉️</span><a onClick={() => handleClick() } href='#'>Use template</a>
            </li>            
            <li>
              <span> ⚙️ </span> <a href="#" onClick={() => setToggle(!toggle)} >Manage Snippet</a>
            </li>      
            { toggle && <li className='sublist'>
                <ul className="lista">
                  <li> <a className='link_template' href='#' onClick={() => selectDraft(novoDraft)} >New</a> </li>
                  {templates.map((template, index) =>
                    <li> <a className='link_template' href='#' onClick={() => selectDraft(template)} key={index}>{template.name}</a></li>
                  )}
                </ul>
              </li>
            }
          </ul>
        </div>
      </div> 
    </div>
  );
}

export default App;
