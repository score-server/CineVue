export default {
  data() {
    return {
      name: "home",
      movieData: null
    }
  },
  mounted: function () {
    var self = this;
    $.ajax({
      url: 'https://api.coindesk.com/v1/bpi/currentprice.json',
      method: 'GET',
      success: function (data) {
        self.movieData = JSON.parse(data);
        console.log(data)
      },
      error: function (error) {
        console.log(error);
      }
    });
  }
}
