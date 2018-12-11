import React from 'react'
import Modal from './Modal'
import Button from '../Button/Button'
import Input from '../Input/Input'

export default class ModalExample extends React.Component {
  state = {
    modal1Visibility: false,
    modal2Visibility: false,
    modal3Visibility: false,
    modal4Visibility: false,
    modal5Visibility: false,
  }

  togglerModal = (id) => {
    this.setState((prevState) => {
      let stateName = `modal${id}Visibility`

      return { [stateName]: !prevState[stateName] }
    })
  }

  render() {
    return (
      <>
        <Modal
          visible={this.state.modal1Visibility}
          title="Hello world!"
          content="Olá mundo!"
          onRequestClose={() => this.togglerModal(1)}
        />

        <Button fill onClick={() => this.togglerModal(1)}>Open modal</Button>

        <br /><br />

        <Modal
          visible={this.state.modal2Visibility}
          type="alert"
          title="Hello world!"
          content="Olá mundo!"
          buttons={[
            <Button onClick={() => this.togglerModal(2)}>Ok</Button>
          ]}
          onRequestClose={() => this.togglerModal(2)}
        />

        <Button fill onClick={() => this.togglerModal(2)}>Open alert modal</Button>

        <br /><br />

        <Modal
          visible={this.state.modal3Visibility}
          type="confirm"
          title="Are you sure?"
          content="This will delete your post."
          buttons={[
            <Button onClick={() => this.togglerModal(3)}>Cancel</Button>,
            <Button color="red" onClick={() => this.togglerModal(3)}>Delete</Button>,
          ]}
          onRequestClose={() => this.togglerModal(3)}
        />

        <Button fill onClick={() => this.togglerModal(3)}>Open confirm modal</Button>

        <br /><br />

        <Modal
          visible={this.state.modal4Visibility}
          type="prompt"
          title="Type your name:"
          content={(
            <Input
              placeholder="type here..."
              value={this.state.modal4Value}
              onChange={(e) => this.setState({ modal4Value: e.target.value })}
            />
          )}
          buttons={[
            <Button onClick={() => this.togglerModal(4)}>Cancel</Button>,
            <Button color="red" onClick={() => this.togglerModal(4)}>Ok</Button>,
          ]}
          style={{ width: 400 }}
          onRequestClose={() => this.togglerModal(4)}
        />

        <Button fill onClick={() => this.togglerModal(4)}>Open prompt modal with custom width</Button>

        <br /><br />

        <Modal
          visible={this.state.modal5Visibility}
          title="Choose an option:"
          content=""
          verticalButtons
          buttons={[
            <Button onClick={() => this.togglerModal(5)}>Share</Button>,
            <Button onClick={() => this.togglerModal(5)}>Copy link</Button>,
            <Button color="red" onClick={() => this.togglerModal(5)}>Delete</Button>,
          ]}
          onRequestClose={() => this.togglerModal(5)}
        />

        <Button fill onClick={() => this.togglerModal(5)}>Open modal with vertical buttons</Button>
      </>
    )
  }
}
