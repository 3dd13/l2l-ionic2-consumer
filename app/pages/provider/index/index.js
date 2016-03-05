import {Page, NavController, NavParams} from 'ionic-angular';
import {ProviderShowPage} from '../show/show';


@Page({
  templateUrl: 'build/pages/provider/index/index.html'
})
export class ProviderIndexPage {
  static get parameters() {
    return [[NavController], [NavParams]];
  }

  constructor(nav, navParams) {
    this.nav = nav;

    this.providers = [];
    for(let i = 1; i < 4; i++) {
      this.providers.push({
        name: 'Expert ' + i,
        description: 'I am the #' + i
      });
    }
  }

  providerTapped(event, provider) {
    this.nav.push(ProviderShowPage, {
      provider: provider
    })
  }
}
