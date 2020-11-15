import axios from 'axios';
import moment from 'moment';

const downloadExcelFile = async (url, filename) => {
  const { data } = await axios.get(url, {
    responseType: 'arraybuffer'
  })
  var downloadLink = document.createElement("a");
  downloadLink.href = window.URL.createObjectURL(new Blob([data]));
  downloadLink.download = filename;
  document.body.appendChild(downloadLink);
  downloadLink.click();
  document.body.removeChild(downloadLink);
} 

export const convertDateFilename = (url) => {
  const split = url.split('/');
  const filename = decodeURI(split[split.length - 1]);
  return filename.replace('.xlsx', `_${moment().format('YYYYMMDD')}.xlsx`)
}

export default downloadExcelFile;