import {Link} from "react-router-dom";
import WhatWeDo from "../whatWeDo";
import { useState } from "react";
import LearnMoreCard from "./LearnMoreCard";

const LearnMoreBtn = ({videoTitle, video}) => {
  const [learnMore, setLearnMore] = useState(0);

  return (
    <div  className="mt-6">
        <Link to="/learnMore" className="text-gray-600 px-4 py-2 border-1 border-gray-600 rounded-sm font-medium">Learn More</Link>
    </div>
  )
}

export default LearnMoreBtn;