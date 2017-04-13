'use strict';

import './style';

export default class Footer extends React.Component {
  render() {
    return (
      <footer>
        <div class="blog-footer">
          <p>Blog template built for <a href="http://getbootstrap.com">Bootstrap</a> by <a href="https://twitter.com/mdo">@mdo</a>.</p>
          <p>
            <a href="#">Back to top</a>
          </p>
        </div>
      </footer>
    );
  }
};