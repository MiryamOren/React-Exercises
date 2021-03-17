import './form.css'
const Form = (props) => {
  console.log(props.data);
  return(
    <div className="form" onChange={(event) => {props.onChange(event.target)}}>
      <label>First name</label>
      <input type="text" id='first-name' defaultValue={props.data['first-name']}></input>
      <label>Last name</label>
      <input type="text" id='last-name' defaultValue={props.data['last-name']}></input>
      <label>Age</label>
      <select id="age" defaultValue={props.data.age}>
        <option value="under-18">Under 18</option>
        <option value="18 - 30">18 - 30</option>
        <option value="30 - 50">30 - 50</option>
        <option value="50 - 70">50 - 70</option>
        <option value="70 and older">70 and older</option>
      </select>
      <label>Something else I want to say</label>
      <textarea id="free-txt" defaultValue={props.data['free-txt']}></textarea>
      <button onClick={props.onClick}>Continue</button>
    </div>
  )
}

export default Form