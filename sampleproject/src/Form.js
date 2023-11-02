import Button from "./Button";

const Form = ({ reqType, setreqType }) => {
  return (
    <form  onSubmit={(e) => e.preventDefault()} >
        
      <Button
        Buttontext="users"
        reqType={reqType} 
        setreqType={setreqType} />
      <Button 
         Buttontext="posts" 
         reqType={reqType} 
         setreqType={setreqType} />
      <Button 
         Buttontext="comments" 
         reqType={reqType} 
         setreqType={setreqType} />
    </form>
  );
};

export default Form;
