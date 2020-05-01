/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

// 一个电影列表接口
const REQUEST_URL =
  "https://raw.githubusercontent.com/facebook/react-native/0.51-stable/docs/MoviesExample.json";

import React from "react";
import { AppRegistry, Image, StyleSheet, Text, View, FlatList } from "react-native";

export default class MM extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      data: [],
      loading: false
    };
    this.fetchData = this.fetchData.bind(this);
  }

  componentDidMount() {
    this.fetchData();
  }

  render() {
    if (!this.state.movies) {
      return this.renderLoadingView();
    }

    return (
      <FlatList
        data={this.state.data}
        renderItem={this.renderMovie}
        style={styles.list}
        keyExtractor={item => item.id}
      />
    )
  }

  fetchData() {
    fetch(REQUEST_URL)
      .then((Response) => Response.json())
      .then((ResponseData) => {
        this.setState({
          data: this.state.data.concat(ResponseData.movies),
          loading: true
        })
      })
  }

  renderLoadingView() {
    return (
      <View style={styles.container}>
        <Text>正在加载电影数据……</Text>
      </View>
    )
  }

  renderMovie({ item }) {
    return (
      <View style={styles.container}>
        <Image
          source={{ uri: item.posters.thumbnail }}
          style={styles.thumbnail}
        />
        <View style={styles.rightContainer}>
          <Text style={styles.title}>{item.title}</Text>
          <Text style={styles.year}>{item.year}</Text>
        </View>
      </View>
    )
  }

}

const styles = StyleSheet.create({
  list: {
    paddingTop: 20,
    backgroundColor: '#F5FCFF'
  },
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  },
  thumbnail: {
    width: 53,
    height: 81
  },
  rightContainer: {
    flex: 1
  },
  title: {
    fontSize: 20,
    marginBottom: 8,
    textAlign: 'center'
  },
  year: {
    textAlign: 'center'
  }
})

AppRegistry.registerComponent('MyApp', () => MM);
