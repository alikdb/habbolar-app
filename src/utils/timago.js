import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import "dayjs/locale/tr";

dayjs.extend(relativeTime);
dayjs.locale("tr");

const timeago = (date) => {
  return dayjs(date).fromNow();
};

export default timeago;
