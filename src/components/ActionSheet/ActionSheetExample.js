import React from 'react'
import ActionSheet from './ActionSheet'
import Button from '../Button/Button'

export default class ASE extends React.Component {
  state = {
    visibility1: false,
    visibility2: false,
    visibility3: false,
  }

  toggleActionsheet = (id, val) => {
    let stateName = `visibility${id}`
    this.setState({ [stateName]: val })
  }

  render() {
    return (
      <React.Fragment>
        <ActionSheet
          visible={this.state.visibility1}
          buttons={[
            <Button>Add to playlist</Button>,
            <Button>Copy link</Button>,
            <Button>Archive</Button>,
            <Button color="red">Delete</Button>
          ]}
          onRequestClose={() => this.toggleActionsheet(1, false)}
        />

        <Button fill onClick={() => this.toggleActionsheet(1, true)}>Open ActionSheet</Button>

        <br/><br/>

        <ActionSheet
          visible={this.state.visibility2}
          content={'Amet tempor nostrud dolore non consequat elit do proident irure sit irure exercitation.'}
          onRequestClose={() => this.toggleActionsheet(2, false)}
        />

        <Button fill onClick={() => this.toggleActionsheet(2, true)}>Open ActionSheet without buttons</Button>

        <br/><br/>

        <ActionSheet
          visible={this.state.visibility3}
          content={'What do you want to do?'}
          buttons={[
            <Button>Add to playlist</Button>,
            <Button>Copy link</Button>,
            <Button>Archive</Button>,
            <Button color="red">Delete</Button>
          ]}
          onRequestClose={() => this.toggleActionsheet(3, false)}
        />

        <Button fill onClick={() => this.toggleActionsheet(3, true)}>Open ActionSheet with title</Button>
      </React.Fragment>
    )
  }
}
