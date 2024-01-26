import {Sticker} from "./Sticker"
import {List} from "./StickersList.styled"

export function StickersList({stickerData, handleChange}){
    return(
        <List>
            {stickerData.map((sticker) => {
                return(
                    <Sticker key={handleChange} img={sticker.img} label={sticker.label}/>
                )
            })}
        </List>
    )
}