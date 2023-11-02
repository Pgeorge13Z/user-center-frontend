import { outLogin } from '@/services/ant-design-pro/api';
import { LogoutOutlined, SettingOutlined, UserOutlined  } from '@ant-design/icons';
import {Avatar, Menu, Spin} from 'antd';
import type { ItemType } from 'antd/lib/menu/hooks/useItems';
import { stringify } from 'querystring';
import type { MenuInfo } from 'rc-menu/lib/interface';
import React, { useCallback } from 'react';
import { history, useModel } from 'umi';
import HeaderDropdown from '../HeaderDropdown';
import styles from './index.less';
// import {ProFormUploadDragger} from "@ant-design/pro-components";

export type GlobalHeaderRightProps = {
  menu?: boolean;
};

/**
 * 退出登录，并且将当前的 url 保存
 */
const loginOut = async () => {
  await outLogin();
  const { query = {}, search, pathname } = history.location;
  const { redirect } = query;
  // Note: There may be security issues, please note
  if (window.location.pathname !== '/user/login' && !redirect) {
    history.replace({
      pathname: '/user/login',
      search: stringify({
        redirect: pathname + search,
      }),
    });
  }
};

const AvatarDropdown: React.FC<GlobalHeaderRightProps> = ({ menu }) => {
    const { initialState, setInitialState } = useModel('@@initialState');

    // 推出登录
    const onMenuClick = useCallback(
        (event: MenuInfo) => {
            const { key } = event;
            if (key === 'logout') {
                setInitialState((s) => ({ ...s, currentUser: undefined }));
                loginOut();
                return;
            }
            history.push(`/account/${key}`);
        },
        [setInitialState],
    );

    const loading = (
        <span className={`${styles.action} ${styles.account}`}>
      <Spin
          size="small"
          style={{
              marginLeft: 8,
              marginRight: 8,
          }}
      />
    </span>
    );

    if (!initialState) {
        return loading;
    }

    const { currentUser } = initialState;

    if (!currentUser || !currentUser.username) {
        return loading;
    }

    const menuItems: ItemType[] = [
        ...(menu
            ? [
                {
                    key: 'center',
                    icon: <UserOutlined />,
                    label: '个人中心',
                },
                {
                    key: 'settings',
                    icon: <SettingOutlined />,
                    label: '个人设置',
                },
                {
                    type: 'divider' as const,
                },
            ]
            : []),
        {
            key: 'logout',
            icon: <LogoutOutlined />,
            label: '退出登录',
        },
    ];

    const menuHeaderDropdown = (
        <Menu className={styles.menu} selectedKeys={[]} onClick={onMenuClick} items={menuItems} />
    );

    return (
        <HeaderDropdown overlay={menuHeaderDropdown}>
      <span className={`${styles.action} ${styles.account}`}>
        <Avatar size="small" className={styles.avatar} src={currentUser.avatarUrl} alt="avatar" />
        <span className={`${styles.name} anticon`}>{currentUser.username}</span>
      </span>
        </HeaderDropdown>
    );
};

export default AvatarDropdown;


