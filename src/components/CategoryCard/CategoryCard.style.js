
import { StyleSheet } from 'react-native'

export default styles = StyleSheet.create({
container:{
    borderWidth:1,
    borderColor: '#bdbdbd',
    backgroundColor: '#EBEFF1',
    margin: 10,
    flexDirection: 'row',
    borderTopLeftRadius:50,
    borderBottomLeftRadius:50,
},
image:{
    width:100,
    // height:100,
    minHeight:100,
    resizeMode: 'contain',  // sığdırır.
    backgroundColor: 'white',
    borderRadius: 50,
},
body_container:{
    flex:1,
    padding:5,
    justifyContent:'space-between',
    backgroundColor:'#EBEFF1',
},
title:{
    fontWeight: 'bold',
    fontSize:18,
},
price:{
    textAlign:'right',
    fontSize:16,
    fontStyle:'italic'

},

})