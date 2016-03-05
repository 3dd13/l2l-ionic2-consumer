import {Page, NavController, NavParams} from 'ionic-angular';
import {Http, RequestMethod} from 'angular2/http';
import {MatchingIndexPage} from '../../matching/index/index';


@Page({
  templateUrl: 'build/pages/search-result/index/index.html'
})
export class SearchResultIndexPage {
  static get parameters() {
    return [[NavController], [NavParams], [Http]];
  }

  constructor(nav, navParams, http) {
    this.nav = nav;
    this.http = http;

    this.question = navParams.get('question');

    this._doSearch(this.question);
  }

  // TODO change to service injectable
  _doSearch(question) {
    const googleApiKey = 'YOUR_GOOGLE_API_KEY';
    const customSearchEngine = 'YOUR_CSE_ID';
    const queryString = question.text + ' ' + question.subject;
    const searchUrl = `https://www.googleapis.com/customsearch/v1?key=${googleApiKey}&cx=${customSearchEngine}&q=${queryString}`;
    const options = {
      method: RequestMethod.Get
    };

    return this.http.get(searchUrl, options).subscribe(
      res => {
        this.items = res.json().items.map((item) => {
          return {
            title: item.title,
            snippet: item.snippet,
            url: item.formattedUrl
          }
        })
      }
    )
  }

  goToMatchingIndexPage() {
    this.nav.push(MatchingIndexPage, {
      question: this.question
    });
  }

  itemTapped(event, item) {
    // TODO opens in inappbrowser
    // cordova.InAppBrowser.open(item.url, "_system", "location=true");
    window.location = item.url;
  }
}
