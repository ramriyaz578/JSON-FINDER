// import Cell from "./Cell"

const Row = (item) => {
  return (
   < tr>
      {Object.entries(item).map(([key, value]) =>{
        return(
           <td> key ={key} celldata ={JSON.stringify(value)} </td>
        )
      })}


   </tr>
  )
}

export default Row
