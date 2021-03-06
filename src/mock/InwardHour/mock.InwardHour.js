/**
 * Created by wanjikun on 2019/10/21.
 */
var Random = Mock.Random;
const rurl = '/screen/arrivalTotalAndDelayRate';
const rtype = 'get';

let template = {
    "code": 0,
    "msg": "调用TestMockGet接口成功！",
    "result": {}
}
const cb = (e) => {
    
    let time = [];
    let total = [];
    let delay = [];
    for (let i = 1; i < 13; i++) {
        time.push(i*2);
        total.push(Random.natural(1, 800));
        delay.push(Random.natural(1, 800));
    }

    const obj = {
        time:time,
        total:total,
        delay:delay
    }

    template.result = {
        "total": [
            37,
            22,
            16,
            5,
            9,
            13,
            3,
            11,
            19,
            28,
            22,
            36,
            39,
            41,
            2
        ],
        "delay": [
            6,
            7,
            9,
            4,
            1,
            1,
            2,
            2,
            2,
            4,
            8,
            13,
            11,
            10,
            0
        ],
        "time": [
            0,
            1,
            2,
            3,
            4,
            5,
            6,
            7,
            8,
            9,
            10,
            11,
            12,
            13,
            14
        ]
    };
    
    return template;
}
export {
    rurl,
    rtype,
    cb
};
