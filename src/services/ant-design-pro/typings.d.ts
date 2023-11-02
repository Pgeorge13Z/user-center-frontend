// @ts-ignore
/* eslint-disable */

declare namespace API {
  type CurrentUser = {
    id: number;
    username: string;
    userAccount: string;
    avatarUrl? : string;
    gender: number;
    userPassword: string;
    phone?: string;
    email? :string;
    userStatus: number;
    createTime:Date;
    userRole : number;
    planetCode : string;
  };

  type ModifyPasswordParam = {
    userPassword: string;
    newPassword: string;
  };

  type CreateParams = {
    username: string;
    userAccount: string;
    avatarUrl? : string;
    gender: number;
    userPassword: string;
    phone?: string;
    email? :string;
    userStatus: number;
    createTime:Date;
    userRole : number;
    planetCode : string;
  };

  type LoginResult = {
    status?: string;
    type?: string;
    currentAuthority?: string;
  };

  type RegisterResult = number;

  type PageParams = {
    current?: number;
    pageSize?: number;
  };

  /**
   * 上传头像
   */
  type FileUpload = {
    file?: File;
  };


  /**
   * 删除的参数
   */
  type DeleteParam = {
    id: number;
  };

  type RuleListItem = {
    key?: number;
    disabled?: boolean;
    href?: string;
    avatar?: string;
    name?: string;
    owner?: string;
    desc?: string;
    callNo?: number;
    status?: number;
    updatedAt?: string;
    createdAt?: string;
    progress?: number;
  };

  type RuleList = {
    data?: RuleListItem[];
    /** 列表的内容总数 */
    total?: number;
    success?: boolean;
  };

  /**
   * 对接后端的通用返回类
   */
  type BaseResponse<T> = {
    code: number,
    data: T,
    message: string,
    description: string,
  }

  type FakeCaptcha = {
    code?: number;
    status?: string;
  };

  type LoginParams = {
    userAccount?: string;
    userPassword?: string;
    autoLogin?: boolean;
    type?: string;
  };

  type RegisterParams = {
    userAccount?: string;
    userPassword?: string;
    checkPassword?: boolean;
    planetCode?: string;
    type?: string;
  };

  type SearchParams = {
    username: string;
    userAccount: string;
    phone?: string;
    email? :string;
    planetCode : string;
  };

  type ErrorResponse = {
    /** 业务约定的错误码 */
    errorCode: string;
    /** 业务上的错误信息 */
    errorMessage?: string;
    /** 业务上的请求是否成功 */
    success?: boolean;
  };

  type NoticeIconList = {
    data?: NoticeIconItem[];
    /** 列表的内容总数 */
    total?: number;
    success?: boolean;
  };

  type NoticeIconItemType = 'notification' | 'message' | 'event';

  type NoticeIconItem = {
    id?: string;
    extra?: string;
    key?: string;
    read?: boolean;
    avatar?: string;
    title?: string;
    status?: string;
    datetime?: string;
    description?: string;
    type?: NoticeIconItemType;
  };
}
