function BackButton() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen
        name="Details"
        component={DetailsScreen}
        options={{
          headerBackTitle: 'Custom Back',
          headerBackTitleStyle: {fontSize: 30},
        }}
      />
    </Stack.Navigator>
  );
}
