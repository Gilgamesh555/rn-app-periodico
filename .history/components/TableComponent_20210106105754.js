import React, { Component } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Alert } from 'react-native';
import { Table, TableWrapper, Row, Cell } from 'react-native-table-component';
import citiesAPI from '../apis/Images'

export default class ExampleFour extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tableHead: ['Departamento', 'Casos', 'Recuperados', 'Muertos'],
      tableData: [
        ['1', '2', '3', '4'],
        ['a', 'b', 'c', 'd'],
        ['1', '2', '3', '4'],
        ['a', 'b', 'c', 'd'],
        ['a', 'b', 'c', 'd'],
        ['a', 'b', 'c', 'd'],
        ['a', 'b', 'c', 'd'],
        ['a', 'b', 'c', 'd'],
        ['a', 'b', 'c', 'd'],
      ],
      cities: [],
    }
  }
  componentDidMount(){
    citiesAPI.get('depa')
    .then(res => {
    const cities = res.data;
    this.setState({cities});
    }) 
  }

  _alertIndex(index) {
    Alert.alert(`This is row ${index + 1}`);
  }

  render() {
    const state = this.state;
    const element = (data, index) => (
      <TouchableOpacity onPress={() => this._alertIndex(index)}>
        <View style={styles.btn}>
          <Text style={styles.btnText}>button</Text>
        </View>
      </TouchableOpacity>
    );

    const array = []

    return (
      <View style={styles.container}>
        {/* {this.state.cities.map((data, key) => (
            console.log(Object.values((({departamento, confirmados, recuperados, muertos}) => ({departamento, confirmados, recuperados, muertos}))(data)))
        ))} */}
        <Table borderStyle={{borderColor: 'transparent'}}>
          <Row data={state.tableHead} style={styles.head} textStyle={styles.text}/>
          {
            state.cities.map((data, key) => (
                <TableWrapper key={key} style={styles.row}>
                {
                    <Text>GAA</Text>
                //   rowData.map((cellData, cellIndex) => (
                //     cellData = Object.values((({departamento, confirmados, recuperados, muertos}) => ({departamento, confirmados, recuperados, muertos}))(cellData)),
                //     <Cell key={cellIndex} {...console.log(cellData)} data={cellData} textStyle={styles.text}/>
                //   ))
                }
            //   </TableWrapper>
            ))
            // state.cities.map((rowData, index) => (
            //   <TableWrapper key={index} style={styles.row}>
            //     {
            //       rowData.map((cellData, cellIndex) => (
            //         cellData = Object.values((({departamento, confirmados, recuperados, muertos}) => ({departamento, confirmados, recuperados, muertos}))(cellData)),
            //         <Cell key={cellIndex} {...console.log(cellData)} data={cellData} textStyle={styles.text}/>
            //       ))
            //     }
            //   </TableWrapper>
            // ))
          }
        </Table>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, paddingTop: 30, backgroundColor: '#fff' },
  head: { height: 40, backgroundColor: '#808B97' },
  text: { margin: 6 },
  row: { flexDirection: 'row', backgroundColor: '#FFF1C1' },
  btn: { width: 58, height: 18, backgroundColor: '#78B7BB',  borderRadius: 2 },
  btnText: { textAlign: 'center', color: '#fff' }
});
