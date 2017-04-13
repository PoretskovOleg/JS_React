import './styles';

import { autobind } from 'core-decorators';

@autobind()
export default class Article extends React.Component {
  
  delete() {
    this.props.remove(this.props.id);
  }

  render() {
    return (
      <li class="article-listitem">
        <div class="row">
          <div class="col-lg-10">
            <h2 class="article-listitem-header text-center">
              {this.props.title}
            </h2>
          </div>
          <div class="col-lg-2">
            <button type="button" class="btn btn-danger" onClick={this.delete}> Удалить </button>
          </div>
        </div>
        <div class="row">
          <div class="col-lg-12">
            <hr />
          </div>
        </div>
        <div class="row">
          <div class="col-lg-12 col-lg-offset-2 article-listitem-body">
            {this.props.body}
          </div>
        </div>
      </li>
    );
  }
};

Article.propTypes = {
    title: React.PropTypes.string.isRequired,
    body: React.PropTypes.string.isRequired,
    id: React.PropTypes.number.isRequired,
};