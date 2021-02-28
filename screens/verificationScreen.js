import React, {useState} from 'react';
import {SafeAreaView, Text, StyleSheet, Image, Button} from 'react-native';
 
import {
  CodeField,
  Cursor,
  useBlurOnFulfill,
  useClearByFocusCell,
} from  'react-native-confirmation-code-field';
import { TouchableOpacity } from 'react-native-gesture-handler';

     
   
    const CELL_COUNT = 4;
     
    const verificationScreen = ({navigation}) => {
      const [value, setValue] = useState('');
      const ref = useBlurOnFulfill({value, cellCount: CELL_COUNT});
      const [props, getCellOnLayoutHandler] = useClearByFocusCell({
        value,
        setValue,
      });
      
     
      return (
        <SafeAreaView style={styles.container}>
          <Text style={styles.title}>Verification</Text>
          <Image  style ={styles.verified}  source={require('../assets/verified.png') } />
          <Text style={{fontSize:10}}>Please enter verificaton code  send to your Email address</Text>
          
          <CodeField
            ref={ref}
            {...props}
            value={value}
            onChangeText={setValue}
            cellCount={CELL_COUNT}
            rootStyle={styles.codeFieldRoot}
            keyboardType="number-pad"
            textContentType="oneTimeCode"
            renderCell={({index, symbol, isFocused}) => (
              <Text
                key={index}
                style={[styles.cell, isFocused && styles.focusCell]}
                onLayout={getCellOnLayoutHandler(index)}>
                {symbol || (isFocused ? <Cursor /> : null)}
              </Text>
            
            )}
            
          />
         <Button title="  Verify  " 
             onPress={() => navigation.navigate("LoginScreen") }
             >
               </Button>
        </SafeAreaView>
      );
    };
     
export default verificationScreen;

const styles = StyleSheet.create({
   
    title: {textAlign: 'center', fontSize: 40,color:'#22AFD1',position:'absolute',top:30},
    codeFieldRoot: {marginTop: 20},
    cell: {
      width: 40,
      height: 40,
      lineHeight: 38,
      fontSize: 24,
      borderWidth: 2,
      borderColor: '#F1F7F8',
      textAlign: 'center',
    },
    focusCell: {
      borderColor: '#22AFD1',
    },
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white'
      },
      button: {
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: "center",
        backgroundColor: "#22AFD1",
        marginBottom: 100,
        position: 'absolute',
        top: 60,
        marginLeft:-40,
        width: 100,
        height: 35,
        borderRadius: 5
    
      },
      verified:{
       height:80,
       width:80,
       position:'absolute',
       top:90

      }
    
  });