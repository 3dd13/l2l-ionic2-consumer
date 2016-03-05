import {Page, NavController, NavParams} from 'ionic-angular';
import {Http, RequestMethod} from 'angular2/http';
import {SearchResultIndexPage} from '../index/index';


@Page({
  templateUrl: 'build/pages/search-result/show/show.html'
})
export class SearchResultShowPage {
  static get parameters() {
    return [[NavController], [NavParams]];
  }

  goToMatchingIndexPage() {

  }

  constructor(nav, navParams, http) {
    this.nav = nav;
    this.http = http;

    this.searchResult = navParams.get('searchResult');
  }
}
