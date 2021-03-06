/**
 * Created by xiejing on 2018/12/11.
 */
var Random = Mock.Random;
const rurl = "/screen/psgSecCheckAnalysis";
const rtype = "get";

function createResult() {
  let result = {
    internal: {
      total: 20,
      open: Random.integer(0, 20),
      waitTime: Random.integer(0, 15)
    },
    international: {
      total: 20,
      open: Random.integer(0, 20),
      waitTime: Random.integer(0, 15)
    }
  };
  return result;
}

const cb = e => {
  let template = {
    code: 0,
    msg: "调用成功!",
    result: {
      internal: { open: 14, total: 20, waitTime: 6 },
      international: { open: 11, total: 20, waitTime: 8 }
    }
  };
  return template;
};
export { rurl, rtype, cb };
