import { Tree } from 'antd';

export default () => {
  const TreeNode = Tree.TreeNode;
  return (
    <Tree
      expandedKeys={this.state.expandedKeys}
      selectedKeys={[]}
      onExpand={this.onExpand}
      onSelect={this.onSelect}
    >
      <TreeNode title="树尖" key="0-0">
        <TreeNode title="树尖01" key="0-0-0" />
        <TreeNode title="树尖01" key="0-0-1" />
      </TreeNode>
      <TreeNode title="树主干" key="0-0">
        <TreeNode title="树杈01" key="0-0-0" />
        <TreeNode title="树杈01" key="0-0-1" />
      </TreeNode>
      <TreeNode title="树根" key="0-0">
        <TreeNode title="树根01" key="0-0-0" />
        <TreeNode title="树根01" key="0-0-1" />
      </TreeNode>
    </Tree>
  )
}