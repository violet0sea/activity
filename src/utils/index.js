export const env = location.hostname.startsWith('activity') ? 'production' : 'development';


/**
 * 生成4位随机后缀[0-9|a-z|A-Z]
 */
function randomId(len = 4) {
    let str = "";
    const arr =  ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

    while(len--) {
        const range = Math.floor(Math.random() * 62);
        str += arr[range];
    }
    
    return str;
}

/**
 * 客户端默认名字拼随机后缀
 */
export function rename(originName) {
    let formatName = '';
    const randSuffix = randomId();

    if(originName.length > 10) {
        formatName = originName.slice(0, 8);
        formatName += '...' + randSuffix;
    } else {
        formatName += originName + ' ' + randSuffix;
    }

    return formatName;
}

/**
 * 一位日期补0
 */

 function format2Two(number) {
    let str = '' + number;
    if(str.length === 1) {
        str = '0' + str;
    }
    return str;
}

/**
 * 时间格式化 MM/DD/YYYY
 */

export function getFormatDate(timeStamp) {
    const date = new Date(timeStamp);
    const year = date.getFullYear();
    const month = format2Two(date.getMonth() + 1);
    const day = format2Two(date.getDate());
    return `${month}/${day}/${year}`;
}


/**
 * 小米登陆后通过cookie获取用户信息
 */
export function getMiAccountByWebLogin() {
    let userInfo;
    try {
      userInfo = getCookie('userInfo');
    } catch(err) {
      userInfo = null;
    }
    if(userInfo) {
      const miInfo = JSON.parse(userInfo);
      const { userId, nickName } = miInfo;
      console.log('miinfo', userId, nickName, miInfo)
  
      if(/^\d+$/.test(userId)) {
        const miAccount = {
          account: userId,
          name: nickName,
          photo: ''
        }
        store.set('miAccount', miAccount);
      }
    }
  }
  
  function getCookie(name) { 
      var arr,reg=new RegExp("(^| )"+name+"=([^;]*)(;|$)");
   
      if(arr=document.cookie.match(reg))
          return decodeURIComponent(arr[2]); 
      else 
          return null; 
  } 



/**
 * JS调用快传原生app的接口
 */
function getInfoByfunc(funcName, data) {
    return new Promise((res, rej) => {
        WebViewJavascriptBridge.callHandler(
            funcName
            , data
            , function(responseData) {
               res(JSON.parse(responseData));
            }
        );
    });
}

export function getDeviceId() {
    return getInfoByfunc('getDeviceId', {});
}

export function hasRenamed() {
    return getInfoByfunc('hasRenamed', {});
}

export function syncTransRecords() {
    return getInfoByfunc('syncTransRecords', {activityId: 3});
}


export function setName(data) {
    return getInfoByfunc('setName', data);
}

export function goHome() {
    return getInfoByfunc('goHome', {});
}

export function toast(str) {
    return getInfoByfunc('toast', {text: str, duration: 0});
}




