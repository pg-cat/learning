import {
  Upload, Tree, Button, Icon,
} from 'antd';


const { TreeNode } = Tree;

// export default () => {
//   return (
//     <Tree
//       showLine
//       defaultExpandedKeys={['0-0']}
//     >
//       <TreeNode title="树尖" key="0-0">
//         <TreeNode title="树尖01" key="0-0-0" />
//         <TreeNode title="树尖01" key="0-0-1" />
//       </TreeNode>
//       <TreeNode title="树主干" key="0-1">
//         <TreeNode title="树杈01" key="0-0-0" />
//         <TreeNode title="树杈01" key="0-0-1" />
//       </TreeNode>
//       <TreeNode title="树根" key="0-2">
//         <TreeNode title="树根01" key="0-0-0" />
//         <TreeNode title="树根01" key="0-0-1" />
//       </TreeNode>
//     </Tree>
//   )
// }


class Demo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      expandedKeys: ['0-0', '0-2']
    }
  }

  // 接收原本的展开事件，在 state 中记录 expandedKeys
  onExpand = (expandedKeys) => {
    this.setState({ expandedKeys });
  }

  // 接收选中事件，修改 expandedKeys
  onSelect = (selectedKeys) => {
    const { expandedKeys } = this.state;
    const key = selectedKeys[0];

    if (expandedKeys.includes(key)) {
      // 移除 key
      this.setState({
        expandedKeys: expandedKeys.filter(k => k !== key),
      });
    } else {
      // 添加 key
      this.setState({
        expandedKeys: [...expandedKeys, key]
      });
    }
  }

  render() {
    return (
      <div>
        <Tree
          showLine
          expandedKeys={this.state.expandedKeys}
          selectedKeys={[]}
          onExpand={this.onExpand}
          onSelect={this.onSelect}
        >
          <TreeNode title="树" key="0">
            <TreeNode title="树尖" key="0-0">
              <TreeNode title="树尖01" key="0-0-0">
                <TreeNode title="树尖001" key="0-0-0-0" />
                <TreeNode title="树尖002" key="0-0-0-1" />
                <TreeNode title="树尖003" key="0-0-0-2" />
              </TreeNode>
              <TreeNode title="树尖02" key="0-0-1" />
            </TreeNode>
            <TreeNode title="树主干" key="0-1">
              <TreeNode title="树尖01" key="0-1-0">
                <TreeNode title="树尖001" key="0-1-0-0" />
                <TreeNode title="树尖002" key="0-1-0-1" />
                <TreeNode title="树尖003" key="0-1-0-2" />
              </TreeNode>
              <TreeNode title="树杈01" key="0-1-1" />
            </TreeNode>
            <TreeNode title="树根" key="0-2">
              <TreeNode title="树根01" key="0-2-0" />
              <TreeNode title="树根01" key="0-2-1" />
            </TreeNode>
          </TreeNode>
        </Tree>
        <Upload>
          <Button>
            <Icon type="upload" /> Click to Upload
          </Button>
        </Upload>
      </div>
    );
  }
}

export default Demo;