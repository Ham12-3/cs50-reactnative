const processContact = (contact) => ({
  name: `${contact.name.first}  ${contact.name.last}`,
  phone: contact.phone,
});

export const fetchUsers = async () => {
  const reponse = await fetch("https://randomuser.me/api?results=50&nat=us");
  const { results } = await Response.json();
  return results.map(processContact);
};

// http method
/* 
Get
Post
*/
// LoginScreen 

import { TextInput } from "react-native";

<TextInput placeholder="username" value={this.state.username} onChange={this.handleUsernameUpdate}/>
<TextInput placeholder="password" value={this.state.password}/>
