
/**
 * 
 * @param {*} data - array of values 
 * @returns 
 */

const ChartView = (props) => {
  const {data, labels, decoratorFn = () => null, height } = props
    return (
        <ScrollView horizontal={true} 
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{flexGrow:1}}
      >
        <LineChart
    data={{
      labels,
      datasets: [
        {
          data,
          color: (opacity=0.1) => `#6F64CD`,
          withScrollableDot:true
        },
      ],
    }}
    decorator={decoratorFn}
    fromZero={false}
    withVerticalLines={false}
    withHorizontalLabels={false}
    width={Dimensions.get('window').width * 2} // from react-native
    height={height}
    withDots={false}
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
      flex: 1 
    }}
  />
  </ScrollView>
 )
}


export default ChartView;