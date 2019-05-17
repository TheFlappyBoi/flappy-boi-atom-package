'use babel';

import FlappyBoiView from './flappy-boi-view';
import {
  CompositeDisposable
} from 'atom';

export default {

  flappyBoiView: null,
  modalPanel: null,
  subscriptions: null,

  activate(state) {
    this.flappyBoiView = new FlappyBoiView(state.flappyBoiViewState);
    this.modalPanel = atom.workspace.addModalPanel({
      item: this.flappyBoiView.getElement(),
      visible: false
    });

    // Events subscribed to in atom's system can be easily cleaned up with a CompositeDisposable
    this.subscriptions = new CompositeDisposable();

    // Register command that toggles this view
    this.subscriptions.add(atom.commands.add('atom-workspace', {
      'flappy-boi:toggle': () => this.toggle()
    }));
  },

  deactivate() {
    this.modalPanel.destroy();
    this.subscriptions.dispose();
    this.flappyBoiView.destroy();
  },

  serialize() {
    return {
      flappyBoiViewState: this.flappyBoiView.serialize()
    };
  },

  toggle() {
    console.log('FlappyBoi was toggled!');
    atom.notifications.addInfo("Flappy Boi says: Hi :3", )
  }

};