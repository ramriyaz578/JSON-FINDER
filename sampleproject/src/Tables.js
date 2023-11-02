import Row from "./Row"

const Tables = ({items}) => {
  return (
    <div>
      <table className="table">
           <tbody>
           {items.map(item =>{
            return (<Row key={item._id} item={item}/>)
           })}
           </tbody>
           

      </table>
      
    </div>
  )
}

export default Tables
