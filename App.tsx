// App.js (update the existing code)
import React, { useState } from 'react';
import { View, Text, TextInput, FlatList, Alert, StyleSheet, TouchableOpacity} from 'react-native';
import Filters from './src/components/Filters';
import TeamList from './src/screens/TeamList';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import TeamDetails from './src/screens/TeamDetails';
import mockData from './src/data/heliverse_mock_data.json'
import { SearchBar } from 'react-native-screens';
import Button from './src/components/Button';
import UserCard from './src/components/UserCard';

const Stack = createStackNavigator();
const App = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [domainFilter, setDomainFilter] = useState('');
  const [genderFilter, setGenderFilter] = useState('');
  const [availabilityFilter, setAvailabilityFilter] = useState(false);
  const [filteredData, setFilteredData] = useState([]);
  const [teamMembers, setTeamMembers] = useState([]);

  const itemsPerPage = 10;
  const [currentPage, setCurrentPage] = useState(1);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const usersOnPage = filteredData.slice(startIndex, endIndex);


  const addToTeam = (user?:any) => {
    if(teamMembers.filter(data=>data.domain==user.domain).length==0)
    setTeamMembers([...teamMembers, user]);
    else
    Alert.alert('This domain user already exist.')
  };

  const applyFiltersAndSearch = () => {
    let filteredUsers = mockData;
  
    if (searchQuery) {
      filteredUsers = filteredUsers.filter((user) =>
        `${user.first_name} ${user.last_name}`
          .toLowerCase()
          .includes(searchQuery.toLowerCase())
      );
    }
  
    if (domainFilter) {
      filteredUsers = filteredUsers.filter((user) => user.domain === domainFilter);
    }
  
    if (genderFilter) {
      filteredUsers = filteredUsers.filter((user) => user.gender === genderFilter);
    }
  
    if (availabilityFilter) {
      filteredUsers = filteredUsers.filter((user) => user.available);
    }
  
    setFilteredData(filteredUsers);
  };
  
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home">
          {(props) => (
            <View>
              <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center',margin:10,}}>
                <TextInput
                  placeholder="Search by name"
                  onChangeText={(text) => setSearchQuery(text)}
                  value={searchQuery}
                  style={{borderWidth:1,width:'80%',borderRadius:10,paddingHorizontal:10}}
                />
                <Button title="Search" onPress={applyFiltersAndSearch} />
            </View>
              <Filters
                domainFilter={domainFilter}
                setDomainFilter={setDomainFilter}
                genderFilter={genderFilter}
                setGenderFilter={setGenderFilter}
                availabilityFilter={availabilityFilter}
                setAvailabilityFilter={setAvailabilityFilter}
              />
            <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center',margin:10}}>   
              <Button title="Apply Filters" onPress={applyFiltersAndSearch} />
              <Button
                title="View Team Details"
                onPress={() =>
                  props.navigation.navigate('TeamDetails', { teamMembers })
                }
              />
            </View>
            <View style={{marginHorizontal:10,padding:10,justifyContent:'center',height:'70%',marginBottom:20,}}>
              <FlatList
                data={usersOnPage}
                keyExtractor={(item) => item?.id}
                renderItem={({ item }) => (
                 <UserCard user={item} onPress={addToTeam}/>
                )}
                ItemSeparatorComponent={() => <View style={styles.separator} />}
              />
              <View style={styles.pagination}>
                {currentPage > 1 && (
                  <Button title="Previous Page" onPress={() => setCurrentPage(currentPage - 1)}/>
                  )}
                {endIndex < filteredData.length && (
                  <Button title="Next Page" onPress={() => setCurrentPage(currentPage + 1)}/>
                )}
              </View>
                    </View>
                    </View>
                  )}
        </Stack.Screen>
        <Stack.Screen name="TeamDetails" component={TeamDetails} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  userCard: {
    backgroundColor: 'white',
    borderRadius: 8,
    padding: 16,
    marginBottom: 8,
  },
  separator: {
    height: 8,
  },
  pagination: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 16,
  },
  pageButton: {
    backgroundColor: 'blue',
    padding: 8,
    borderRadius: 4,
  },
  buttonText: {
    color: 'white',
  },
});

export default App;
