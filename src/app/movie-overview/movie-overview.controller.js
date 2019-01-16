import {get} from '../shared/service/http/api.service';

export default {
  name: "movie-overview",
  data() {
    return {
      movieModel: get('/movie', '123')
    }
  }
}
