<script type='text/jsx'>
export default {
  name: "Hello",
  data() {
    return {
      num: 123,
      list: [1, 2, 3, 4, 5, 6, 7]
    };
  },
  props: {
    level: {
      type: Number,
      required: true
    }
  },
  render() {
    // var getChildrenTextContent = function(children) {
    //   return children.map(function(node) {
    //       return node.children ? getChildrenTextContent(node.children) : node.text;
    //     })
    //     .join("");
    // };

    function test(n) {
      return <p>这是你输入的参数：{n}</p>;
    }

    return (
      <div>
        {test(1 + 2)}
        {this.list}
      </div>
    );
  }
};
</script>