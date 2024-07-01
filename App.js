import { useState } from 'react';
import { View, Text, StyleSheet, SectionList, StatusBar, RefreshControl } from 'react-native';


const App = () => {
// const [items, setItems] = useState([])
const [refreshing, setRefreshing] = useState(false);
const [data, setData] = useState([
  {
    title: 'Title 1',
    data: ['Item 1']
  },
  {
    title: 'Title 2',
    data: ['Item 2', 'Item 3']
  },
]);
let DATA = [
  {
        title: 'Title 1',
        data: ['Item 1']
      },
      {
        title: 'Title 2',
        data: ['Item 2', 'Item 3']
      },
      
];

const onRefresh = () => {
  setRefreshing(true)
  const newData = [
    ...data,
    { title: 'Title 3', data: ['Item 4', 'Item 5'] }
  ];
  setData(newData);
  setRefreshing(false)
}
  return (
    <SectionList
    style={styles.container}
      keyExtractor={(item, index) => item+index}
      sections={data}
      renderItem={({item}) => (
        <View style={styles.item}>
          <Text style={styles.title}>{item}</Text>
        </View>
      )}

      renderSectionHeader={({section: {title}}) => (
        <Text style={styles.header}>{title}</Text>
      )}

      refreshControl={
      <RefreshControl 
        refreshing={refreshing}
        onRefresh={onRefresh}
      />}

     />
  )
}

const styles = StyleSheet.create({
  container: {
    paddingTop: StatusBar.currentHeight,
    marginHorizontal: 16,
    
    
  },
  item: {
    
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
  },
  header: {
    fontSize: 32,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
  },
})
export default App;