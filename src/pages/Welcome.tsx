import { PageContainer } from '@ant-design/pro-components';
import { Alert, Card, Carousel, Image, Typography } from 'antd';
import React from 'react';
import { HeartTwoTone, SmileTwoTone } from '@ant-design/icons';

const Welcome: React.FC = () => {
  const contentStyle: React.CSSProperties = {
    margin: '5px',
    color: '#fff',
    textAlign: 'center',
    width: '1645px',
  };
  return (
    <>
      <PageContainer>
        <Card>
          <Alert
            message={'Pgeorge的统一后台管理中心'}
            type="success"
            showIcon
            banner
            style={{
              margin: -12,
              marginBottom: 10,
            }}
          />
          <Typography.Title
            level={1}
            style={{
              textAlign: 'center',
            }}
          >
            <SmileTwoTone /> Pgeorge用户中心管理 <HeartTwoTone twoToneColor="#eb2f96" />
          </Typography.Title>
        </Card>
        <Carousel autoplay autoplaySpeed={10000} style={contentStyle}>
          <div>
            <Image
              src={
                'https://pgeorge-1310330018.cos.ap-chongqing.myqcloud.com/202311012301112.jpg'
              }
            />
          </div>
          <div>
            <Image
              src={
                'https://pgeorge-1310330018.cos.ap-chongqing.myqcloud.com/202311012259720.jpg'
              }
            />
          </div>

        </Carousel>
      </PageContainer>
    </>
  );
};
export default Welcome;
