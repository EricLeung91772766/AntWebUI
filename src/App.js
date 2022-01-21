import logo from './logo.svg';
import './App.css';
import { Image, List, Avatar, Card, Calendar, Badge, DatePicker } from 'antd';
import { WarningFilled, QuestionCircleOutlined, CloseCircleOutlined, CheckCircleFilled } from '@ant-design/icons';
import moment from 'moment';

import 'antd/dist/antd.min.css'; // or 'antd/dist/antd.less'
import ColumnGroup from 'antd/lib/table/ColumnGroup';

function getListData(value) {
  let listData;
  
  if (value.format("YYYY-MM-DD") == "2022-01-06") {
  console.log(value.format("YYYYMMDD"));
console.log("123123123123")
    listData = [
          { type: <WarningFilled style={{ fontSize: '20px', color: '#52c41a' }} />, content: '' },
    ];
  }
  else {
    switch (value.format("YYYYMMDD")) {
      case "20220108":
      case "20220110":
      case "20220115":
        listData = [
          { type: <CheckCircleFilled style={{ fontSize: '20px', color: '#52c41a' }} />, content: '' },
        ];
        break;
      
      case "20220105":
      case "20220107":
      case "20220120":
        listData = [
          { type: <QuestionCircleOutlined style={{ fontSize: '20px', color: '#f5222d' }} />, content: '' },
        ];
        break;
      case "20220102":
      case "20220104":
        listData = [
          { type: <WarningFilled style={{ fontSize: '20px', color: '#FAD02C' }} />, content: '' },
        ];
        break;
      default:
        listData = [
          { type: <CloseCircleOutlined style={{ fontSize: '20px', color: '#FFFFFF' }} />, content: '' },
        ];
    }
  }
  return listData || [];
}

function onPanelChange(value, mode) {
  console.log(value, mode);
}

function dateCellRender(value) {
  const listData = getListData(value);
  return (

    listData.map(item => (
      <Badge count={item.type} />
    ))
    // <ul className="events">
    //   {listData.map(item => (
    //     <li key={item.content}>
    //       <Badge status={item.type} text={item.content} />
    //     </li>
    //   ))}
    // </ul>
  );
}

function App() {
  
  const imageList = [
    {
      src: "https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png?x-oss-process=image/blur,r_50,s_50/quality,q_1/resize,m_mfit,h_50,w_50"
    },
    {
      src: "https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png?x-oss-process=image/blur,r_50,s_50/quality,q_1/resize,m_mfit,h_50,w_50"
    },
    {
      src: "https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png?x-oss-process=image/blur,r_50,s_50/quality,q_1/resize,m_mfit,h_200,w_200"
    },
    {
      src: "https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png?x-oss-process=image/blur,r_50,s_50/quality,q_1/resize,m_mfit,h_200,w_200"
    },
  ]

  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <div style={{
          padding: 10,
          width: '100%',
          
        }}>
          <Calendar
            dateCellRender={dateCellRender}
            fullscreen={false}
            onPanelChange={onPanelChange}
          />
        </div>
        <div style={{
          padding: 10,
          width: '100%',
          textAlign: 'left'
          //background: '#ececec',
        }}>
          <Card
            title="No.1  2022-01-21 Friday"
            size="small"
            bordered={false}
            style={{ width: '100%' }}
            
          >
            <div>Work Nature: Buidge No.37</div>
            <div>Location: 地點 2 地點 2 地點 2 地點 2 地點 2</div>
            <div>Sub Location: 位置 3</div>
            <div>Description of works: 測試123123123</div>
            <div>Labour: TESt x1, kjso x 2</div>
            <div>Plant: </div>
            <div style={{height: 10}}></div>
            <div style={{
              width: '100%',
            }}>
              <List
              grid={{ gutter: 1, column: 5 }}
              dataSource={imageList}
              renderItem={item => (
                <List.Item>
                  <Image
                    width={50}
                    src={item.src}
                  />
                </List.Item>
              )}
              />
            </div>
            
          </Card>
        </div>
        <div style={{
          padding: 10,
          width: '100%',
          textAlign: 'left'
          //background: '#ececec',
        }}>
          <Card
            title="No.2  2022-01-21 Friday"
            size="small"
            bordered={false}
            style={{ width: '100%' }}
            
          >
            <div>Work Nature: Buidge No.37</div>
            <div>Location: 地點 2 地點 2 地點 2 地點 2 地點 2</div>
            <div>Sub Location: 位置 3</div>
            <div>Description of works: 測試123123123</div>
            <div>Labour: TESt x1, kjso x 2</div>
            <div>Plant: </div>
            <div style={{height: 10}}></div>
            <div style={{
              width: '100%',
            }}>
              <List
              grid={{ gutter: 1, column: 5 }}
              dataSource={imageList}
              renderItem={item => (
                <List.Item>
                  <Image
                    width={50}
                    src={item.src}
                  />
                </List.Item>
              )}
              />
            </div>
            
          </Card>
        </div>
        {/* <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
      </header>
    </div>
  );
}


export default App;


