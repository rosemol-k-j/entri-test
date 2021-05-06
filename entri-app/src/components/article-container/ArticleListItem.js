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
                {/* shows the time that published with the time (eg:21 days ago) */}
                <Tooltip
                  title={moment(
                    article.article.publishedAt.slice(0, -1) //removing the last alphabet because a extra "Z" is presented and its giving wrong date (eg:"2021-04-21T03:36:04Z")
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
            alt="articleImage"
            width="500"
            height="600"
          />
        </div>
      </Card>
    </a>
  );
}

export default ArticleListItem;
