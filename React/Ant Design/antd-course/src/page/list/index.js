import SampleChart from '../../components/SampleChart'

import React from 'react';
import { connect } from 'dva';
import { Table, Modal, Button, Form, Input } from 'antd';
const FormItem = Form.Item;

function mapStateToProps(state) {
  return {
    // cardsList: state.cards.cardsList,
    ...state.cards,
    cardsLoading: state.loading.effects['cards/queryList']
  }
}

class List extends React.Component {
  columns = [
    {
      title: '名称',
      dataIndex: 'name',
    },
    {
      title: '描述',
      dataIndex: 'desc',
    },
    {
      title: '链接',
      dataIndex: 'url',
      render: value => <a href={value}>{value}</a>
    },
    {
      title: '',
      dataIndex: '_',
      render: (_, { id }) => {
        return (
          <Button onClick={() => { this.showStatistic(id); }}>图表</Button>
        )
      }
    }
  ]

  state = {
    visible: false,
    statisticVisible: false,
    id: null
  }

  showModal = () => {
    this.setState({ visible: true })
  }

  handleCancel = () => {
    this.setState({ visible: false })
  }

  handleOk = () => {
    const { dispatch, form: { validateFields } } = this.props;

    validateFields((err, values) => {
      if (!err) {
        dispatch({
          type: 'cards/addOne',
          payload: values,
        });
        // 重置 `visible` 属性为 false 以关闭对话框
        this.setState({ visible: false })
      }
    })
  }

  componentDidMount() {
    this.props.dispatch({
      type: 'cards/queryList'
    })
  }

  showStatistic = (id) => {
    this.props.dispatch({
      type: 'cards/getStatistic',
      payload: id
    });
    // 更新 state，弹出包含图表的对话框
    this.setState({ id, statisticVisible: true });
  }

  handleStatisticCancel = () => {
    this.setState({
      statisticVisible: false,
    })
  }

  render() {
    const { visible, statisticVisible, id } = this.state;
    const { cardsList, cardsLoading, form: { getFieldDecorator }, statistic } = this.props;

    return (
      <div>
        <Table
          columns={this.columns}
          dataSource={cardsList}
          loading={cardsLoading}
          rowKey='id'
        />
        <Button onClick={this.showModal}>新建</Button>
        <Modal
          destroyOnClose
          title="新建记录"
          visible={visible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
        >
          <Form>
            <FormItem label='名称'>
              {getFieldDecorator('name',{
                rules: [{ required: true, whitespace: true }]
              })(
                <Input />
              )}
            </FormItem>
            <FormItem label='描述'>
              {getFieldDecorator('desc')(
                <Input />
              )}
            </FormItem>
            <FormItem label='链接'>
              {getFieldDecorator('url',{
                rules: [{ type: 'url' }]
              })(
                <Input />
              )}
            </FormItem>
          </Form>
        </Modal>
        <Modal
          visible={statisticVisible}
          footer={null}
          onCancel={this.handleStatisticCancel}
        >
          {id ? <SampleChart data={statistic[id]} /> : ""}
        </Modal>
      </div>
    )
  }
}

export default connect(mapStateToProps)(Form.create()(List));