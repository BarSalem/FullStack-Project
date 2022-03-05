import React,{useRef} from "react";
import "./css/Home.css";
import emailjs from 'emailjs-com'
import { useNavigate } from "react-router-dom";

function Home(){
    const [formData,setFormData]=React.useState({
    name:'',
    email:'',
    message:'',
  })
  const {name,email,message}=formData;
  const onChange= (e)=>{
    setFormData((prevState)=>({
      ...prevState,
      [e.target.name]:e.target.value
    }))
  }
  const form = useRef();
  const navigate=useNavigate()
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_om4q85c', 'template_sbldq04', form.current, 'lU80KI3A1yfBRwhb4')
      .then((result) => {
          console.log(result.text);
          navigate('/');
      }, (error) => {
          console.log(error.text);
          navigate('/');
      });
  };
    return(<div className="homeBody">
        <center>
        <div className="homeInfo">
        <h1>Course Description</h1>
        <p class="pRec" id="#one">is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
        </div>
        <div className="homeInfo">
        <h1>Price</h1>
        <p class="pRec" id="#one">is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
        </div>
        <div className="homeInfo">
        <h1>How to start</h1>
        <p class="pRec" id="#one">is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
        </div>
        <form ref={form} onSubmit={sendEmail}>
        <div id="ContactForm">
        <div class="Contactform">
        <div class="Contacttitle">Contact us</div>
        <div class="Contactsubtitle">fill free to ask anything!</div>
        <div class="input-container ic1">
         <input id="firstname" class="inputContact" type="text" name="name" value={name} onChange={onChange} placeholder="Name" required />
         <div class="cut"></div>
       </div>
       <div class="input-container ic2">
         <input id="email" class="inputContact" type="email" name="email" value={email} onChange={onChange} placeholder="Email" required/>
         <div class="cut cut-short"></div>
        </div>
       <div class="input-container ic2">
         <textarea class="inputMessage" rows="8" cols="50" name="message" value={message} onChange={onChange} placeholder="Message:"></textarea>
         <div class="cut"></div>
       </div>
       <div className="submitButCon">
       <button type="submit" id="ContactSubmit">submit</button> 
       </div>
      </div>
      </div>
      </form>
        </center>
    </div>)
}

export default Home;