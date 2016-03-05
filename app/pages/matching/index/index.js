import {Page, NavController, NavParams, Alert} from 'ionic-angular';
import {ChatroomShowPage} from '../../chatroom/show/show';


@Page({
  templateUrl: 'build/pages/matching/index/index.html'
})
export class MatchingIndexPage {
  static get parameters() {
    return [[NavController], [NavParams]];
  }

  constructor(nav, navParams) {
    this.nav = nav;
    this.question = navParams.get('question');
    this.matchTimeout = null;

    this._startMatching();
  }

  onPageDidLeave() {
    this._stopMatching();
  }

  doCancel() {
    this._stopMatching();

    this.nav.pop();
  }

  _startMatching() {
    this.matchTimeout = setTimeout(() => {
      this._showMatched();
    }, 2000);
  }

  _stopMatching() {
    if (this.matchTimeout) {
      clearTimeout(this.matchTimeout);
    }
  }

  _showMatched() {
    let alert = Alert.create({
      title: 'Found an expert',
      message: 'setting up a private chatroom',
      enableBackdropDismiss: false
    });
    this.nav.present(alert);

    setTimeout(() => {
      alert.dismiss({}).then(() => {
        this._startChatroom();
      });
    }, 2500);
  }

  _startChatroom() {
    this.nav.push(ChatroomShowPage, {
      provider: {
        name: 'Peter'
      },
      question: this.question
    });
  }
}