// const AvatarDropdown: React.FC<GlobalHeaderRightProps> = ({ menu }) => {
//     const { initialState, setInitialState } = useModel('@@initialState');
//
//     const onMenuClick = useCallback(
//         async (event: MenuInfo) => {
//             const { key } = event;
//             if (key === 'logout') {
//                 setInitialState((s) => ({ ...s, currentUser: undefined }));
//                 loginOut();
//                 return;
//             } else if (key === 'changeAvatar') {
//                 // 打开上传头像的对话框
//
//                 // 创建一个回调函数，用于处理头像上传结果
//                 const handleAvatarUpload = async (newAvatar: File | null) => {
//                     if (newAvatar) {
//                         // 调用后端接口上传头像文件
//                         const formData = new FormData();
//                         formData.append('file', newAvatar);
//
//                         try {
//                             // 使用 fileUpload API 上传头像文件
//                             const response = await fileUpload(formData);
//
//                             if (response && response.data) {
//                                 // 更新用户头像URL
//                                 setInitialState((s) => ({ ...s, currentUser: { ...s.currentUser, avatarUrl: response.data } }));
//                             } else {
//                                 // 处理上传失败的情况
//                                 // 可以显示错误信息或采取其他适当的措施
//                             }
//                         } catch (error) {
//                             // 处理上传失败的情况
//                             // 可以显示错误信息或采取其他适当的措施
//                         }
//                     }
//                 };
//
//                 // 示例：使用 Modal 对话框
//                 Modal.info({
//                     title: '上传头像',
//                     content: (
//                         <ProFormUploadDragger
//                             name="avatarUrl" // 与表单字段名一致
//                             label="用户头像"
//                             // 可添加其他属性和规则
//                             onUpload={(newAvatar) => handleAvatarUpload(newAvatar)}
//                         />
//                     ),
//                     onOk() {},
//                 });
//             } else {
//                 history.push(`/account/${key}`);
//             }
//         },
//         [setInitialState],
//     );
//
//
//
//     const loading = (
//     <span className={`${styles.action} ${styles.account}`}>
//       <Spin
//         size="small"
//         style={{
//           marginLeft: 8,
//           marginRight: 8,
//         }}
//       />
//     </span>
//   );
//     const AvatarDropdown: React.FC<GlobalHeaderRightProps> = ({ menu }) => {
//         const { initialState, setInitialState } = useModel('@@initialState');
//
//         // 推出登录
//         const onMenuClick = useCallback(
//             (event: MenuInfo) => {
//                 const { key } = event;
//                 if (key === 'logout') {
//                     setInitialState((s) => ({ ...s, currentUser: undefined }));
//                     loginOut();
//                     return;
//                 }
//                 history.push(`/account/${key}`);
//             },
//             [setInitialState],
//         );
//
//         const loading = (
//             <span className={`${styles.action} ${styles.account}`}>
//       <Spin
//           size="small"
//           style={{
//               marginLeft: 8,
//               marginRight: 8,
//           }}
//       />
//     </span>
//         );
//
//         if (!initialState) {
//             return loading;
//         }
//
//   if (!initialState) {
//     return loading;
//   }
//
//   const { currentUser } = initialState;
//
//   if (!currentUser || !currentUser.username) {
//     return loading;
//   }
//
//   const menuItems: ItemType[] = [
//     ...(menu
//       ? [
//           {
//             key: 'center',
//             icon: <UserOutlined />,
//             label: '个人中心',
//           },
//           {
//             key: 'settings',
//             icon: <SettingOutlined />,
//             label: '个人设置',
//           },
//           {
//             type: 'divider' as const,
//           },
//         ]
//       : []),
//       {
//           key: 'changeAvatar',
//           icon: <UploadOutlined />,
//           label: '更改头像',
//           // onClick: () => {
//           //     // 打开上传头像的对话框
//           //     // 示例：调用一个函数来显示上传对话框
//           //     showAvatarUploadDialog();
//           // },
//       },
//     {
//       key: 'logout',
//       icon: <LogoutOutlined />,
//       label: '退出登录',
//     },
//   ];
//
//   const menuHeaderDropdown = (
//     <Menu className={styles.menu} selectedKeys={[]} onClick={onMenuClick} items={menuItems} />
//   );
//
//   return (
//     <HeaderDropdown overlay={menuHeaderDropdown}>
//       <span className={`${styles.action} ${styles.account}`}>
//         <Avatar size="small" className={styles.avatar} src={currentUser.avatarUrl} alt="avatarUrl" />
//         <span className={`${styles.name} anticon`}>{currentUser.username}</span>
//       </span>
//     </HeaderDropdown>
//   );
// };
//
// export default AvatarDropdown;
