import logo from './logo.svg';
import './App.css';
import { Image, Select, Radio, Col, Row, Typography, List, Avatar, Card, Calendar, Badge, DatePicker } from 'antd';

import { PlusCircleFilled, WarningFilled, QuestionCircleOutlined, CloseCircleOutlined, CheckCircleFilled } from '@ant-design/icons';
import moment from 'moment';

import 'antd/dist/antd.min.css'; // or 'antd/dist/antd.less'
import ColumnGroup from 'antd/lib/table/ColumnGroup';


function getListData(value) {
  let listData;

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
  
  return listData || [];
}

function onPanelChange(value, mode) {
  console.log(value, mode);
}

function onSelect(value) {
  console.log(value);
  
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

function headerRender(value) {
  const start = 0;
  const end = 12;
  const monthOptions = [];

  console.log(value.value.format("YYYY-MM-DD"));
  const current = value.value.clone();
  const localeData = value.value.localeData();

  // Prepare Select Option for month
  const months = [];
  for (let i = 0; i < 12; i++) {
    current.month(i);
    months.push(localeData.monthsShort(current));
  }
  for (let index = start; index < end; index++) {
    monthOptions.push(
      <Select.Option className="month-item" key={`${index}`}>
        {months[index]}
      </Select.Option>,
    );
  }
  const month = value.value.month();

  // Prepare Select Option for year
  const year = value.value.year();
  const options = [];
  for (let i = year - 10; i < year + 10; i += 1) {
    options.push(
      <Select.Option key={i} value={i} className="year-item">
        {i}
      </Select.Option>,
    );
  }
  return (
    <div style={{ padding: 8 }}>
      <Typography.Title level={4}>Site Records</Typography.Title>
      <Row gutter={8}>
        <Col>
          <Radio.Group size="small" onChange={e => value.onTypeChange(e.target.value)} value={value.type}>
            <Radio.Button value="month">Month</Radio.Button>
            <Radio.Button value="year">Year</Radio.Button>
          </Radio.Group>
        </Col>
        <Col>
          <Select
            size="small"
            dropdownMatchSelectWidth={false}
            className="my-year-select"
            onChange={newYear => {
              const now = value.value.clone().year(newYear);
              value.onChange(now);
            }}
            value={String(year)}
          >
            {options}
          </Select>
        </Col>
        <Col>
          <Select
            size="small"
            dropdownMatchSelectWidth={false}
            value={String(month)}
            onChange={selectedMonth => {
              const newValue = value.value.clone();
              newValue.month(parseInt(selectedMonth, 10));
              value.onChange(newValue);
            }}
          >
            {monthOptions}
          </Select>
        </Col>
        <Col >
          <PlusCircleFilled style={{ fontSize: '30px', color: '#08c' }}/>
        </Col>
      </Row>
    </div>
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
            headerRender={headerRender}
            dateCellRender={dateCellRender}
            fullscreen={false}
            onPanelChange={onPanelChange}
            onSelect={onSelect}
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
            <div>Buidge No.37</div>
            <div>地點 2 地點 2 地點 2 地點 2 地點 2</div>
            <div>位置 3</div>
            <div>測試123123123</div>
            <div>Labour: 7</div>
            <div>Plant: Backhoe BS-001</div>
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
            <div>Buidge No.37</div>
            <div>地點 2 地點 2 地點 2 地點 2 地點 2</div>
            <div>位置 3</div>
            <div>測試123123123</div>
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


