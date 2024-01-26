import { Item } from "./Sticker.styled"

export function Sticker ({img, label, handleChange}){
    return (
     <Item onClick={() => {handleChange(label)}}>
        <img src={img} alt="" />
        <p>{label}</p>
     </Item>
    )
}