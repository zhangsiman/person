import axios from 'axios';

 function searchGit (add) {
   let address = `https://api.github.com/users/${add}`;
   return axios.get(address)
     .then( (res) => (
       { getDate:res.data }
     ))
    .catch(function (error) {
       alert(error);
     });
 }


 function getJson() {
   let address = `https://raw.githubusercontent.com/zhangsiman/9-20bigdemo/master/duopingshidai.json?${Math.random()}`;
   return axios.get(address)
    .then( (res) => (
       { getJson:res.data }
     ))
     .catch(function (error) {
       alert(error);
     });
 }

 function getMd(add) {
   let address = `https://raw.githubusercontent.com/zhangsiman/9-20bigdemo/master/blog/${add}.md`;
   return axios.get(address)
     .then( (res) => (
       { getMd:res.data }
     ))
     .catch(function (error) {
       alert(error);
    });
 }

 export { searchGit,getJson,getMd };
