import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Dimensions, ScrollView } from 'react-native';
import { LineChart } from 'react-native-chart-kit'


export default function App() {
  return (
    <View style={styles.container} >
      <View>
        <Text>jdsljndsckscmsk;d</Text>
      </View>
      <View>
        <Text>jdsljndsckscmsk;d</Text>
      </View>
      <View>
        <Text>jdsljndsckscmsk;d</Text>
      </View>
      <View>
        <Text>jdsljndsckscmsk;d</Text>
      </View>
      <View style={{height:400, overflow:'hidden'}}>
      <ScrollView horizontal={true} 
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{flexGrow:1}}
    >
      <LineChart
  data={{
    labels: ['January', 'February', 'March', 'April','May', 'June','July', 'August', 'September', 'November', 'December'],
    datasets: [
      {
        data: [
          Math.random() * 100,
          Math.random() * 100,
          Math.random() * 100,
          Math.random() * 100,
          Math.random() * 100,
          Math.random() * 100,
          Math.random() * 100,
          Math.random() * 100,
          Math.random() * 100,
          Math.random() * 100,
          Math.random() * 100,
          Math.random() * 100,
        ],
        color: (opacity=0.1) => `#6F64CD`,
        withScrollableDot:true
      },
    ],
  }}
  decorator={() => {
    return <View style={{display:'flex', flexDirection:'row', top:280, left:50}}>
      <Text style={{color:'white', fontSize:11, marginRight:35}}>$100k</Text>
      <Text style={{color:'white', fontSize:11, marginRight:35}}>$200k</Text>
      <Text style={{color:'white', fontSize:11, marginRight:35}}>$300k</Text>
      <Text style={{color:'white', fontSize:11, marginRight:35}}>$400k</Text>
      <Text style={{color:'white', fontSize:11, marginRight:35}}>$500k</Text>
      <Text style={{color:'white', fontSize:11, marginRight:35}}>$600k</Text>
      <Text style={{color:'white', fontSize:11, marginRight:35}}>$700k</Text>
      <Text style={{color:'white', fontSize:11, marginRight:35}}>$800k</Text>
      <Text style={{color:'white', fontSize:11, marginRight:35}}>$900k</Text>
      <Text style={{color:'white', fontSize:11, marginRight:35}}>$1100k</Text>
      <Text style={{color:'white', fontSize:11, marginRight:35}}>$1200k</Text>
    </View>
  }}
  fromZero={false}
  withVerticalLines={false}
  withHorizontalLabels={false}
  width={Dimensions.get('window').width * 2} // from react-native
  height={300}
  withDots={false}
  // withScrollableDot={true}

  withShadow={false}
  chartConfig={{
    backgroundColor: "1B1831",
    backgroundGradientFrom: '#1B1831',
    backgroundGradientFromOpacity:0.95,
    backgroundGradientTo: '#1B1831',
    backgroundGradientToOpacity:0.95,
    decimalPlaces: 2, // optional, defaults to 2dp
    color:(opacity=255) => `#6A6A83`,
    strokeWidth:4.5,
    withScrollableDot:true,
    style: {
      borderRadius: 16,
    },
  }}
  bezier
  style={{
    marginVertical: 10,
    // borderRadius: 16,  
    flex: 1 
  }}
/>
</ScrollView>
      </View>
<View>
        <Text>jdsljndsckscmsk;d</Text>
      </View><View>
        <Text>jdsljndsckscmsk;d</Text>
      </View><View>
        <Text>jdsljndsckscmsk;d</Text>
      </View><View>
        <Text>jdsljndsckscmsk;d</Text>
      </View>
     
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
