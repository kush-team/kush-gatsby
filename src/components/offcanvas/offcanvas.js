import React, { Component } from "react"
import { slide as Menu } from "react-burger-menu"
import "./offcanvas.css"
import Navigation from "../header/navigation"
import Language from "../language/language"

class Offcanvas extends Component {
  constructor() {
    super()
    this.state = {
      openMenu: false,
    }
  }

  closeMenu = () => {
    this.setState({
      openMenu: false,
    })
  }

  handleStateChange = state => {
    this.setState({
      openMenu: state.isOpen,
    })
  }

  render = () => {
    const { openMenu } = this.state

    return (
      <Menu
        width={240}
        right
        isOpen={openMenu}
        onStateChange={state => this.handleStateChange(state)}
      >
        <Navigation closeMenu={this.closeMenu} />
        <div className="absolute bottom-0 left-0 right-0 flex justify-center mb-8 outline-none">
          <Language />
        </div>
      </Menu>
    )
  }
}

export default Offcanvas
