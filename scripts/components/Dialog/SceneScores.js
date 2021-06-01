import React from 'react';
import { H5PContext } from "../../context/H5PContext";

export default class SceneTotalScores extends React.Component {
  constructor(props) {
    super(props);
  }
  
  getSceneTitle(sceneId, sceneTitle){
    if(sceneTitle !== undefined && sceneTitle !== ""){
      return `Scene: ${sceneTitle}`
    }
    return `Scene: ${sceneId}`
  }

  render() {
    console.log(this.props);
    console.log("context", this.context);
    const sceneTitle = this.getSceneTitle(this.props.sceneId, this.props.sceneScores.title);
    const totalScore = 0;
    const items = []
    for (const [scoreId, score] of Object.entries(this.props.sceneScores)){
      if(scoreId !== "title"){
        items.push(<tr><td class="h5p-td h5p-summary-task-title">{score.title ? score.title : scoreId}</td><td class="h5p-td h5p-summary-score-bar">{score.raw}/{score.max}</td></tr>)
      }
    }
    return (
      <tbody>
        <tr><td class="h5p-td h5p-summary-task-title" colSpan={2}>{sceneTitle}</td></tr>
        {items}
        {/* <tr><td>Total</td><td>{totalScore}</td></tr> */}
      </tbody>
    );
  }
}

SceneTotalScores.contextType = H5PContext;


