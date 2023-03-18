async function setItem(key, value) {
    localStorage.setItem(key, value);
 }
 
 async function getItem(key) {
   const value =  localStorage.getItem(key);
   return value;
 }
 
 async function removeItem(key) {
    localStorage.removeItem(key);
 }
 
 async function keys() {
   const { keys } =  await localStorage.keys();
   return keys
 }
 
 async function clear() {
    localStorage.clear();
 }
 
 export default { setItem, getItem, removeItem, keys, clear }