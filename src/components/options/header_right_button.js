function StackScreen() {
    return (
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={({ navigation, route }) => ({
            headerTitle: (props) => <LogoTitle {...props} />,
            // Add a placeholder button without the `onPress` to avoid flicker
            headerRight: () => <Button title="Update count" />,
          })}
        />
      </Stack.Navigator>
    );
  }
  
  function HomeScreen({ navigation }) {
    const [count, setCount] = React.useState(0);
  
    React.useEffect(() => {
      // Use `setOptions` to update the button that we previously specified
      // Now the button includes an `onPress` handler to update the count
      // TODO: make chatgpt explain
      navigation.setOptions({
        headerRight: () => (
          <Button onPress={() => setCount((c) => c + 1)} title="Update count" />
        ),
      });
    }, [navigation]);
  
    return <Text>Count: {count}</Text>;
  }