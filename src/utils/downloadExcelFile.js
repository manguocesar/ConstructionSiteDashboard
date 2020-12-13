import axios from "axios";
import moment from "moment";

const downloadExcelFile = async (url, filename) => {
  const { data } = await axios.get(url, {
    responseType: "arraybuffer",
  });
  var downloadLink = document.createElement("a");
  downloadLink.href = window.URL.createObjectURL(new Blob([data]));
  downloadLink.download = filename;
  document.body.appendChild(downloadLink);
  downloadLink.click();
  document.body.removeChild(downloadLink);
};

export const convertDateFilename = (filename) => {
  return `${filename}_${moment().format("YYYYMMDD")}.xlsx`;
};

export default downloadExcelFile;
