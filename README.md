# Segment Creation

Page with a button caption “Save segment” will shown

When click on “Save segment” button a popup will appear

The popup contains a text box to get the segment name

And also it has a dropdown name as “Add schema to segment” with below options

a. Label: First Name Value: first_name

b. Label: Last Name Value: last_name

c. Label: Gender Value: gender

d. Label: Age Value: age

e. Label: Account Name Value: account_name

f. Label: City Value: city

g. Label: State Value: state

A link was added and named as “+Add new schema”
When select an option from the “Add schema to segment” dropdown and click on “+Add new schema” a new dropdown added.

The newly added dropdown will be able to change. And it has options which are not selected yet.

Once the new dropdown added “Add schema to segment” will be reset and have unselected options

When user click on “save the segment” data will send to server.

# Features

 For managing complex state logic useREducer is used
 
 immer third party is used for complex state updates
 
 To aviod prop drilling useContext hook is used
 
 useCallback and useMemo is used To optimize performance in functional components by memoizing values and functions.

 # Installation
 npm install
 
 # Testing and Quality Assurance
 The project has undergone comprehensive testing to ensure all functionalities work as expected and that the code is bug-free.
 I've covered various scenarios and edge cases to validate the robustness of the application.

 # Deployment
- [Front-End Deployed URL](https://addschema.netlify.app/) 
- [BackEnd Code](https://github.com/yuvansankar-dev/AddSchema_Backend/tree/main) 
- [Sample webhooks post call output](https://webhook.site/#!/view/c7ecffc1-ceaf-4937-967d-b915581003fe/0c7ae487-7a7d-4403-876d-fc084e6f3a8c/1) 
