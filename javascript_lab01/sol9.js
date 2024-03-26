const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
function capitalize(str){
    return str.charAt(0).toUpperCase() + str.slice(1)
}
rl.question("Enter a city name: ", function(userIp) {
    userIp = userIp.trim();
    let ip = capitalize(userIp)
    console.log(ip)
    const cities = ["Nagpur", "Mumbai", "Pune", "Chennai", "Delhi"];
    const index = cities.indexOf(ip);
    if (index === -1) {
      console.log("Not Found");
    }
    else {
      console.log(`Found at ${index} `);
    }
    rl.close();
  });
