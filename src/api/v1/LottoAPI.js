import axios from "axios";
import { queryString } from "../../js/util.js";
/**
 * 로또번호 REST API
 */
const v1 = "/api/v1";
export default class LottoAPI {

  static getLottoNumberList({
    count,
  }) {
    return axios.get(
      `${v1}/lotto${queryString({
        count,
      })}`
    );
  }
}
