import { GithubOutlined } from '@ant-design/icons';
import { DefaultFooter } from '@ant-design/pro-components';
import {BLOG_URL} from "@/constant";
const Footer: React.FC = () => {
  const defaultMessage = 'Pgeorge出品';
  const currentYear = new Date().getFullYear();
  return (
    <DefaultFooter
      copyright={`${currentYear} ${defaultMessage}`}
      links={[
        {
          key: 'Blog',
          title: '个人博客',
          href: BLOG_URL,
          blankTarget: true,
        },
        {
          key: 'github',
          title: <GithubOutlined /> ,
          href: 'https://github.com/Pgeorge13Z',
          blankTarget: true,
        },
      ]}
    />
  );
};
export default Footer;
