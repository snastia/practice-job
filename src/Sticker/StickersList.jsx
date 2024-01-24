import {Sticker} from "./Sticker"

export function StickersList({stickerData, handleChange}){
    return(
        <ul>
            {stickerData.map((sticker) => {
                return(
                    <Sticker key={handleChange} img={sticker.img} label={sticker.label}/>
                )
            })}
        </ul>
    )
}