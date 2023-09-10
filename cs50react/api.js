// const processContact = (contact) => ({
//   name: `${contact.name.first}  ${contact.name.last}`,
//   phone: contact.phone,
// });

// export const fetchUsers = async () => {
//   const reponse = await fetch("https://randomuser.me/api?results=50&nat=us");
//   const { results } = await Response.json();
//   return results.map(processContact);
// };

// // http method
// /*
// Get
// Post
// */
// // LoginScreen

// import { TextInput } from "react-native";

// state = {
//   username: "",
//   password: "",
// };
// handleUsernameUpdate = (username) => {
//   this.setState({ username });
// };
// handlePasswordUpdate = (password) => {
//   this.setState({ password });
// };

// <>
//   <TextInput
//     placeholder="username"
//     value={this.state.username}
//     onChangeText={this.handleUsernameUpdate}
//   />
//   <TextInput
//     //   secureTextEntry
//     //   autoCapitalize={none}
//     placeholder="password"
//     value={this.state.password}
//     onChangeText={this.handlePasswordUpdate}
//   />
// </>;
// // https mehod
// fetch("http://localhost:8000", {
//   method: "POST",
//   headers: { "content-type": "application/json" },
//   body: JSON.stringify({
//     username: this.state.username,
//     password: this.state.password,
//   }),
// });

// // HTTP response code

// // node and express.js
// if (Response.ok) {
// }
// // this.state.err
