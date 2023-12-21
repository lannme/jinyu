const member = {
  storeId: null,
  mobilePhone: '18684932345',
  nickname: 'xlz',
  avatar: '/static/images/mine/default.jpg',
  country: '',
  cardName: 'V2',
  memberLevel: 2,
  city: '',
  cardNo: '39390020696322222',
  openingCardDate: '2018-10-20 15:10:10',
  customerId: '343400246943295100',
  district: null,
  unionId: '',
  address: null,
  storeName: null,
  gender: 1,
  province: '',
  memberOrigin: 'wechat',
  username: '我是新人',
  memberLevelName: 'VIP2',
  birthday: '',
  pointNum: 413,
  couponNum: 6,
  rechargeBalance: null,
  balance: 0,
  giftBalance: 0,
  expenseAmount: null,
  conditionType: 3,
  ruleList: null,
  expiredTime: null,
  currentValue: 410,
  level: 2,
  cardUrl: 'https://images.qmai.cn/s33123/2020/01/20/fd13fff0e873b8c06d.jpg',
  needValue: 90,
  max: false,
  isAttendance: false
};

/**
 * @description 获取用户信息
 */
export const userinfo = () => {
  return new Promise(resolve => resolve(member));
};
