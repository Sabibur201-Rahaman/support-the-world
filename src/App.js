                          // import logo from './logo.svg';
                          import './App.css';
                          import Navbar from './component/Navbar';
                          import TextForm from './component/TextForm';
                          // import About from './component/About';
                          import React, { useState } from 'react';
                          import Alert from './component/Alert';
 
                        
                          
                          // import {
                          //   BrowserRouter as Router,
                          //   Routes,
                          //   Route,
                            
                          // } from "react-router-dom";






                          function App() {
                            const[mode,setMode]=useState('light');
                            const[alert,setAlert]=useState(null);
                            const showAlert = (message,type)=>{
                              setAlert({
                                msg:message,
                                type:type
                                

                              })
                              setTimeout(()=>{
                                setAlert(null);
                              },1500);
                          
                            }

                            const toggleMode=()=>{
                              if( mode ==='light'){
                              setMode('dark');
                              document.body.style.backgroundColor='gray';
                              showAlert("the dark mode has been enabled","success");
                              document.title='TextUtils-DarkMode';
                              setInterval(()=>{
                                document.title='TextUtils is amazing mode';

                              }, 2000);
                              setInterval(()=>{
                                document.title='Install TextUtils is amazing mode';

                              }, 1500);

                            }

                            else{
                              setMode('light');
                              document.body.style.backgroundColor='white';
                              showAlert("the light mode has been enabled","success");
                              document.title='TextUtils-LightMode';

                            }
                          }
                            return (
                              <>
                                {/* <Navbar title{alert} /> */}
                     {/* <Router> */}
                             
                          <Navbar title="Textutils2" aboutText="About" mode={mode} toggleMode={toggleMode} />
                          {/* <About/> */}
                          <Alert alert={alert}/>
                         
                        
                          <div className="container my-3">
                         
                          {/* <Routes>
            <Route exact path="/about" element={<About />}>
            </Route>
            <Route exact path="/home" element={<TextForm heading="Enter text to analyze"  mode={mode} showAlert={showAlert} />}>
            </Route>
          </Routes> */}
        <TextForm showAlert={showAlert}heading="Enter the text to analyze" mode={mode}/>
      </div>
    {/* </Router> */}
                                   
                                    
                                  </>
                                      );
                                    }  
                        export default App;

                    
                         
                       
                         
                         

                        

                              
                          