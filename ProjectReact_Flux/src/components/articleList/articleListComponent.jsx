import './styles';

import Article from '../article/articleComponent';
import * as ArticleActions from '../../actions/article';
import ArticleStore from '../../stores/article';
import { autobind } from 'core-decorators';

@autobind()
export default class ArticleList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {articles: []};

    ArticleActions.fetchArticles();

  }

  update() {
    this.setState({
      articles: ArticleStore.getArticles()
    });
  }

  componentWillMount() {
    ArticleStore.addListener('change', this.update);
  }

  componentWillUnmount() {
    ArticleStore.removeListener('change', this.update);
  }

  addArticle() {
    ArticleActions.addArticle({
      body: this.refs.body.value, 
      title: this.refs.title.value
    });
    this.refs.title.value = '';
    this.refs.body.value = '';
  }

  removeArticle(articleId) {
    ArticleActions.removeArticle(articleId);
  }

  render() {
    let articles = this.state.articles.map(
      (article, index) => 
      <Article key={index} 
                remove={this.removeArticle} 
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