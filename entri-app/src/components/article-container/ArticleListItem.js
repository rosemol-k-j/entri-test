import React from "react";
import { Card, Typography, Tooltip } from "antd";
import moment from "moment";

function ArticleListItem(article) {
  return (
    <a href={article.article.url} target="blank" rel="noopener noreferer">
      <Card>
        <div className="listItem">
          <div className="itemContent">
            <div className="articleHead">
              <Typography.Title>{article.article.title}</Typography.Title>
              <Typography.Text className="sourceName">
                {article.article.source.name}
              </Typography.Text>
              <Typography.Text className="publishDate">
                <Tooltip
                  title={moment(
                    article.article.publishedAt.slice(0, -1)
                  ).fromNow()}
                >
                  {moment(article.article.publishedAt.slice(0, -1)).format(
                    "LL"
                  )}
                </Tooltip>
              </Typography.Text>
            </div>
            <Typography.Paragraph>
              {article.article.content}
            </Typography.Paragraph>
          </div>
          <img
            src={article.article.urlToImage}
            alt="Girl in a jacket"
            width="500"
            height="600"
          />
        </div>
      </Card>
    </a>
  );
}

export default ArticleListItem;
