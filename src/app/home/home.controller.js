import Api from "../../Api";

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
      url: Api.MOVIE_LIST(1, "", "", ""),
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
