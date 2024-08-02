import {FormEvent, useState, useEffect} from "react";
import OpenAI from "openai";
const LLMContainer = ({
  questionSubmit,
  keySubmit
}: {
    questionSubmit: (e: FormEvent<HTMLFormElement>, value: string) => void;
    keySubmit:(e: FormEvent<HTMLFormElement>, value: string) => void;
}) => {
  
  const AI_default=new OpenAI({
    apiKey: "",
    dangerouslyAllowBrowser: true,
    baseURL: "https://glhf.chat/api/openai/v1",
  });
  const [newMessage, setNewMessage]=useState("");
  const [answer, setNewAnswer]=useState("");
  const [newKey, setKey]=useState("");
  const [newClient, setClient]= useState(AI_default)

  


  
  useEffect(() => {
    const fetchQuest= async() => {
      const result=await fetch('./llm_question.json');
      const question=await result.json();
      if (!ignore){
        setNewMessage(question)
        
      }
        
    }
    let ignore=false;
  
    fetchQuest();
    return () => {
      ignore=true;
    }
  }, ([]))

  
  const LLM= async() =>{   
    const completion = await newClient.chat.completions.create({
      messages: [{ role: "user", content: newMessage }],
      model: "hf:mistralai/Mistral-7B-Instruct-v0.3",
    });
    const llm_answer=completion.choices[0].message.content //This is the response to the prompt
    if (typeof llm_answer === "string"){
      setNewAnswer(llm_answer)
    }
  
    
  }

return (
  <div>
    <form
    action="" 
      onSubmit={(e) => {
        keySubmit(e, newKey);
        const client = new OpenAI({
              apiKey: newKey,
              dangerouslyAllowBrowser: true,
              baseURL: "https://glhf.chat/api/openai/v1",
            });
            setClient(client)
        setKey("");
      }}
      >
        <div>
          <label>Enter your API Key:</label>
          <input  
          type="text"
          value={newKey} 
          onChange={(e) => setKey(e.target.value)} 
          />
        </div>
        <button
          type="submit"
        >
          Add key
        </button>

  </form>
  <form
    action=""
    onSubmit={(e) => {
      questionSubmit(e, newMessage);
      setNewMessage("");
      setNewAnswer("");
      LLM()
    } }
  >

      <div>
        <label>Enter your question for the assistant:</label>
        <input
          type="text"
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)} />
      </div>
      <button
        type="submit"
      >
        Ask Question!
      </button>
      <p>{answer}</p>


    </form>
    </div>

)

}
export default LLMContainer;