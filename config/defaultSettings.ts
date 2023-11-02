import { Settings as LayoutSettings } from '@ant-design/pro-components';

const Settings: LayoutSettings & {
  pwa?: boolean;
  logo?: string;
} = {
  navTheme: 'light',
  // 拂晓蓝
  primaryColor: '#1890ff',
  layout: 'mix',
  contentWidth: 'Fluid',
  fixedHeader: false,
  fixSiderbar: true,
  colorWeak: false,
  title: 'Pgeorge用户中心',
  pwa: false,
  logo: 'https://pgeorge-1310330018.cos.ap-chongqing.myqcloud.com/202311020941065.png',
  iconfontUrl: 'http://localhost:8000/welcome',
};

export default Settings;
