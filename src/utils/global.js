import { fetch } from './fetch';

export const MiGlobal = {
    install(Vue) {
      Vue.prototype.$MiGlobal = {
        fetch: fetch,
        userInfo: {
          uid: '',
          nickName: null,
          amount: 0,
          type: 1,
          value: 0
        }
      };
    }
};

export const eventBus = {
    install(Vue) {
        Vue.prototype.$bus = new Vue();
    }
}