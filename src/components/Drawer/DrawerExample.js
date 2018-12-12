import React from 'react'
import Drawer from './Drawer'
import Button from '../Button/Button'
import List from '../List/List'

export default class DrawerExample extends React.Component {
  state = {
    drawer1Visibility: false,
    drawer2Visibility: false,
    drawer3Visibility: false,
    drawer4Visibility: false,
  }

  togglerDrawer = (id, val) => {
    let stateName = `drawer${id}Visibility`
    this.setState({ [stateName]: val })
  }

  render() {
    return (
      <React.Fragment>
        <Drawer
          visible={this.state.drawer1Visibility}
          onRequestClose={() => this.togglerDrawer(1, false)}
          content={(
            <React.Fragment>
              Veniam nulla esse tempor tempor et eu occaecat amet duis. Labore aliqua anim minim anim eiusmod tempor magna ea duis laborum minim do. Aliquip magna ullamco amet ipsum commodo mollit incididunt dolore incididunt magna. Ad nulla veniam elit ipsum veniam. Nisi enim ipsum exercitation ad dolor aliquip tempor id non incididunt aute officia.

              Pages:
              <List>
                <List.Item>Home page</List.Item>
                <List.Item>About</List.Item>
                <List.Item>Blog</List.Item>
                <List.Item>Contact</List.Item>
                <List.Item>Docs</List.Item>
                <List.Item>Configs</List.Item>
              </List>
            </React.Fragment>
          )}
        />

        <Button fill onClick={() => this.togglerDrawer(1, true)}>Open default drawer</Button>
        <br/><br/>

        <Drawer
          visible={this.state.drawer2Visibility}
          placement="left"
          onRequestClose={() => this.togglerDrawer(2, false)}
          content={(
            <React.Fragment>
              Veniam nulla esse tempor tempor et eu occaecat amet duis. Labore aliqua anim minim anim eiusmod tempor magna ea duis laborum minim do. Aliquip magna ullamco amet ipsum commodo mollit incididunt dolore incididunt magna. Ad nulla veniam elit ipsum veniam. Nisi enim ipsum exercitation ad dolor aliquip tempor id non incididunt aute officia.

              Pages:
              <List>
                <List.Item>Home page</List.Item>
                <List.Item>About</List.Item>
                <List.Item>Blog</List.Item>
                <List.Item>Contact</List.Item>
                <List.Item>Docs</List.Item>
                <List.Item>Configs</List.Item>
              </List>
            </React.Fragment>
          )}
        />

        <Button fill onClick={() => this.togglerDrawer(2, true)}>Open left drawer</Button>
        <br/><br/>

        <Drawer
          visible={this.state.drawer3Visibility}
          placement="bottom"
          onRequestClose={() => this.togglerDrawer(3, false)}
          content={'Veniam nulla esse tempor tempor et eu occaecat amet duis. Labore aliqua anim minim anim eiusmod tempor magna ea duis laborum minim do. Aliquip magna ullamco amet ipsum commodo mollit incididunt dolore incididunt magna. Ad nulla veniam elit ipsum veniam. Nisi enim ipsum exercitation ad dolor aliquip tempor id non incididunt aute officia.'}
        />

        <Button fill onClick={() => this.togglerDrawer(3, true)}>Open bottom drawer</Button>
        <br/><br/>

        <Drawer
          visible={this.state.drawer4Visibility}
          placement="top"
          onRequestClose={() => this.togglerDrawer(4, false)}
          content={'Veniam nulla esse tempor tempor et eu occaecat amet duis. Labore aliqua anim minim anim eiusmod tempor magna ea duis laborum minim do. Aliquip magna ullamco amet ipsum commodo mollit incididunt dolore incididunt magna. Ad nulla veniam elit ipsum veniam. Nisi enim ipsum exercitation ad dolor aliquip tempor id non incididunt aute officia.'}
        />

        <Button fill onClick={() => this.togglerDrawer(4, true)}>Open top drawer</Button>
        <br/><br/>
      </React.Fragment>
    )
  }
}
