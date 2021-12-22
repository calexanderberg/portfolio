import React from "react";
import "../css/work.css";
import { work } from "../data/data";
import { Grid } from "semantic-ui-react";

export default class Work extends React.Component {
  render() {
    const workType = Object.values(work);
    return (
      <div className="work">
        {workType.map((item) => (
          <div>
            <h2 className="title">{item.title}</h2>
            <div>{experience(item.experience)}</div>
          </div>
        ))}
      </div>
    );
  }
}

const experience = (work_type) => {
  const workItems = Object.values(work_type);
  const columbCount = (index) => {
    if (workItems.length < 3) return 12 / workItems.length;
    else if (
      workItems.length % 3 != 0 &&
      index === workItems.length - (workItems.length % 3)
    )
      return 12 / (workItems.length % 3);
    else return 4;
  };

  const WorkItem = ({ picture, title, intro, source, date, path }) => {
    return (
      <a className="item" href={path} target="_blank">
        <div className="itemPic">
          <img src={picture} />
        </div>
        <div className="itemInfo">
          <div className="itemInfoLeft">
            <p>{title}</p>
            <p>{intro}</p>
          </div>
          <div className="itemInfoRight">
            <p>{source}</p>
            <p>{date}</p>
          </div>
        </div>
      </a>
    );
  };

  return (
    <Grid stackable centered>
      {workItems.map((item, index) => {
        return (
          <Grid.Column
            width={columbCount(index)}
            key={`item-${item[0]}`}
            className="work-item"
          >
            <WorkItem
              picture={item.picture}
              title={item.title}
              intro={item.intro}
              source={item.source}
              date={item.date}
              path={item.path}
            />
          </Grid.Column>
        );
      })}
    </Grid>
  );
};
