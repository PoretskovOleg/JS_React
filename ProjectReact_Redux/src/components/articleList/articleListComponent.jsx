import './styles';

import Article from '../article/articleComponent';
import * as ArticleActions from '../../actions/article';
import {connect} from 'react-redux';
import { autobind } from 'core-decorators';


@connect(
  store => {
    return {
      articles: store.article.articles,
      is_loading: store.article.articles_is_loading,
      error: store.article.error
    }
})
@autobind()
export default class ArticleList extends React.Component {
  constructor(props) {
    super(props);

    this.props.dispatch(
      ArticleActions.fetchArticles()
    )
  }

  addArticle() {
    let lastId = Math.max.apply(
        Math, 
        this.props.articles.map( item => item.id)
      );
    this.props.dispatch(
      ArticleActions.addArticle({
        body: this.refs.body.value, 
        title: this.refs.title.value,
        id: ++lastId
      })
    );
    this.refs.title.value = '';
    this.refs.body.value = '';
  }

  removeArticle(articleId) {
    this.props.dispatch(
      ArticleActions.removeArticle(articleId)
    );
  }

  addLike(articleId) {
    this.props.dispatch(
      ArticleActions.addLike(articleId)
    );
  }

  render() {
    if (this.props.is_loading) {
      return (
        <h1> ИДЕТ ЗАГРУЗКА... </h1>
      );
    };
    
    if (this.props.error) {
      return (
        <h1> ОШИБКА ЗАГРУЗКИ </h1>
      );
    };

    let articles = this.props.articles.map(
      (article, index) => 
      <Article key={index}
            remove = {this.removeArticle}
            addLike = {this.addLike}
            { ...article } 
      />
    );
    return (
      <div>
        <ul class="article-list">
          {articles}
        </ul>
        <div class="add-comment">
          <div class="row">
            <form class="col-lg-12">
              <div class="form-group">
                <label htmlFor="title" class="control-label">Message Header</label>
                <input ref="title" type="text" name="title" id="title" class="form-control" />
              </div>
              <div class="form-group">
                <label htmlFor="body" class="control-label">Message Body</label>
                <textarea ref="body" type="text" name="body" id="body" class="form-control" />
              </div>
              <div>
                <button type="button" class="btn btn-success btn-block" onClick={this.addArticle}>
                  Add Comment
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
};