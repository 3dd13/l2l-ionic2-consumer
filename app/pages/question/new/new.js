import {Page, NavController} from 'ionic-angular';
import {SearchResultIndexPage} from '../../search-result/index/index';


@Page({
  templateUrl: 'build/pages/question/new/new.html'
})
export class QuestionNewPage {
  static get parameters() {
    return [[NavController]];
  }

  constructor(nav) {
    this.nav = nav;
    this.question = {
      text: '',
      subject: ''
    }
  }

  doCreate() {
    this.nav.push(SearchResultIndexPage, {
      question: this.question
    });
  }
}
