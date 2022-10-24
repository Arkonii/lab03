/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React ,{Component} from 'react';
import type {Node} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Button,
  TouchableOpacity,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

function evil(fn) {
  return new Function('return ' + fn)();
}


export default class App extends Component{



  constructor() {
    super();
    this.state={
      resultText:"",
      calculationText:"0"
    }
  }

  calculateResult(){
    const text=this.state.resultText
    let wynik = evil(this.state.resultText).toString();
    this.setState({calculationText: wynik});
    this.setState({resultText: wynik});
  }

  buttonPressed(text){
    console.log(text)
    if(text=="="){
      return this.calculateResult()

    }
    this.setState({
      resultText: this.state.resultText+text
    })
  }
  operate(operation){
    switch(operation) {
      case "AC":
        this.setState({
          resultText: "",
          calculationText: "0"
        })
    }
  }

  render(){
    return(
        <View style={styles.conainer}>
          <View style={styles.result}>
            <Text style={styles.resultText}>{this.state.resultText}</Text>
          </View>
          <View style={styles.calculation}>
            <Text style={styles.calculationText}>{this.state.calculationText}</Text>
          </View>
          <View style={styles.buttons}>
            <View style={styles.numbers}>
              <View style={styles.row}>
                <TouchableOpacity onPress={()=>this.buttonPressed(7)} style={styles.btn}>
                  <Text>7</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>this.buttonPressed(8)} style={styles.btn}>
                  <Text>8</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>this.buttonPressed(9)} style={styles.btn}>
                  <Text>9</Text>
                </TouchableOpacity>
              </View>
              <View style={styles.row}>
                <TouchableOpacity onPress={()=>this.buttonPressed(4)} style={styles.btn}>
                  <Text>4</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>this.buttonPressed(5)}  style={styles.btn}>
                  <Text>5</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>this.buttonPressed(6)}  style={styles.btn}>
                  <Text>6</Text>
                </TouchableOpacity>
              </View>
              <View style={styles.row}>
                <TouchableOpacity onPress={()=>this.buttonPressed(1)}  style={styles.btn}>
                  <Text>1</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>this.buttonPressed(2)}  style={styles.btn}>
                  <Text>2</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>this.buttonPressed(3)}  style={styles.btn}>
                  <Text>3</Text>
                </TouchableOpacity>
              </View>
              <View style={styles.row}>
                <TouchableOpacity onPress={()=>this.buttonPressed(0)}  style={styles.btn}>
                  <Text>0</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>this.buttonPressed(".")}  style={styles.btn}>
                  <Text>.</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>this.buttonPressed("=")}  style={styles.btn}>
                  <Text>=</Text>
                </TouchableOpacity>
              </View>
            </View>
            <View style={styles.operations}>
              <TouchableOpacity onPress={()=>this.buttonPressed("+")}  style={styles.btn}>
                <Text style={[styles.btntext,styles.white]}>+</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={()=>this.buttonPressed("-")}  style={styles.btn}>
                <Text style={[styles.btntext,styles.white]}>-</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={()=>this.buttonPressed("*")}  style={styles.btn}>
                <Text style={[styles.btntext,styles.white]}>*</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={()=>this.buttonPressed("/")}  style={styles.btn}>
                <Text style={[styles.btntext,styles.white]}>/</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={()=>this.operate("AC")}  style={styles.btn}>
                <Text style={[styles.btntext,styles.white]}>AC</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
    );
  }
}
const styles = StyleSheet.create({
  conainer:{
    flex: 1
  },
  row: {
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  btn: {
    fontSize:30,
    flex:1,
    alignItems:'center',
    alignSelf:'stretch',
    justifyContent:'center'
  },
  white: {
    color:'white'
  },
  btntext: {
    fontSize:30
  },
  resultText:{
    fontSize:50,
    color: 'white'
  },
  calculationText:{
    fontSize:50,
    color: 'white'
  },
  result:{
    fontSize:50,
    flex: 2,
    backgroundColor: 'grey',
    justifyContent:'center',
    alignItems: 'flex-end'
  },
  calculation: {
    flex: 1,
    backgroundColor:'orange',
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  buttons: {
    fontSize:24,
    flex: 7,
    flexDirection: 'row'
  },
  numbers: {

    flex: 3,
    backgroundColor:'white'
  },
  operations: {

    flex:1,
    justifyContent: 'space-around',
    backgroundColor: 'black'
  }
})

//export default App;
