export function get(apiPath, sessionid) {
  this.$http.get('http://scorewinner.ch:8081' + apiPath + '?sessionId=' + sessionid).then((data) => {
    this.data = data;
  });
  console.log(this.data);
  return this.data
}
