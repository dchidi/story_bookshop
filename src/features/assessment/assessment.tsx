import React from "react";
import { Timer } from "./components/Timer";
import { AssessmentOption } from "./components/AssessmentOption";

interface IAssessmentProps {}

const Assessment: React.FC<IAssessmentProps> = ({}) => {
  return (
    <div>
      <div></div>
      <div>
        <div></div>
        <div>
          <AssessmentOption
            label="A"
            value="Joy is coming"
            isSelected={false}
          />
          <AssessmentOption
            label="B"
            value="Joy is coming"
            isSelected={false}
          />
          <AssessmentOption
            label="C"
            value="Joy is coming"
            isSelected={false}
          />
          <AssessmentOption
            label="D"
            value="Joy is coming"
            isSelected={false}
          />
          <AssessmentOption
            label="E"
            value="Joy is coming"
            isSelected={false}
          />
          <AssessmentOption
            label="F"
            value="Joy is coming"
            isSelected={false}
          />
        </div>
        <div>
          <div>
            <div>Timer</div>
            <Timer hours={0} minutes={0} seconds={10} strictMode={true} />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Assessment;
