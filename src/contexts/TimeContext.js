import React, { createContext, useState } from "react";
import moment from "moment";
import "moment/locale/zh-cn";

export const TimeContext = createContext();

const TimeContextProvider = (props) => {
  moment.locale("zh-cn");
  const [chinaDate, setChinaDate] = useState();

  const interval = setInterval(() => {
    setChinaDate(moment().format("MMMM Do YYYY - h:mm:ss"));
    return () => {
      clearInterval(interval);
    };
  }, 1000);

  return (
    <TimeContext.Provider value={{ chinaDate }}>
      {props.children}
    </TimeContext.Provider>
  );
};

export default TimeContextProvider;
