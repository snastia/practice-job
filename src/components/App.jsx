import { Choice } from "Sticker/Choice";
// import { Sticker } from "Sticker/Sticker";
import { StickersList } from "Sticker/StickersList";
import stickerData from "../stickerData.json"
import { Component } from "react";

export class App extends Component {
  state = {
    label: ""
  }

  handleChange = (newLabel) => {
    this.setState({
      label: newLabel
    })
  }

  render(){
    return (
    <>
    <Choice label={this.state.label}/>
    <StickersList handleChange={this.handleChange} stickerData={stickerData}/>
    </>
  )
  }
  
};
